const path = require('path');
const nodemailer = require('nodemailer');
const {host, port, user, pass} = require('../config/mail.json');
const hbs = require('nodemailer-express-handlebars');

var transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
  });

var handlebarsOptions = {
  viewEngine: {
      extName: '.html',
      partialsDir: path.resolve('./src/resources/mail/auth'),
      layoutsDir: path.resolve('./src/resources/mail/auth'),
      defaultLayout: 'forgotPass.html',
  },
  viewPath: path.resolve('./src/resources/mail/'),
  extName: '.html'
};
transport.use('compile', hbs(handlebarsOptions));


module.exports = transport;