import { Router } from "express";
import { changeCurrentPassword, forgotPasswordRequest, getCurrentUser, refreshAccessToken, registerUser, resendEmailVerification, resetForgotPassword, verifyEmail } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userChangeCurrentPasswordValidator, userForgotPasswordValidator, userRegisterValidator, userResetForgotPasswordValidator } from "../validators/index.js";
import { login } from "../controllers/auth.controllers.js";
import { userLoginValidator } from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { logout } from "../controllers/auth.controllers.js";

const router = Router();

// unsecured route
router.route("/register").post(userRegisterValidator(), validate, registerUser);

router.route("/login").post(userLoginValidator(), validate, login);

router.route("/verify-email/:verificationToken").get(verifyEmail);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/forgot-password").post(userForgotPasswordValidator(), validate, forgotPasswordRequest);

router.route("/reset-password/:resetToken").post(userResetForgotPasswordValidator(), validate, resetForgotPassword);



// Secure Routes
router.route("/logout").post(verifyJWT, logout);

router.route("/current-user").post(verifyJWT, getCurrentUser);

router.route("/change-password").post(verifyJWT, userChangeCurrentPasswordValidator(), validate, changeCurrentPassword);

router.route("/resent-email-verification").post(verifyJWT, resendEmailVerification);


export default router;