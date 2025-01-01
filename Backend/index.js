import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({});
import connectDB from "./utils/db.js"
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";

const _dirname = path.resolve();

//        MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
    origin: ['http://localhost:5173', 'https://localhost:5173'],
    credentials: true
}
app.use(cors(corsOptions));


const PORT = process.env.PORT || 8080;

//api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(_dirname, "/Frontend/dist")));
app.get("*", (_, res) => {
    res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
});


app.listen(PORT, () => {
    connectDB();
    console.log(`app is listening on PORT ${PORT}`);   
})