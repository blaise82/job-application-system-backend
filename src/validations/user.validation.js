import { body, validationResult } from "express-validator";
import Models from "../database/models";

const { Users } = Models;

const checkValidEmail = [
  body("email")
    .not()
    .isEmpty({ ignore_whitespace: true })
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Provide a valid email"),
];

const checkPassword = [
  body("password")
    .not()
    .isEmpty({ ignore_whitespace: true })
    .withMessage("Password is required")
];

const validateResult = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return next();
  }
  const { errors } = result;
  const errorMessageArr = errors.map((el) => el.msg);

  return res.status(422).json({
    status: 422,
    message: errorMessageArr,
  });
};

export default {
  checkValidEmail,
  checkPassword,
  validateResult,
};
