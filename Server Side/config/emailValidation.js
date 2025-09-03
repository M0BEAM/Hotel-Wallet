const nodemailer = require('nodemailer');

module.exports.transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hotelwallet2023@gmail.com',
    pass: 'axhnepdjfeakzbnr' ///password take it from app password if not showing must be make verfy 2-steps
  }
});

  

