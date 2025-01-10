const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    marketCap: Number,
    change24h: Number,
  },
  { timestamps: true }
);

const Crypto = mongoose.model("Crypto", cryptoSchema);

module.exports = Crypto;
