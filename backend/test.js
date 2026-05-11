const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nishuu:nishuu@cluster0.h4wvsfs.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("ERROR:");
    console.log(err);
}); 