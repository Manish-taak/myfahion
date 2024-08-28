import * as yup from "yup";

/**
 * Yup schema for the "Contact Us" form.
 * 
 * This schema is used to validate the inputs for the "Contact Us" form.
 * It includes validation for the `fullName`, `email`, `mobile`, `subject`, and `description` fields.
 */
const ContactUsSchema = yup.object().shape({

    /**
     * Validation for the 'fullName' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    fullName: yup
        .string() // The field should be of string type
        .required("All fields are required"), // Field is required with a custom error message

    /**
     * Validation for the 'email' field.
     * 
     * - Must be a string.
     * - Must match the specified regular expression to validate email format.
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
     * Validation for the 'mobile' field.
     * 
     * - Must be a string.
     * - Must match the specified regular expression to validate phone number format (exactly 10 digits).
     * - Is required with a custom error message if not provided.
     */
    mobile: yup
        .string() // The field should be of string type
        .matches(
            /^\d{10}$/, // Regular expression to validate phone number format (exactly 10 digits)
            { message: "please enter a valid number" } // Custom error message if the pattern does not match
        )
        .required("All fields are required"), // Field is required with a custom error message

    /**
     * Validation for the 'subject' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    subject: yup
        .string() // The field should be of string type
        .required("All fields are required"), // Field is required with a custom error message

    /**
     * Validation for the 'description' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    description: yup
        .string() // The field should be of string type
        .required("All fields are required"), // Field is required with a custom error message
});

// Export the schema as the default export
export default ContactUsSchema;
