const nodemailer = require("nodemailer")

const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const info = await transport.sendMail({
    from: '"Administrador Pimientos" <cuentas@amapasa.com>',
    to: email, 
    subject: "Comprueva tu cuenta",
    text: "Comprueva tu cuenta en amapasa",
    html: `<p>Hola: ${nombre} Comprueva tu cuenta en Amapasa</p>
    <p> Tu cuenta ya esta casi lista solo debes comprobarla en el siguiente enlace:

    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>
    
    <p>Si tu no creaste esta cuenta puedes ignorar el mensaje</p>
    
    
    `

  })
}

const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  const info = await transport.sendMail({
    from: '"Administrador Pimientos" <cuentas@amapasa.com>',
    to: email, 
    subject: "Restablece tu password",
    text: "Restablecer password",
    html: `<p>Hola: ${nombre} has solicitado restablecer tu password</p>
    <p>Sigue el siguiente enlace para generar un nuevo password:
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Password</a>
    
    <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    `
  })
}

module.exports = {
  emailRegistro,
  emailOlvidePassword
}