import * as yup from "yup";

/**
 * Yup schema for the "Register" form.
 * 
 * This schema is used to validate the inputs for the "Register" form.
 * It includes validation for the `firstname`, `lastname`, `email`, `mobileno`,
 * `password`, and `confirmpassword` fields.
 */
export const RegisterSchema = yup.object().shape({

    /**
     * Validation for the 'firstname' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    firstname: yup
        .string() // The field should be of string type
        .required("All fields are required"), // Field is required with a custom error message

    /**
     * Validation for the 'lastname' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    lastname: yup
        .string() // The field should be of string type
        .required("All fields are required"), // Field is required with a custom error message

    /**
     * Validation for the 'email' field.
     * 
     * - Must be a string.
     * - Must match the specified regular expression for email format.
     * - Is required with a custom error message if not provided.
     */
    email: yup
        .string() // The field should be of string type
        .matches(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // Regular expression to validate email format
            { message: "please enter a valid email" } // Custom error message if the pattern does not match
        )
        .required("All fields are required"), // Field is required with a custom error message

    /**
     * Validation for the 'mobileno' field.
     * 
     * - Must be a string.
     * - Must match the specified regular expression for phone number format (10 digits).
     * - Is required with a custom error message if not provided.
     */
    mobileno: yup
        .string() // The field should be of string type
        .matches(
            /^\d{10}$/, // Regular expression to validate phone number format (10 digits)
            { message: "please enter a valid number" } // Custom error message if the pattern does not match
        )
        .required("All fields are required"), // Field is required with a custom error message

    /**
     * Validation for the 'password' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    password: yup
        .string() // The field should be of string type
        .required("All fields are required"), // Field is required with a custom error message

    /**
     * Validation for the 'confirmpassword' field.
     * 
     * - Must be a string.
     * - Must match the specified regular expression to enforce password policy.
     * - Is required with a custom error message if not provided.
     * - Must match the 'password' field with a custom error message if it doesn't.
     */
    confirmpassword: yup
        .string() // The field should be of string type
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, // Regular expression to enforce password policy
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character" // Custom error message if the pattern does not match
        )
        .required("All fields are required") // Field is required with a custom error message
        .oneOf([yup.ref("password")], "password must match"), // Field must match the 'password' field with a custom error message if it doesn't
});
