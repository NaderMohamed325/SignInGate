import express, {NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import AppError from "./utils/AppError";
import {ErrorHandler} from "./utils/ErrorHandler";
import {userRouter} from "./routers/userRouter";
import {authRouter} from "./routers/authRouter";
import favicon from 'serve-favicon';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.set("view engine", "ejs");
app.use(express.static("public"));





app.use(favicon(__dirname + '/favicon.ico'));
// Define routes here
app.use('/', userRouter);
app.use('/signup', authRouter)

// Start server
app.use(ErrorHandler);
app.all('*', (req: Request, _res: Response, next: NextFunction) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});