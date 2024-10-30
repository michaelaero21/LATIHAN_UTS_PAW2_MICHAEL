const mongoose = require("mongoose");

const transaksiSchema = new mongoose.Schema({
    product_id :{
        type: mongoose.Schema.Types.ObjectID,
        ref:'Produk',
        required: true,

    },
    pengguna_id :{
        type : mongoose.Schema.Types.ObjectID,
        ref:'Produk',
        required : true,
    },
    jumlah :{
        type : Number,
    },
    total_harga :{
        type : Number,
    },
    tanggal_transaksi :{
        type : Date,
    },

});

const Transaksi = mongoose.model('Transaksi', transaksiSchema);
module.exports = Transaksi;
