import express from 'express';
import cors from 'cors'; // For handling Cross-Origin requests
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js'
import postRoutes from './routes/post.routes.js'
import commentRoutes from './routes/comment.routes.js'
import path from 'path';



// Load environment variables from .env file
dotenv.config({
    path : ".env"
});

const __drname = path.resolve();


// Initialize the app
const app = express();
app.use(cookieParser());

// Middleware
const corsOptions = {
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true, // Allow cookies to be sent
  };
app.use(express.json()); // Parse JSON bodies
app.use(cors(corsOptions)); // Enable CORS for all routes
//app.use(cookieParser());


// Connect to MongoDB
connectDB()


// Basic route for testing
// Import routes
/*import authRoutes from './routes/auth.routes.js'; // Import the auth routes
app.use('/api/users', authRoutes);*/
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post' , postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__drname,'/client/dist')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__drname,'client','dist','index.html'));
});


app.use((err, req , res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    });
});



app.get("/health",(req,res)=>{
    return res.status(200).json("Health is ohk");
})
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
