import express from "express";
import { check, validationResult } from "express-validator";
import { getHome } from "../controllers/userController";

const userRouter = express.Router();

/*
🛠️ Validation Rules:
- Full Name: Must not contain numbers.
- Email: Must be a valid email address.
- Password:
  - Must be between 8 and 64 characters.
  - Must contain at least one number, one uppercase letter, and one lowercase letter.
- Password Confirmation: Must match the password.
📌 Implementation Requirements:
- Perform server-side validation using express-validator.
- If validation fails, redirect to the form again and flash the errors into the page.
- If validation passes, respond with "SUCCESSFUL".
*/

userRouter.route('/')
    .get( getHome);

export { userRouter };
