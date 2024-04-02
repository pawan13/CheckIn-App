const jwt = require("jsonwebtoken");
const { createSession } = require("../model/SessionModel");
const { updateAdmin } = require("../model/AdminModel");

const JWT_ACCESS_SECRET = "qwer123ertrwqwe";
const JWT_REFRESH_SECRET = "qeret1234aesrt";

const createAccessJWT = async (AdminInfo) => {
  const token = jwt.sign(AdminInfo, JWT_ACCESS_SECRET, { expiresIn: "15m" });
  await createSession({ accessToken: token, associate: AdminInfo.email });
  return token;
};

const createRefreshJWT = async (AdminInfo) => {
  const token = jwt.sign(AdminInfo, JWT_REFRESH_SECRET, { expiresIn: "30d" });
  await updateAdmin({ email: AdminInfo.email }, { refreshJWT: token });
  return token;
};

const verfifyAccessJWT = (token) => jwt.verify(token, JWT_ACCESS_SECRET);
const verifyRefreshJWT = (token) => jwt.verify(token, JWT_REFRESH_SECRET);

module.exports = {
  createAccessJWT,
  createRefreshJWT,
  verifyRefreshJWT,
  verfifyAccessJWT,
};
