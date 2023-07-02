import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import cors from 'cors';


dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(process.env.MONGO_URI, {
            useNewURLParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB().then(() => {
    app.listen(port, () => console.log("listening on port 4000"));
}).catch(err => console.log(err));


