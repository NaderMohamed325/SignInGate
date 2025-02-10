

# SignInGate

This project demonstrates how to use `express-validator` for server-side validation in an Express.js application. The application includes user sign-up functionality with validation for name, email, and password.

## Project Structure

- `src/index.ts`: Main entry point of the application.
- `controllers/authController.ts`: Handles the sign-up logic.
- `controllers/userController.ts`: Handles the home page logic.
- `routers/authRouter.ts`: Defines routes for authentication.
- `routers/userRouter.ts`: Defines routes for user-related actions.
- `utils/AppError.ts`: Custom error class.
- `utils/ErrorHandler.ts`: Global error handling middleware.
- `utils/catchAsync.ts`: Utility to catch asynchronous errors.
- `views/SignUp.ejs`: EJS template for the sign-up form.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/NaderMohamed325/SignInGate.git
    cd SignInGate
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to access the home page.

## Validation Rules

- **Name**: Must contain only alphabetic characters and spaces.
- **Email**: Must be a valid email address.
- **Password**: 
  - Must be between 8 and 64 characters.
  - Must contain at least one number, one uppercase letter, and one lowercase letter.
- **Password Confirmation**: Must match the password.

## Error Handling

- Validation errors are displayed on the sign-up form.
- Custom error handling middleware is used to handle other errors.

## Dependencies

- `express`: Web framework for Node.js.
- `express-validator`: Middleware for server-side validation.
- `ejs`: Embedded JavaScript templating.
- `morgan`: HTTP request logger middleware.
- `dotenv`: Loads environment variables from a `.env` file.

