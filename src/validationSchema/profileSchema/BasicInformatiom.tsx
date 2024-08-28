import * as yup from "yup";

/**
 * Yup schema for the "Basic Information" form.
 * 
 * This schema is used to validate the inputs for the "Basic Information" form.
 * It includes validation for the `firstName`, `lastName`, `email`, `mobile`, and `gender` fields.
 */
export const BasicInformatiom = yup.object().shape({

    /**
     * Validation for the 'firstName' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    firstName: yup
        .string() // The field should be of string type
        .required("First name is required"), // Field is required with a custom error message

    /**
     * Validation for the 'lastName' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    lastName: yup
        .string() // The field should be of string type
        .required("Last name is required"), // Field is required with a custom error message

    /**
     * Validation for the 'email' field.
     * 
     * - Must be a string.
     * - Must be a valid email format.
     * - Is required with a custom error message if not provided.
     */
    email: yup
        .string() // The field should be of string type
        .email("Invalid email address") // Email validation with a custom error message for invalid format
        .required("Email is required"), // Field is required with a custom error message

    /**
     * Validation for the 'mobile' field.
     * 
     * - Must be a string.
     * - Must match the specified regular expression for phone number format (10 or more digits, optional leading '+').
     * - Is required with a custom error message if not provided.
     */
    mobile: yup
        .string() // The field should be of string type
        .matches(
            /^\+?\d{10,}$/, // Regular expression to validate phone number format (10 or more digits, optional leading '+')
            {
                message: "Invalid phone number", // Custom error message if the pattern does not match
                excludeEmptyString: true, // Exclude empty string from error message
            }
        )
        .required("Phone number is required"), // Field is required with a custom error message

    /**
     * Validation for the 'gender' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    gender: yup
        .string() // The field should be of string type
        .required("Gender is required"), // Field is required with a custom error message
});
