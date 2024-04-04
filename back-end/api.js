const router=require("express").Router();
const bcrypt = require('bcrypt');
const aws = require('aws-sdk');
const Joi = require("joi");
const nodemailer = require('nodemailer');
const { Readable } = require('stream');
const otpGenerator = require('otp-generator');
const { User, validate } = require('./Model/user');
const { createCanvas, loadImage } = require('canvas');
const multer = require('multer');
const pdfParse = require('pdf-parse');

const multerS3 = require('multer-s3');

// const { fromBuffer } = require('pdf-image');
const axios = require('axios');
const Api_url = 'http://localhost:5000'
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
	key_id: "rzp_test_Jtpvppi2NrnCCK",
	key_secret: "OoTm8DbHtrRLPMpgZQ7bJnBO",
	
});
router.post("/create-order/:ID", async (req, res) => {	
	const amount1 = req.params.ID*100;
	const amount=amount1+0.18*amount1; // Amount in paise (change as needed)
	const currency = "INR"; // Currency code (change as needed)
  
	const options = {
	  amount,
	  currency,
	  receipt: "order_receipt_" + Date.now(),
	};
  
	try {
	  const order = await razorpay.orders.create(options);
	  res.json(order);
	} catch (error) {
	  console.error("Error creating order:", error);
	  res.status(500).json({ error: "Unable to create order" });
	}
});


  
const s3 = new aws.S3({
	accessKeyId: 'AKIA4AGTQX4LDUO6TFG4',
	secretAccessKey: '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',
	region:'ap-south-1',
  });
  console.log(process.env.AWS_ACCESS_KEY_ID)

  
  const upload = multer();
const mongoose = require('mongoose');
const { SelectedValues } = require('./models');
const validate1 = (data) => {
	const schema = Joi.object({
		Email: Joi.string().email().required().label("Email"),
		Password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

router.post("/Login1", async (req, res) => {
	try {
  
		const { error } = validate1(req.body);
    
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ Email: req.body.Email });
    
		if (!user)
    
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.Password,
			user.Password
		);
 
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });
		const token = user.generateAuthToken();
   
		
		res.status(200).send({ data: token, message: "logged in successfully" }
		);
		
	
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


router.get('/user/:Id', async (req, res) => {
	try {
	  const userId = req.params.Id; //dynamic value ati h
		
     
	  // Fetch the user data from MongoDB based on the provided user ID
	  const user = await User.findById(userId);
	  if (!user) {
		return res.status(404).json({ error: 'User not found' });
	  }
  
	  // Return the user data as the API response
	  res.json(user);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Internal server error' });
	}
  });

let storedOTP='';
router.post('/forgot',async(req,res)=>{
	const transporter = nodemailer.createTransport({
		host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'sales@gorails.tech', // your email address
    pass: 'Rajiv@123' // your email password
  }
	  });
	const otp = otpGenerator.generate(6, {digits:true, lowerCaseAlphabets: false,upperCaseAlphabets: false, specialChars: false  });
  storedOTP=otp
	// Create the email message
	const mailOptions = {
	  from: 'sales@gorails.tech',
	  to: req.body.Email, // Assuming the email is sent in the request body
	  subject: 'OTP Verification',
	  text: `Your OTP code is: ${otp}`
	};
  
	// Send the email
	transporter.sendMail(mailOptions, (error, info) => {
	  if (error) {
		
		res.status(500).json({ error: 'Failed to send OTP' });
	  } else {
	   
		res.status(200).json({ message: 'OTP sent successfully' });
	  }
	});
  
  })
router.post('/sign1', async (req, res) => {
	const emailToCheck = req.body.Email; // Assuming the email is sent in the request body
 
	// Check if the email exists in the user database
	const emailExists = await User.exists({ Email: emailToCheck });
  
	if (emailExists) {
	  // Email already exists, send an error response to the frontend
	  res.status(400).json({ error: 'Email already exists' });
	  return;
	}
  
	const transporter = nodemailer.createTransport({
		host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'sales@gorails.tech', // your email address
    pass: 'Rajiv@123' // your email password
  }
	  });
  
	const otp = otpGenerator.generate(6, {digits:true, lowerCaseAlphabets: false,upperCaseAlphabets: false, specialChars: false });
	storedOTP = otp;
  
	const mailOptions = {
	  from: 'sales@gorails.tech',
	  to: emailToCheck,
	  subject: 'OTP Verification',
	  text: `Your OTP code is: ${otp}`
	};
  
	transporter.sendMail(mailOptions, (error, info) => {
	  if (error) {
		res.status(500).json({ error: 'Failed to send OTP' });
	  } else {
		res.status(200).json({ message: 'OTP sent successfully' });
	  }
	});
  });
router.post('/Otp1',async(req,res)=>{
  const userOTP = req.body.Otp; // Assuming the OTP is sent in the request body

  // Assuming you have stored the generated OTP in a variable or database
  if (userOTP === storedOTP) {
    res.status(200).json({ message: 'OTP verification successful' });
  } else {
    res.status(400).json({ error: 'OTP verification failed' });
  }

})
router.post('/slush',async(req,res)=>{
  const { Name, Email,Password,confirmPassword } = req.body;
  try {
    
  
    
    const { error } = validate({Name, Email,Password,confirmPassword });
    
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
  
    const user = await User.findOne({ Email: req.body.Email });
   

    if (user) {
      return res.status(409).send({ message: "User with given email already exists!" });
    }

   

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
   

    const hashedPassword = await bcrypt.hash(req.body.Password, salt);
    

    const newUser = new User({ ...req.body, Password: hashedPassword });
    await newUser.save();

    

    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/update-pass", async (req, res) => {
	
	const password = req.body.NewPassword;
	const email = req.body.email;

	try {
		const user = await User.findOne({ email }); 
		
	  // Hash the password
		const salt = await bcrypt.genSalt(10);
		
		const hashedPassword = await bcrypt.hash(password, salt);
		
	  // Update the password
		await User.updateOne({ Email: email }, { $set: { Password: hashedPassword } });
		
	  res.json({ message: "Password updated successfully" });
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: "Something went wrong" });
	}
});
router.post("/update-password", async (req, res) => {
	const password = req.body.newPassword;
	const email = req.body.user.Email;
	try {
		const user = await User.findOne({ email }); 
	  // Hash the password
	  const salt = await bcrypt.genSalt(10);
	  const hashedPassword = await bcrypt.hash(password, salt);
	  // Update the password
		await User.updateOne({ email: user }, { $set: { Password: hashedPassword } });
	  res.json({ message: "Password updated successfully" });
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: "Something went wrong" });
	}
});

router.post('/users/photo', upload.single('photo'), async (req, res) => {
	try {
		
		
	  const user = await User.findById(req.body.userId);
  
	  if (!user) {
		return res.status(404).json({ message: 'User not found' });
	  }
  
		user.photo = req.file.buffer
		
	  await user.save();
  
	  res.json(user);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: 'Internal server error' });
	}
  });
  router.get('/users/photo/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const user = await User.findById(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    // Send the user photo data back as a response
    res.send(user.photo);
	  
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: 'Internal server error' });
	}
  });
  router.get('/users/photoc/:id', async (req, res) => {
	try {
	
		const id = req.params.id;

		const user = await User.findById(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    // Send the user photo data back as a response
    res.send(user.photo);
	  
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: 'Internal server error' });
	}
  });
  router.post('/api/selected-values', async (req, res) => {
	const { userId, values,Name,Email} = req.body;
  
	try {
	  // Create a new document in the SelectedValues collection
	  const selectedValues = await SelectedValues.create({ userId, values,Name,Email });
  
	  res.json({ message: 'Selected values added successfully', selectedValues });
	} catch (error) {
	  res.status(500).json({ error: 'An error occurred while adding selected values' });
	}
  })
  const fileSchema = new mongoose.Schema({
	title: String,
	synopsis: String,
	category: String,
	target: String,
	language: String,
	isMature: Boolean,
	pdfCoverUrl: String,
	pdfName: String,
	pdfUrl: String,
	imageUrl: String,
	userId: String,
	archived: {
	  type: Boolean,
	  default: false,
	},
	readCount: {
	  type: Number,
	  default: 0,
	},
	status: {
	  type: String,
	  enum: ['pending', 'accepted', 'rejected', 'pro'],
	  default: 'pending',
	},
	createdAt: {
	  type: Date,
	  default: Date.now,
	},
  });
  
  const File = mongoose.model('File4', fileSchema);
 
  const commentSchemaa = new mongoose.Schema({
	fileId: {
	  type: mongoose.Schema.Types.ObjectId,
	  ref: 'File', // Reference to the File model
	  required: true,
	},
	
  userId: {
    type: String, // Store userId as a string
    required: true,
  },
	comment: {
	  type: String,
	  required: true,
	},
	timestamp: {
	  type: Date,
	  default: Date.now,
	},
  });
  
  const Comment1 = mongoose.model('Comments', commentSchemaa);
  
  // Define a route for file upload
  router.post('/upload', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }, { name: 'pdfCover', maxCount: 1 }]), async (req, res) => {
	try {
	  const { userId, title, synopsis, category, target, language, isMature } = req.body;
	  let imageFile = req.files['image'] ? req.files['image'][0] : null;
	  const pdfFile = req.files['pdf'][0];
	  const pdfCoverFile = req.files['pdfCover'] ? req.files['pdfCover'][0] : null;
	  let imageUrl = null;
	  // Generate canvas image if no image is provided
	  if (!imageFile) {
		const canvas = createCanvas(800, 600);
		const ctx = canvas.getContext('2d');
	
		// Draw a background color or image
		ctx.fillStyle = '#F3F5F9';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	
		// Download and draw the logo image from Google Drive URL
		const logoUrl = 'https://drive.google.com/uc?export=view&id=19QS6pZrpiNXaci5y-zBwiJ-RNXhaQTtH'; // Replace with the actual Google Drive URL
		try {
		  const response = await axios.get(logoUrl, { responseType: 'arraybuffer' });
		  const logoBuffer = Buffer.from(response.data, 'binary');
		  const logoImage = await loadImage(logoBuffer);
		  const logoWidth = 400; // Adjust the width as needed
		  const logoHeight = 200;
		  const logoX = canvas.width / 2 - logoWidth / 2;
		  const logoY = canvas.height / 8;
		  ctx.drawImage(logoImage, logoX, logoY, logoWidth, logoHeight);
		} catch (error) {
		  console.error('Error downloading logo:', error);
		}
	
		// Draw title text
		ctx.fillStyle = '#000000';
		ctx.font = 'bold 46px Arial';
		ctx.textAlign = 'center';
		const titleWords = title.split(' ');
		const displayTitle = titleWords.length > 5 ? titleWords[0] : title;
		  ctx.fillText(displayTitle, canvas.width / 2, canvas.height / 8);
		  ctx.fillText('Gorails tech', canvas.width / 2, canvas.height / 2 + 20);
		  ctx.fillText('By', canvas.width / 2, canvas.height / 2 + 90);
		try {
			const userDataResponse = await axios.get(`${Api_url}/sign/user/${userId}`);
			const userData = userDataResponse.data;
	
			// Draw user name
			if (userData && userData.Name) {
				ctx.fillText(userData.Name, canvas.width / 2, canvas.height / 2 + 160); // Adjust Y position
				const belowUserNameTextY = canvas.height - 20;
				ctx.font = '30px Arial';
				ctx.fillText('Gorails tech', canvas.width / 2, belowUserNameTextY);
			}
		} catch (error) {
			console.error('Error fetching user data:', error);
		}
		// Convert canvas to a buffer
		const imageBuffer = canvas.toBuffer();
	
		// Assign imageFile to the generated canvas image
		imageFile = {
		  originalname: 'generated_image.png',
		  buffer: imageBuffer
		};
	
		// Upload generated image to S3 bucket
		const imageParams = {
		  Bucket: process.env.S3_BUCKET_NAME,
		  Key: `${Date.now()}_generated_image.png`,
		  Body: imageBuffer,
		  ACL: 'public-read'
		};
		const uploadedImage = await s3.upload(imageParams).promise();
		imageUrl = uploadedImage.Location;
	  }
	
	  // Upload image to S3 bucket if provided

	  if (imageFile) {
		const imageParams = {
		  Bucket: process.env.S3_BUCKET_NAME,
		  Key: `${Date.now()}_${imageFile.originalname}`,
		  Body: imageFile.buffer,
		  ACL: 'public-read'
		};
		const uploadedImage = await s3.upload(imageParams).promise();
		imageUrl = uploadedImage.Location;
	  }
	
	  // Upload PDF to S3 bucket
	  const pdfParams = {
		Bucket: process.env.S3_BUCKET_NAME,
		Key: `${Date.now()}_${pdfFile.originalname}`,
		Body: pdfFile.buffer,
		ACL: 'public-read'
	  };
	  const uploadedPdf = await s3.upload(pdfParams).promise();
	
	  // Upload PDF cover to S3 bucket if provided
	  let pdfCoverUrl = null;
	  if (pdfCoverFile) {
		const pdfCoverParams = {
		  Bucket: process.env.S3_BUCKET_NAME,
		  Key: `${Date.now()}_${pdfCoverFile.originalname}`,
		  Body: pdfCoverFile.buffer,
		  ACL: 'public-read'
		};
		const uploadedPdfCover = await s3.upload(pdfCoverParams).promise();
		pdfCoverUrl = uploadedPdfCover.Location;
	  }
	
	  // Save file details to MongoDB
	  const file = new File({
		title: title,
		synopsis: synopsis,
		category: category,
		target: target,
		language: language,
		isMature: isMature,
		pdfCoverUrl: pdfCoverUrl,
		pdfName: pdfFile.originalname,
		pdfUrl: uploadedPdf.Location,
		imageUrl: imageUrl,
		userId: userId,
	  });
	  await file.save();
	
	  res.json({ message: 'File uploaded successfully', file: file });
	} catch (error) {
	  console.error('Error uploading file:', error);
	  res.status(500).json({ error: 'Failed to upload file' });
	}
  });
  
  

router.get('/file/:id', async (req, res) => {
	const fileId = req.params.id;
  
	try {
	  const file = await File.findById(fileId);
	  if (!file) {
		return res.status(404).send('File not found.');
	  }
		
		res.contentType('application/pdf');
		
	  res.send(file.pdfPath);
	} catch (error) {
	  console.error(error);
	  res.status(500).send('Failed to fetch file.');
	}
  });
router.get('/files/:fileId', async (req, res) => {
	const fileId = req.params.fileId;

	try {
		const file = await File.findById(fileId);
	  if (!file) {
		return res.status(404).send('File not found.');
	  }
		
		pdfParse(file.pdfPath).then((data) => {
			const extractedText = data.text;
			
		  res.send({ text: extractedText });
		}).catch((error) => {
		  res.status(500).json({ error: 'Failed to extract text from the PDF.' });
		});
	//   res.json({ imagePath: file.imagePath, pdfPath: file.pdfPath });
	} catch (error) {
	  console.error(error);
	  res.status(500).send('Failed to fetch files.');
	}
});
// const pdf2pic = require('pdf2pic');
// const pdfPoppler = require('pdf-poppler');
// const { pdfImage } = require('pdf-image');



router.get('/filesimg/:fileId', async (req, res) => {
	const fileId = req.params.fileId;
  
	try {
	  const file = await File.findById(fileId);
  
	  if (!file) {
		return res.status(404).send('File not found.');
	  }
  
	  const pdfBuffer = file.pdfUrl;
	   

	  // Configure options for conversion
	 
  
	  // Use pdftopic's convertPdfToImages function to convert the PDF to images
	  
	  // 'images' is an array of base64-encoded image data
	  res.json({ pdfBase64: pdfBuffer});
	} catch (error) {
	  console.error(error);
	  res.status(500).send('Failed to fetch or convert the PDF file.');
	}
  });
router.post('/Otp/comments', async (req, res) => {
	try {
		
		const { fileId, comment, userId } = req.body.commentData;
		 // Add userId here
	  const newComment = new Comment1({ fileId, comment, userId }); // Add userId here
	  await newComment.save();
	  res.json(newComment);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Server error' });
	}
  });
router.get('/comments/:fileId', async (req, res) => {
	try {
		
	  const comments = await Comment1.find({ fileId: req.params.fileId })
		.populate('userId', 'Name photo'); // Assuming user's name and photoUrl fields
  
	  res.send(comments);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Server error' });
	}
  });
  
const data = [];
router.post('/upload112', upload.none(), (req, res) => {
	
	const formData = req.body;
	data.push(formData);
	
	res.status(200).json({ message: 'Data received successfully!' });
  });
  router.get('/api/images', async (req, res) => {
	try {
		const { userId } = req.query;
		
	  const images = await File.find({ }); // Retrieve only the necessary fields
	
		const imageItems = images.map((image) => ({
		_id: image._id,
		  pdfName: image.pdfName,
		  title: image.title,
		synopsis:image.synopsis,
			imageData: image.imageUrl,
			userId: image.userId,
			archived: image.archived,
			readCount:image.readCount,
			status: image.status,
			createdAt: image.createdAt || new Date('2023-10-10'),// Convert Buffer to Base64 string
	  }));
		
	  res.status(200).json(imageItems);
	} catch (error) {
	  console.error('Error fetching images:', error);
	  res.status(500).json({ error: 'Error fetching images' });
	}
  });  
  router.get('/api/images2', async (req, res) => {
	try {
	  const { userId } = req.query;
	  
	  const files = await File.find({ userId: userId }).sort({ _id: -1 });
	  
	  const imageItems = files.map((file) => ({
		_id: file._id,
		pdfName: file.pdfName,
		title: file.title,
		synopsis: file.synopsis,
		imageData: file.imageUrl,
		userId: file.userId,
		archived: file.archived,
		readCount: file.readCount,
		status: file.status,
		createdAt: file.createdAt || new Date('2023-10-10'),
	  }));
  
	  res.status(200).json(imageItems);
	} catch (error) {
	  console.error('Error fetching images:', error);
	  res.status(500).json({ error: 'Error fetching images' });
	}
  });
  
router.get('/api/images1', async (req, res) => {
	try {
		const { userId } = req.query;
		
	  const images = await File.find({ status:'accepted',userId: userId}).sort({ _id: -1 }); // Retrieve only the necessary fields
		
		const imageItems = images.map((image) => ({
		_id: image._id,
		  pdfName: image.pdfName,
		  title: image.title,
		synopsis:image.synopsis,
			imageData: image.imageUrl,
			userId: image.userId,
			archived: image.archived,
			readCount:image.readCount,
			status: image.status,
			createdAt: image.createdAt || new Date('2023-10-10'),// Convert Buffer to Base64 string
	  }));
		
	  res.status(200).json(imageItems);
	} catch (error) {
	  console.error('Error fetching images:', error);
	  res.status(500).json({ error: 'Error fetching images' });
	}
}); 
router.get('/api/images/home', async (req, res) => {
	try {
		const allowedCategories = ['Algorithm', 'DataStructure', 'ComputerNetworks','DigitalElectronics','DBMS','OperatingSystem','Aptitude','COA'];
	  const images = await File.find({ $or: [
		{ status: 'accepted' },
		{ status: 'pro' },
	  ],
	  category: { $in: allowedCategories }  }); // Retrieve only accepted images
   
	  const imageItems = images.map((image) => ({
		_id: image._id,
		pdfName: image.pdfName,
		title: image.title,
		synopsis: image.synopsis,
		imageData: image.imageUrl,
		  userId: image.userId,
		  archived: image.archived,
		  readCount: image.readCount,
		  category:image.category,
		  status: image.status,
		  createdAt: image.createdAt || new Date('2023-10-10'),  // No need to convert Buffer to Base64 as we are only fetching accepted images
	  }));
	 
	  res.status(200).json(imageItems);
	} catch (error) {
	  console.error('Error fetching images:', error);
	  res.status(500).json({ error: 'Error fetching images' });
	}
});
router.get('/api/images/homes', async (req, res) => {
	try {
	  const images = await File.find({$or: [
		{ status: 'accepted' },
		{ status: 'pro' },
	  ],}).sort({ _id: -1 }) // Sort by _id in descending order (latest first)
       // Retrieve only accepted images
   
	  const imageItems = images.map((image) => ({
		_id: image._id,
		pdfName: image.pdfName,
		title: image.title,
		synopsis: image.synopsis,
		imageData: image.imageUrl,
		  userId: image.userId,
		  archived: image.archived,
		  readCount: image.readCount,
		  category:image.category,
		  status: image.status,
		  createdAt: image.createdAt || new Date('2023-10-10'),  // No need to convert Buffer to Base64 as we are only fetching accepted images
	  }));
  
	  res.status(200).json(imageItems);
	} catch (error) {
	  console.error('Error fetching images:', error);
	  res.status(500).json({ error: 'Error fetching images' });
	}
});
router.get('/api/images/home2', async (req, res) => {
	const allowedCategories = ['Algorithm', 'DataStructure', 'ComputerNetworks'];
	try {
		const images = await File.find({ status: 'accepted',
		category: { $in: allowedCategories } }); // Retrieve only accepted images
	 
		const imageItems = images.map((image) => ({
		  _id: image._id,
		  pdfName: image.pdfName,
		  title: image.title,
		  synopsis: image.synopsis,
		  imageData: image.imageUrl,
			userId: image.userId,
			archived: image.archived,
			readCount: image.readCount,
			category:image.category,
			status: image.status,
			createdAt: image.createdAt || new Date('2023-10-10'),// No need to convert Buffer to Base64 as we are only fetching accepted images
		}));
	
		res.status(200).json(imageItems);
	  } catch (error) {
		console.error('Error fetching images:', error);
		res.status(500).json({ error: 'Error fetching images' });
	  }
});
router.get('/api/images/homeg', async (req, res) => {
	const { selectedGenre } = req.query; 
	try {
	  const images = await File.find({ category: selectedGenre,status: 'accepted' }); // Retrieve only accepted images
   
	  const imageItems = images.map((image) => ({
		_id: image._id,
		pdfName: image.pdfName,
		title: image.title,
		synopsis: image.synopsis,
		imageData: image.imageUrl,
		  userId: image.userId,
		  archived: image.archived,
		  readCount: image.readCount,
		  category:image.category,
		  status: image.status,
		  createdAt: image.createdAt || new Date('2023-10-10'),  // No need to convert Buffer to Base64 as we are only fetching accepted images
	  }));
  
	  res.status(200).json(imageItems);
	} catch (error) {
	  console.error('Error fetching images:', error);
	  res.status(500).json({ error: 'Error fetching images' });
	}
  });
router.get('/api/images/:fileId', async (req, res) => {
	try {
	  const fileId = req.params.fileId;
  
	  // Assuming you have a mongoose model named "File" for your images
		const image = await File.findById(fileId, {});
		
	  if (!image) {
		return res.status(404).json({ error: 'Image not found' });
	  }
  
	  const imageItem = {
		_id: image._id,
		pdfName: image.pdfName,
		title: image.title,
		synopsis: image.synopsis,
		  imageData: image.imageUrl,
		  userId: image.userId,
		  status: image.status,
		  createdAt: image.createdAt || new Date('2023-10-10'),
		};
		
  
	  res.status(200).json(imageItem);
	} catch (error) {
	  console.error('Error fetching image:', error);
	  res.status(500).json({ error: 'Error fetching image' });
	}
  });
  
  router.put('/api/images/:fileId', upload.none(), async (req, res) => {
	const fileId = req.params.fileId;
	const { status } = req.body;
  
	try {
	  // Find the file by fileId
	  const file = await File.findByIdAndUpdate(fileId, { status }, { new: true });
  
	  if (!file) {
		return res.status(404).json({ error: 'File not found' });
	  }
  
	  res.json(file);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Failed to update status' });
	}
  });
 
// Define the data schema
const likeSchema = new mongoose.Schema({
	userId: String,
	timestamp: {
	  type: Date,
	  default: Date.now,
	},
  });
  
  const shareSchema = new mongoose.Schema({
	userId: String,
	timestamp: {
	  type: Date,
	  default: Date.now,
	},
  });
  
  const commentSchema = new mongoose.Schema({
	content: String,
	userId: String,
	timestamp: {
	  type: Date,
	  default: Date.now,
	},
  });
  const Like = mongoose.model('Like', likeSchema);
const Share = mongoose.model('Share', shareSchema);
  const Comment = mongoose.model('Comment', commentSchema);
const schema = new mongoose.Schema(
	{
		data: String,
		imageBase64: {
			type: String, // Store the base64-encoded image as a string
		  },
		  imageexp:{
			  type: String
		  },
		userId: String,
		likes: {
		  type: Number,
		  default: 0,
		},
		shares: {
		  type: Number,
		  default: 0,
		},
		comments: [commentSchema],
		likesArray: [likeSchema],
		sharesArray: [shareSchema],
	  },
	  { timestamps: true }
  );
  
  // Define the comment schema
 
  
  // Create models
  const Data = mongoose.model('data2', schema);
 
// Create a new story
  
  router.post('/api/story', upload.single('image'), async (req, res) => {
	const { data, userId,image,_id} = req.body;
	if (data && typeof data === 'string' && data.length <= 200) {
	  const signup = new Data({
		data,
		userId
	  });
	  if (image) {
		// If selectedImage is provided, add the imageBase64 and imageexp properties
		signup.imageBase64 = image;
		signup.imageexp = _id;
	  }
	  
	  await signup.save();
	  res.status(200).json({ message: 'Story data received successfully!' });
	} else {
	  res.status(400).json({ message: 'Invalid data format or length.' });
	}
  });
  
  // Like a post
  router.post('/api/story/:id/like', async (req, res) => {
	try {
	  const data = await Data.findById(req.params.id);
	  if (!data) {
		return res.status(404).json({ message: 'Data not found.' });
		}
		
		const hasLiked = data.likesArray.some((like) => like.userId === req.body.userId);
    if (hasLiked) {
      return res.status(200).json({ hasLiked: true });
    }
		const like = new Like({ userId: req.body.userId });
		await like.save();
		data.likesArray.push(like);
	  data.likes++;
	  await data.save();
	  res.status(200).json({ message: 'Post liked successfully!' });
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: 'Internal server error.' });
	}
  });
  
  // Share a post
  router.post('/api/story/:id/share', async (req, res) => {
	try {
	  const data = await Data.findById(req.params.id);
	  if (!data) {
		return res.status(404).json({ message: 'Data not found.' });
	  }
  
	  data.shares++;
	  await data.save();
	  res.status(200).json({ message: 'Post shared successfully!' });
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: 'Internal server error.' });
	}
  });
  
  // Add a comment to a post
  router.post('/api/story/:id/comment', async (req, res) => {
	try {
		const data = await Data.findById(req.params.id);
		
	  if (!data) {
		return res.status(404).json({ message: 'Data not found.' });
	  }
  
		const { content, userId } = req.body;
		
	  if (!content || typeof content !== 'string') {
		return res.status(400).json({ message: 'Invalid comment content.' });
	  }
  
		const comment = new Comment({ content, userId });
		
		await comment.save();
		
	  data.comments.push(comment); // Add the comment to the comments array
	  await data.save();
  
	  res.status(200).json({ message: 'Comment added successfully!', comment });
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: 'Internal server error.' });
	}
  });
  
  // Retrieve all stories
  router.get('/api/story', async (req, res) => {
	try {
	  const page = req.query.page || 1; // Default to page 1 if not specified
	  const itemsPerPage = 10; // Number of items per page
  
	  const offset = (page - 1) * itemsPerPage;
  
	  const result = await Data.find()
		.sort({ createdAt: -1 })
		.skip(offset) // Skip the first "offset" items
		.limit(itemsPerPage); // Limit the result to the next "itemsPerPage" items
  
	  if (result) {
		// Return the data found in the response
		res.send(result);
	  } else {
		res.status(404).json({ message: 'No story data found.' });
	  }
	} catch (error) {
	  res.status(500).json({ message: 'Internal server error.' });
	}
  });
  
  
  // Retrieve comments for a post
  router.get('/api/story/:postId/comments', async (req, res) => {
	try {
	  const postId = req.params.postId;
  
	  // Fetch the post with the given postId from the database
	  const post = await Data.findById(postId).populate('comments');
  
	  if (!post) {
		return res.status(404).json({ message: 'Post not found.' });
	  }
  
	  // Return the comments for the post
	  res.status(200).json({ comments: post.comments });
	} catch (error) {
	  console.error('Error fetching comments:', error);
	  res.status(500).json({ message: 'Error fetching comments.' });
	}
  });
  const ReadCount = mongoose.model('ReadCount', {
	fileId: String,
	readCount: {
		type: Number,
		default: 0,
	  },
	  votedUsers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user', // Reference to your User schema, assuming you have one
	  }],
  });
  
  router.get('/readCount/:fileId', async (req, res) => {
	  const { fileId } = req.params;
	
	try {
		const readCount = await ReadCount.findOne({ fileId });
	
	  res.json(readCount || { fileId, readCount: 0 });
	} catch (error) {
	  res.status(500).json({ error: 'An error occurred' });
	}
  });
  
router.post('/readCount/:fileId', async (req, res) => {
	const { fileId } = req.params;
	
	try {
		const { readCount } = req.body;
		
		const readCountDoc = await ReadCount.findOneAndUpdate(
			{ fileId },
			{ $inc: { readCount: 1 } }, // Increment the readCount by 1
			{ upsert: true, new: true } // Set the new option to true to return the updated document
		  );
		await File.findByIdAndUpdate(fileId, { readCount: readCountDoc.readCount });
	
	  res.status(200).json({ message: 'Read count updated' });
	} catch (error) {
	  res.status(500).json({ error: 'An error occurred' });
	}
});
router.post('/vote/:fileId', async (req, res) => {
	const { fileId } = req.params;
	try {
		const { userId } = req.body;
	
		if (!userId._id) {
		  return res.status(400).json({ error: 'User ID not provided' });
		}
  
	  // Mark the file as voted by the user
	  const updatedDoc = await ReadCount.findOneAndUpdate(
		{ fileId },
		{ $addToSet: { votedUsers: userId._id} },
		{ upsert: true, new: true }
	  );
		
	  res.status(200).json(updatedDoc);
	} catch (error) {
	  res.status(500).json({ error: 'An error occurred' });
	}
});
router.get('/voted/:fileId', async (req, res) => {
	const { fileId } = req.params;
	
	 // Receive userId as a query parameter
	
	
	try {
	  const readCountDoc = await ReadCount.findOne({ fileId });
		if (!readCountDoc) {
		  
		return res.status(404).json({ error: 'File not found' });
	  }
	  
	 
		const hasVoted = readCountDoc.votedUsers.some(votedUserId => votedUserId.equals(req.query.userId));
		const voteCount = readCountDoc.votedUsers.length;

res.status(200).json({ hasVoted,voteCount });
	} catch (error) {
	  res.status(500).json({ error: 'An error occurred' });
	}
});

  
  
 router.post('/deletec/:storyId/:commentId',async(req,res)=>{
	try{
		const storyId = req.params.storyId;
		const commentId = req.params.commentId;
	

// const deletep=await Comment.findByIdAndDelete(result)
  // Find the document containing the comment
  const story = await Data.findById(storyId);

  if (!story) {
	return res.status(404).json({ message: 'Story not found.' });
  }

  const commentIndex = story.comments.findIndex(comment => comment._id.toString() === commentId);

  if (commentIndex === -1) {
	return res.status(404).json({ message: 'Comment not found.' });
  }

  story.comments.splice(commentIndex, 1); // Remove the comment from the array
  await story.save();

  res.status(200).json({ message: 'Comment deleted successfully!' });

	}
	catch{

	}
 }) 
 router.post('/report/:storyId/:commentId/:Id/:selectedValue',async(req,res)=>{
	try{
		const storyId = req.params.storyId;
		const commentId = req.params.commentId;
		const commentvalue =  req.params.Id;
		const selectedValue =  req.params.selectedValue
		
		const transporter = nodemailer.createTransport({
			host: 'smtp.hostinger.com',
	  port: 465,
	  secure: true, // true for 465, false for other ports
	  auth: {
		user: 'sales@gorails.tech', // your email address
		pass: 'Rajiv@123' // your email password
	  }
		  });
		  const mailOptions = {
			from: 'sales@gorails.tech',
			to: 'sales@gorails.tech',
			subject: 'Reported Comment',
			html: `The comment was reported : <br/>Type of Report:-${selectedValue} <br/>PostId:-${storyId}<br/>CommentId:-${commentId}<br/>commentValue:-${commentvalue}`
		  };
		
		  transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
			  res.status(500).json({ error: 'Failed to send email' });
			} else {
			  res.status(200).json({ message: 'Email sent successfully' });
			}
		  });

	}
	catch{

	}
 }) 
 router.post('/deletef/:storyId/:commentId',async(req,res)=>{
	try{
		const storyId = req.params.storyId;
		const commentId = req.params.commentId;
		

// const deletep=await Comment.findByIdAndDelete(result)
  // Find the document containing the comment
  const story = await Comment1.findById(commentId);

  if (!story) {
	return res.status(404).json({ message: 'Story not found.' });
  }

  // Remove the comment from the array
  await Comment1.findByIdAndRemove(commentId);

  res.status(200).json({ message: 'Comment deleted successfully!' });

	}
	catch{

	}
 })
 router.post('/reportf/:storyId/:commentId/:Id/:selectedValue',async(req,res)=>{
	try{
		const storyId = req.params.storyId;
		const commentId = req.params.commentId;
		const commentvalue =  req.params.Id;
		const selectedValue =  req.params.selectedValue
		
		const transporter = nodemailer.createTransport({
			host: 'smtp.hostinger.com',
	  port: 465,
	  secure: true, // true for 465, false for other ports
	  auth: {
		user: 'sales@gorails.tech', // your email address
		pass: 'Rajiv@123' // your email password
	  }
		  });
		  const mailOptions = {
			from: 'sales@gorails.tech',
			to: 'sales@gorails.tech',
			subject: 'Reported Comment',
			html: `The comment was reported : <br/>Type of Report:-${selectedValue} <br/>FileId:-${storyId}<br/>CommentId:-${commentId}<br/>commentValue:-${commentvalue}`
		  };
		
		  transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
			  res.status(500).json({ error: 'Failed to send email' });
			} else {
			  res.status(200).json({ message: 'Email sent successfully' });
			}
		  });

	}
	catch{

	}
 }) 
 router.post('/sendEmail', (req, res) => {
	const { name, email, phone,value } = req.body;

	const transporter = nodemailer.createTransport({
		host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'sales@gorails.tech', // your email address
    pass: 'Rajiv@123' // your email password
  }
	  });
  
	const mailOptions = {
	  from: 'sales@gorails.tech',
	  to:  'rajivkhanduja2@gmail.com',
	  subject: 'Queries for GorailsTech pro',
		html: `Hello here is the details of user with information as well below <br> <Strong>Name:${req.body.data.name}</Strong>:
		<br> <Strong>Email</Strong>:${req.body.data.email}
		<br> <Strong>Phone</Strong>:${req.body.data.phone}
		<br> <Strong>Package Asked Value</Strong>:${req.body.data.value}`
	};
  
	transporter.sendMail(mailOptions, (error, info) => {
	  if (error) {
		console.log(error);
		res.status(500).send('Error sending email');
	  } else {
		
		res.status(200).send('Email sent successfully');
	  }
	});
	const secondEmailOptions = {
		from: 'sales@gorails.tech',
		to: `${req.body.data.email}`,
		subject: 'Thanks for Ordering',
		html: `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Thanks For Using GorailsTech Pro</title>
    <style>
      /* Reset styles */
      body {
        margin: 0;
        padding: 0;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      /* General styles */
      body {
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.8);
      }
      img {
        display: block;
        max-width: 100%;
      }
      h1 {
        margin: 0;
        font-size: 32px;
        font-weight: 700;
        line-height: 1.2;
        color: #333;
        text-align: center;
        margin-bottom: 20px;
      }
      p {
        margin: 0;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
        margin-bottom: 20px;
        text-align: center;
      }
      a {
        color: #00b0ff;
        text-decoration: none;
      }

      /* Desktop styles */
      @media only screen and (min-width: 768px) {
        /* Container width */
        .container {
          width: 80%;
        }
      }
    </style>
  </head>
  <body>
    <table cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td align="center">
			<img src="https://drive.google.com/uc?export=view&id=1sEWulDM5-7XoXmcKI1CYlCzn84O8Kw2G" alt="GOrials Icon" class="icon" width='100px' height:'100px'>    
          <div class="container">
            <h1>Thank You for Contacting Us</h1>
            <p>Dear ${req.body.data.name},</p>
            <p>We have received your Request and are now processing it. You are receiving this email for query you have submitted.</p><p>We are successfully Upgraded you to Pro Version just check on home page.</p>
            <p>If you have any questions, please don't hesitate to contact us at <a href="mailto:sales@gorails.tech">sales@gorails.tech</a>.</p>
            <p>Thank you for choosing GorailsTech!</p>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`
	  };
	  
	  transporter.sendMail(secondEmailOptions, (error, info) => {
		if (error) {
		  console.log(error);
		} else {
		  console.log('Second email sent: ' + info.response);
		}
	  });



  });
 router.get('/api/storyuser', async (req, res) => {
	const { userId } = req.query;
  
  try {
	const story = await Data.find({ userId }); // Assuming "Data" is your mongoose model
	  if (story) {
		 
	  res.send(story);
	} else {
	  res.status(404).json({ message: 'Story not found for the given userId.' });
	}
  } catch (error) {
	res.status(500).json({ message: 'Error fetching story.', error: error.message });
  }
 }); 
 router.put('/archive/:id', async (req, res) => {
	
	try {
	  const file = await File.findByIdAndUpdate(
		req.params.id,
		{ archived: true }, // Update archived field to true
		{ new: true } // Return the updated document
	  );
  
	  if (!file) {
		return res.status(404).json({ message: 'File not found' });
	  }
  
	  res.json(file);
	} catch (error) {
	  res.status(500).json({ message: 'An error occurred', error });
	}
  });
 router.get('/archived', async (req, res) => {
	try {
		const { userId } = req.query;
		
	  const archivedFiles = await File.find({ userId, archived: true });
	  const archievedItems = archivedFiles.map((image) => ({
		_id: image._id,
		  pdfName: image.pdfName,
		  title: image.title,
		synopsis:image.synopsis,
			imageData: image.imageUrl,
			userId: image.userId,
			archived: image.archived,
			readCount:image.readCount,
		  status: image.status,
		  createdAt: image.createdAt || new Date('2023-10-10'), // Convert Buffer to Base64 string
	  }));
		
	  res.status(200).json(archievedItems);
	} catch (error) {
	  res.status(500).json({ message: 'An error occurred', error });
	}
  });
  router.put('/unarchive/:id', async (req, res) => {
	try {
	  const file = await File.findByIdAndUpdate(
		req.params.id,
		{ archived: false }, // Update archived field to true
		{ new: true } // Return the updated document
	  );
  
	  if (!file) {
		return res.status(404).json({ message: 'File not found' });
	  }
  
	  res.json(file);
	} catch (error) {
	  res.status(500).json({ message: 'An error occurred', error });
	}
  });
  
  // Delete a file by ID
router.delete('/filedel/:id', async (req, res) => {
	  
	try {
	  const file = await File.findByIdAndDelete(req.params.id);
  
	  if (!file) {
		return res.status(404).json({ message: 'File not found' });
	  }
  
	  res.json({ message: 'File deleted successfully' });
	} catch (error) {
	  res.status(500).json({ message: 'An error occurred', error });
	}
  });
  
router.get('/votecount/:fileId', async (req, res) => {
	  const { fileId } = req.params;
	try {
	  const readCountDoc = await ReadCount.findOne({ fileId });
	  if (!readCountDoc) {
		return res.status(404).json({ error: 'File not found' });
	  }
  
	  const voteCount = readCountDoc.votedUsers.length;
		
	  res.status(200).json({ voteCount });
	} catch (error) {
	  res.status(500).json({ error: 'An error occurred' });
	}
  });
router.delete('/vote/:fileId', async (req, res) => {
	const { fileId } = req.params;
	try {
	  const { userId } = req.body;
	  
	  if (!userId._id) {
		return res.status(400).json({ error: 'User ID not provided' });
	  }
  
	  // Unmark the file as voted by the user
	  const updatedDoc = await ReadCount.findOneAndUpdate(
		{ fileId },
		{ $pull: { votedUsers: userId._id } },
		{ new: true }
	  );
  
	  res.status(200).json(updatedDoc);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'An error occurred' });
	}
});
  
router.post('/postdelete/:storyId',async(req,res)=>{
	try{
		const storyId = req.params.storyId;
// const deletep=await Comment.findByIdAndDelete(result)
  // Find the document containing the comment
  const story = await Data.findByIdAndDelete(storyId);
		
  res.status(200).json({ message: 'Post deleted successfully!' });

	}
	catch{
		res.status(500).json({ message: 'Post Not Found successfully!' });
	}
 }) 

// router.get('/allusers', async (req, res) => {
	
//   try {
// 	  const users = await User.find({},'Name Email').sort({ _id: -1 });
// 	  console.log(users)
// 	  res.json(users);
//   } catch (error) {
// 	res.status(500).json({ error: 'An error occurred' });
//   }
// });
//First requirement userSchema- schema isko -

router.put('/update-status/:userId', async (req, res) => {
	try {
	  const { userId } = req.params;
	  const { newStatus } = req.body;
  
	  // Validate newStatus to ensure it's a valid value (e.g., 'basic' or 'pro')
  
	  const updatedUser = await User.findByIdAndUpdate(
		userId,
		{ $set: { status: newStatus } },
		{ new: true }
	  );
  
	  if (!updatedUser) {
		return res.status(404).json({ error: 'User not found' });
	  }
  
	  return res.status(200).json({ message: 'User status updated successfully', user: updatedUser });
	} catch (error) {
	  console.error(error);
	  return res.status(500).json({ error: 'Internal server error' });
	}
});
  
router.put('/update-status/:userId', async (req, res) => {
	try {
	  const { userId } = req.params;
	  const { newStatus } = req.body;
  
	  // Validate newStatus to ensure it's a valid value (e.g., 'basic' or 'pro')
  
	  const updatedUser = await User.findByIdAndUpdate(
		userId,
		{ $set: { status: newStatus } },
		{ new: true }
	  );
  
	  if (!updatedUser) {
		return res.status(404).json({ error: 'User not found' });
	  }
  
	  return res.status(200).json({ message: 'User status updated successfully', user: updatedUser });
	} catch (error) {
	  console.error(error);
	  return res.status(500).json({ error: 'Internal server error' });
	}
  });
module.exports=router