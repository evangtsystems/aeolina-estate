const axios = require('axios');

module.exports = async function (context, req) {
  const token = req.body.recaptchaToken;
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret,
          response: token,
        },
      }
    );

    const { success, score } = response.data;

    context.res = {
      status: success && score > 0.5 ? 200 : 400,
      body: { success, score },
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: { error: 'Failed to verify reCAPTCHA' },
    };
  }
};
