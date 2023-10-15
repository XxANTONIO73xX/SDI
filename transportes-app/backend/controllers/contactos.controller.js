const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const contactoCtrl = {};
const Contacto = require('../models/Contacto');
const accountTransport = require("../account_transport.json");
const oauth2Client = new OAuth2(
    accountTransport.auth.clientId,
    accountTransport.auth.clientSecret,
    "https://developers.google.com/oauthplayground",
);
oauth2Client.setCredentials({
    refresh_token: accountTransport.auth.refreshToken,
    tls: {
        rejectUnauthorized: false
    }
});

contactoCtrl.sendMessage = async (req, res) => {
    const {user, asunto, contenido, email} = req.body;
    const htmlContent = `
    <h1>Contactos App</h1>
    <p>Tiene un mensaje de parte de:</p>
    <h3>Departe de: ${user}</h3>
    <p>Asunto: ${asunto}</p>
    <div>
        ${contenido}
    </div>
    `
    try {
        accountTransport.auth.accessToken = oauth2Client.getAccessToken();
        const transporter = nodemailer.createTransport(accountTransport);
        const mailOptions = {
            from: "Contactos App <jnavarrete@cicese.edu.mx>",
            to:email,
            subject: 'Contactos App Mensaje de ' +user+ ' || ' +asunto,
            html: htmlContent
        }
        const result = await transporter.sendMail(mailOptions)
        respuesta = {message: "Mensaje enviado", result:result}
        console.log(respuesta)
        res.json(respuesta)
    } catch (err) {
        console.log(err)
        res.json({error: "Hubo un error al enviar, intentelo más tarde"})
    }
}


contactoCtrl.getContactos = async (req, res) => {
    const contacto = await Contacto.find({ idUsuario: req.params.id });
    res.json(contacto)
}

contactoCtrl.createContacto = async (req, res) => {
    const { nombre, apellidos, email, categoria, idUsuario } = req.body;
    const newContacto = new Contacto({
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        categoria: categoria,
        idUsuario: idUsuario
    });
    await newContacto.save();
    res.json({ message: 'Contacto Saved' })
}

contactoCtrl.getContacto = async (req, res) => {
    const contacto = await Contacto.findById(req.params.id);
    res.json(contacto);
}

contactoCtrl.updateContacto = async (req, res) => {
    const { nombre, apellidos, email, categoria } = req.body;
    await Contacto.findOneAndUpdate({ _id: req.params.id }, {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        categoria: categoria,
    });
    res.json({ message: 'Contacto Updated' })
}

contactoCtrl.deleteContacto = async (req, res) => {
    await Contacto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contacto Deleted' })
}

module.exports = contactoCtrl;