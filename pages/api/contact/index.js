//api endpoint that accepts a post request from a contact form and sends a slack webhook via a webhook url

export default async function handler(req, res) {
  const { name, email, subject, message, hcapToken, hcapEKey } = req.body;

  if (hcapToken === '' || hcapEKey === '' || hcapToken === undefined || hcapEKey === undefined) {
    res.status(400).json({ error: 'Token Required' });
    return;
  }

  //perform hcap validation
  const hcapResponse = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.REACT_APP_HCAPTCHA_SECRET}&response=${hcapToken}`,
  });
  const hcapData = await hcapResponse.json();
  if (!hcapData.success) {
    res.status(400).json({ error: 'Please redo the hCAPTCHA' });
    return;
  }

  const webhookURL = process.env.REACT_APP_SLACK_WEBHOOK_URL;
  const date = Date(Date.now()).toLocaleString('en-GB');
  const slackPayload = {
    text: `New message from ${name} (${email})`,
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `New message from ${name}`,
          emoji: false,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Name*: ${name}\n*Email*: ${email}\n*Subject*: ${subject}\n*Time*: ${date}\n*Message*:\n\n ${message}`,
        },
      },
    ],
  };

  const slackOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(slackPayload),
  };
  const slackResponse = await fetch(webhookURL, slackOptions);
  console.log(slackResponse);
  res.status(slackResponse.status).json({ message: slackResponse.status === 200 ? 'Ok' : 'Error' });
}
