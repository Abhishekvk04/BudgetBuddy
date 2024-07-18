const mongoose = require("mongoose")

const connectDB = async() => {
    try {

        await mongoose.connect("mongodb+srv://abhishekvk:zsqnh5F5rNMGao1N@financeapp.zfkx7ub.mongodb.net/")
        .then(console.log("MongoDB connected"))

    } catch(error){
        console.log(error.message)
    }
}

module.exports = connectDB