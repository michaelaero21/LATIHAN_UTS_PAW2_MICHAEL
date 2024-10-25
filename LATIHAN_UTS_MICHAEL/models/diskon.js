const mongoose = require("mongoose");

const diskonSchema = new mongoose.Schema({
    produk_id :{
        type : mongoose.Schema.Types.ObjectID,
        ref :'Produk',
        required: true,
    },
    persentase_diskon :{
        type : Number,
    },
    tanggal_mulai :{
        type : Date,
    },
    tanggal_selesai :{
        type : Date,
    },
    keterangan :{
        type : String,
    },

});

const Diskon = mongoose.model('Diskon', diskonSchema);
module.exports = Diskon;

