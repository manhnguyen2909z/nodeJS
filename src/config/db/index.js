const { async } = require('rxjs');
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('ket noi CSDL thanh cong');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect }; // viiet duoi dang object de khi require ben kia se la db.connect ( de hieu hon)
