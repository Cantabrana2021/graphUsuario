const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  nombreCompleto: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // La contraseña debe ser "hasheada"
  direccion: { type: String, required: true },
  telefono: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now },
  tipoUsuario: { type: String, enum: ["admin", "cliente"], default: "cliente" },
  metodoPagoPreferido: { 
    type: [String], 
    enum: ["Tarjeta", "Paypal", "Efectivo"], 
    required: true 
  },
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
