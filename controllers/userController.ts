import {NextFunction, Request, Response} from "express";
import {catchAsync} from "../src/utils/catchAsync";
import {validationResult} from "express-validator";

const getHome = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    return res.render('SignUp', { errors: errors.array(), name: req.body.name, email: req.body.email });
});

export {getHome}