const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 3000;
// cho phép truy cập từ thiết bị khác trong mạng
app.use(cors());

// đường dẫn tới thư mục frontend
const frontendPath = path.join(__dirname, "frontend");
// serve toàn bộ file frontend
app.use(express.static(frontendPath));

// PAGE 1
app.get("/", (req, res) => {

    console.log("User vào Page1:", req.ip);

    res.sendFile(path.join(frontendPath, "index2.html"));

});

// PAGE 2
app.get("/page2", (req, res) => {

    console.log("User vào Page2:", req.ip);

    res.sendFile(path.join(frontendPath, "page2.html"));

});

// API trả ảnh random
const images = [
    "https://picsum.photos/id/237/400",
    "https://picsum.photos/id/238/400",
    "https://picsum.photos/id/239/400",
    "https://picsum.photos/id/240/400"
];

app.get("/get-image", (req, res) => {

    console.log("API /get-image được gọi từ:", req.ip);

    const randomIndex = Math.floor(Math.random() * images.length);

    res.json({
        image: images[randomIndex]
    });

});

// chạy server
app.listen(PORT, HOST, () => {

    console.log("=================================");
    console.log("SERVER ĐÃ CHẠY");
    console.log("Laptop truy cập:");
    console.log("http://localhost:3000");
    console.log("");
    console.log("Điện thoại truy cập:");
    console.log("http://192.168.0.102:3000");
    console.log("=================================");

});
