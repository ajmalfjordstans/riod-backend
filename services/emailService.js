import nodemailer from 'nodemailer'

export function contactForm(formData, subject) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: subject,
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
      <p><strong>Subscribe:</strong> ${formData.subscribe}</p>
    </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export function contactFormSConcierge(formData, subject) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SCONCIERGE_EMAIL,
      pass: process.env.SCONCIERGE_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SCONCIERGE_EMAIL,
    to: process.env.SCONCIERGE_EMAIL,
    subject: subject + ":" + formData.subject,
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export function contactFormConfirmationSConcierge(formData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SCONCIERGE_EMAIL,
      pass: process.env.SCONCIERGE_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SCONCIERGE_EMAIL,
    to: formData.email,
    subject: 'Enquiry Received',
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Thank you for your enquiry to Signature Concierge about ${formData.subject},</h2>
      <h2> One of our agent will contact you shortly</h2>
      <p>Team Signature Concierge,</p>
    </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export function subscription(formData) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: 'Newsletter Subscription',
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Newsletter Subscription</h2>
      <p><strong>Email:</strong> ${formData.email}</p>
    </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}