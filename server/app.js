
import express from 'express'
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import helmet from 'helmet'
import dotenv from 'dotenv'
import morgan from 'morgan'
import multer from 'multer'
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// ................Routes.............//
import userCtrl from './controller/authCtrl.js'
import authRoutes from './routes/authRoutes.js'


//==========CONFIGURATIONS===============//
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({path: "./.env"})
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(morgan('common'))
app.use(cors())
app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))


//==========IMAGE Uploads CONFIG===============//
const storage = multer.diskStorage({
  destination: function(req,file,cb) {
    cb(null, 'public/assets')

  },
   filename: function(req,file,cb){
    cb(null, file.originalname)
    
   }
})

const upload = multer({storage})

// =============ROUTES====================//
app.use('/users/auth', authRoutes)


app.post('/users/auth/register', upload.single('picture'), userCtrl.registerUser)





// app.use('/api/v1/users', usersRoute)
// app.use('/api/v1/nfts', ntfsRoute)

//==========MONGO_DB CONFIG===============//

const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to MongoDB')

  })

//==========SERVER ===============//

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});