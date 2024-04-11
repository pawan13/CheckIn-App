// const validateHumanController = async (req, res, next) => {
//   try {
//     const VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?`;
//     const secret =
//       process.env.RECAPTCHA_SECRET_KEY ||
//       "6LeUcrQpAAAAAICwRVNvg6RI5en5BPIoDtmv7UpQ";
//     const { recaptchaToken } = req.body;
//     console.log("recaptchaToken", recaptchaToken);
//     const response = await axios.post(VERIFY_URL, null, {
//       params: {
//         secret: secret,
//         response: recaptchaToken,
//       },
//     });

//     console.log(response.data.success);
//     if (response.data.success) {
//       // Perform your further actions here if verification is successful
//       res.json({ success: true });
//     } else {
//       res.json({ success: false });
//     }
//     return response.data.success;
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = {
//   validateHumanController,
// };
