import {NextFunction, Request, Response} from "express";
import {catchAsync} from "../utils/catchAsync";
import {validationResult} from "express-validator";

const SignUp = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req); // Capture the validation errors
    console.log(errors.array())
    if (!errors.isEmpty()) {

        return res.render('SignUp', {
            errors: errors.array()
        });
    }

    res.send('Form data received');
});


export {SignUp};