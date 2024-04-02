// this was made for mobile verification but not using it now

// const textflow = require("textflow.js");
// const TEXTFLOW_APIKEY =
//   process.env.TEXTFLOW_APIKEY ||
//   "d4RWFpDoaR69KgiMjHsd5zt0mmoR24WpUSn4EqqNmlh9U64tlWFE28vG4FuGRuiX";
// textflow.useKey(TEXTFLOW_APIKEY);

// const sendVerificationCode = async (req, res) => {
//   const { mobile } = req.body;
//   const verificationOptions = {
//     service_name: "Made in Nepal expo",
//     seconds: 600,
//   };
//   const result = await textflow.sendVerificationSMS(
//     mobile,
//     verificationOptions
//   );
//   return res.status(result.status).json(result.message);
// };

// const verfiyCode = async (req, res) => {
//   const { mobile, code } = req.body;
//   const result = await textflow.verifyCode(mobile, code);
//   if (result.valid) {
//     return res.status(200).json(result.message);
//   }
//   return res.status(result.status).json(result.message);
// };

// module.exports = {
//   sendVerificationCode,
//   verfiyCode,
// };
