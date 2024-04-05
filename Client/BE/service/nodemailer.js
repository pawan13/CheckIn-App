const nodemailer = require("nodemailer");
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

let transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: "info@beyondhimalayatech.com.au", // Your email address
    pass: "#,}!Q.0e?{3Hf&(", // Your password
  },
});

const sendOTPEmail = async ({ otp, email, fullName }) => {
  await transporter.sendMail({
    from: `"Made in Nepal Expo"<info@beyondhimalayatech.com.au>`,
    to: email,
    subject: "OTP to verify email",
    text: `hello ${fullName}, Your OTP is ${otp}. This OTP expires in 5 minutes`,
  });
};

module.exports = {
  sendOTPEmail,
};
