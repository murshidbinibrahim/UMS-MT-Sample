const multer = require("multer");
const path = require("path");

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = path.join(__dirname, "../public/uploads/"); // Construct the absolute path
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");
    const formattedTime = date
      .toLocaleTimeString([], { hour12: false })
      .replace(/:/g, "");

    const uniqueFilename = `IMG-${formattedDate}-UMS${formattedTime}${path.extname(
      file.originalname
    )}`;
    cb(null, uniqueFilename);
  },
});

// Create a Multer instance with the storage configuration
const upload = multer({ storage: storage });

module.exports = upload;
