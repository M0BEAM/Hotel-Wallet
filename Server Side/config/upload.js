const multer = require('multer');
const path = require('path');
module.exports.upload  = () => {
  // Set up storage configuration for Multer
const storage = multer.diskStorage({
  destination: './uploads/', // Specify the directory to store the uploaded images
  filename: (req, file, callback) => {
    // Generate a unique filename for the uploaded image
    callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Create a Multer instance with the storage configuration
const upload = multer({ storage });
return upload
}

  