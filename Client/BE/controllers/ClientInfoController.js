const {
  createClientInfo,
  getAClientInfo,
  getAllClientInfo,
  updateClientInfo,
  replaceClientInfo,
} = require("../model/ClientInfoModel");
const {
  createSession,
  getSession,
  deleteSessionByFilter,
} = require("../model/SessionModel");
const { sendOTPEmail } = require("../service/nodemailer");
const { generateOTPCode } = require("../utils");
const axios = require("axios");

const validateHuman = async (recaptchaToken) => {
  try {
    const VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?`;
    const secret =
      process.env.RECAPTCHA_SECRET_KEY ||
      "6LeUcrQpAAAAAICwRVNvg6RI5en5BPIoDtmv7UpQ";
    console.log("recaptchaToken", recaptchaToken);
    const response = await axios.post(VERIFY_URL, null, {
      params: {
        secret: secret,
        response: recaptchaToken,
      },
    });

    console.log(response.data.success);
    if (response.data.success) {
      // Perform your further actions here if verification is successful
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
    return response.data.success;
  } catch (error) {
    console.log(error);
  }
};

const createClientInfoController = async (req, res, next) => {
  try {
    const { recaptchaToken, ...rest } = req.body;

    human = validateHuman(recaptchaToken);
    console.log(human);
    if (!human) {
      res.json({
        status: "ERROR",
        message: "OOPs, you cannot fool me bot!!",
      });
    }
    console.log(rest);
    await createClientInfo(rest);

    res.json({
      status: "SUCCESS",
      message: "New Client is created!",
    });
  } catch (error) {
    next(error);
  }
};

const getAllClientInfoController = async (req, res, next) => {
  try {
    const result = await getAllClientInfo({});
    if (!result) {
      const error = new Error("404 Not found!!!");
      error.statusCode = 404;
      return next(error);
    }
    res.json({
      status: "SUCCESS",
      result,
    });
  } catch (error) {
    next(error);
  }
};

const replaceClientInfoController = async (req, res, next) => {
  try {
    console.log("Checking ....");
    const { email } = req.body;
    console.log({ email, ...req.body });
    const result = await replaceClientInfo({ email }, req.body);
    res.json({
      status: "SUCCESS",
      result,
    });
  } catch (error) {
    next(error);
  }
};

const updateClientCheckOutInfoController = async (req, res, next) => {
  try {
    console.log("Checking update....");
    const { email, checkedOut } = req.body;
    console.log({ email, checkedOut });
    const result = await updateClientInfo({ email }, { checkedOut });

    res.json({
      status: "SUCCESS",
      result,
    });
  } catch (error) {
    next(error);
  }
};

const updateClientEmailVerifiedInfoController = async (req, res, next) => {
  try {
    const { email, isVerified } = req.body;
    console.log("update email verified", email, isVerified);
    const result = await updateClientInfo({ email }, { isVerified });

    res.json({
      status: "SUCCESS",
      result,
    });
  } catch (error) {
    next(error);
  }
};

const generateOTP = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (email) {
      const ClientInfo = await getAClientInfo({ email });
      if (ClientInfo) {
        const otp = generateOTPCode();
        const result = await createSession({
          associate: email,
          accessToken: otp,
        });
        if (result) {
          await sendOTPEmail({
            otp,
            email,
            fullName: ClientInfo.fullName,
          });
        }
        return res.json({
          status: "SUCCESS",
          message: "OTP Sent",
        });
      }
    }
    return res.status(500).json({
      status: "ERROR",
      message: `Something went wrong `,
    });
  } catch (error) {
    next(error);
  }
};

const verifyOTP = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    if (email && otp) {
      // Verify the OTP against the stored session
      const session = await getSession({ associate: email, accessToken: otp });
      if (session) {
        // Check if OTP has expired
        const currentTime = new Date();
        const creationTime = session.createdAt;
        const timeDifference = currentTime - creationTime;
        if (timeDifference <= 300000) {
          // 300000 milliseconds = 5 minutes
          // If OTP is valid and not expired
          return res.json({
            status: "SUCCESS",
            message: "OTP Verified successfully",
          });
        } else {
          // If OTP is expired
          res.status(400).json({
            status: "ERROR",
            message: "OTP has expired",
          });
          return deleteSessionByFilter({ accessToken: otp });
        }
      } else {
        // If session not found, OTP is invalid
        return res.status(400).json({
          status: "ERROR",
          message: "Invalid OTP",
        });
      }
    } else {
      return res.status(400).json({
        status: "ERROR",
        message: "Email and OTP are required",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createClientInfoController,
  getAllClientInfoController,
  replaceClientInfoController,
  updateClientCheckOutInfoController,
  updateClientEmailVerifiedInfoController,
  generateOTP,
  verifyOTP,
};
