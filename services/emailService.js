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

export function enquirySConcierge(formData, subject) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SCONCIERGE_EMAIL,
      pass: process.env.SCONCIERGE_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SCONCIERGE_EMAIL,
    to: process.env.SCONCIERGE_TO_EMAIL,
    // to: "frontend.fjordstans@gmail.com",
    subject: "Signature Concierge Enquiry Form Submission",
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Signature Concierge Enquiry Form Submission</h2>
      <p><strong>Service Type:</strong> ${formData.serviceType}</p>
      <p><strong>Pickup:</strong> ${formData.pickupLocation}</p>
      <p><strong>DropOff:</strong> ${formData.dropOffLocation}</p>
      <p><strong>Date:</strong> ${formData.date}</p>
      <p><strong>Tme:</strong> ${formData.time}</p>
      <p><strong>NumOfPassengers:</strong> ${formData.numOfPassengers}</p>
      <p><strong>NumOfLuggage:</strong> ${formData.numOfLuggage}</p>
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
    to: process.env.SCONCIERGE_TO_EMAIL,
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
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; "font-family: Arial, sans-serif;">
        <h2>Thank You for Contacting Us!</h2>
        <p>Dear ${formData.firstName + " " + formData.lastName},</p>
        
        <p>We have received your message and will get back to you as soon as possible.</p>
        
        <p><strong>Here are the details you submitted:</strong></p>
        
        <ul>
            <li><strong>Name:</strong> ${formData.firstName + " " + formData.lastName}</li>
            <li><strong>Email:</strong> ${formData.email}</li>
            <li><strong>Message:</strong> ${formData.message}</li>
        </ul>
        
        <p>If you have any further questions or concerns, feel free to reach out to us.</p>
        
        <p>Best Regards,<br>
        Team Signature Concierge</p>
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