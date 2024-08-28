import * as yup from "yup";

// Regular expression for validating email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Regular expression for validating phone number format
const phoneRegex = /^\+?\d{10,14}$/;

/**
 * Yup schema for the "Login" form.
 * 
 * This schema is used to validate the inputs for the "Login" form.
 * It includes validation for the `emailOrPhone` and `password` fields.
 */
const LoginSchema = yup.object().shape({

  /**
   * Validation for the 'emailOrPhone' field.
   * 
   * - Must be a string.
   * - Is required with a custom error message if not provided.
   * - Must be either a valid email or phone number format with a custom error message if it doesn't match either.
   */
  emailOrPhone: yup
    .string() // The field should be of string type
    .required("Email or phone number is required") // Field is required with a custom error message
    .test("emailOrPhone", "Invalid email or phone number", function (value) { // Custom test to validate either email or phone format
      return emailRegex.test(value) || phoneRegex.test(value); // Return true if the value matches either regex
    }),

  /**
   * Validation for the 'password' field.
   * 
   * - Must be a string.
   * - Is required with a custom error message if not provided.
   */
  password: yup
    .string() // The field should be of string type
    .required("Password is required"), // Field is required with a custom error message
});

// Export the schema as the default export
export default LoginSchema;
