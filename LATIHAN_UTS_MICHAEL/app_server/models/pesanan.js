const mongoose = require("mongoose");

const pesananSchema = new mongoose.Schema({
    pengguna_id :{
        type : mongoose.Schema.Types.ObjectID,
        ref :'Produk',
        required: true,
    },
    produk_id :{
        type : mongoose.Schema.Types.ObjectID,
        ref :'Produk',
        required: true,
    },
    jumlah :{
        type : Number,
    },
    status :{
        type : String,
    },
    tanggal_pesanan :{
        type : Date,
    },

});

const Pesanan = mongoose.model('Pesanan', pesananSchema);
module.exports = Pesanan;

