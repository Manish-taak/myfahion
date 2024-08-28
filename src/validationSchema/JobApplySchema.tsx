import * as yup from "yup";

/**
 * Yup schema for the "Job Apply" form.
 * 
 * This schema is used to validate the inputs for the "Job Apply" form.
 * It includes validation for the `firstname`, `lastname`, `email`, `mobile`, `currentlocation`, `gender`, `resume`, `coverletter`, and `description` fields.
 */
export const JobApplySchema = yup.object().shape({

    /**
     * Validation for the 'firstname' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    firstname: yup
        .string() // The field should be of string type
        .required("all fields are required"), // Field is required with a custom error message

    /**
     * Validation for the 'lastname' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    lastname: yup
        .string() // The field should be of string type
        .required("all fields are required"), // Field is required with a custom error message

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
     * Validation for the 'currentlocation' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    currentlocation: yup
        .string() // The field should be of string type
        .required("all fields are required"), // Field is required with a custom error message

    /**
     * Validation for the 'gender' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    gender: yup
        .string() // The field should be of string type
        .required("all fields are required"), // Field is required with a custom error message

    /**
     * Validation for the 'resume' field.
     * 
     * - Can be of any type (mixed).
     * - Is required with a custom error message if not provided.
     */
    resume: yup
        .mixed() // The field can be of any type
        .required("upload your resume"), // Field is required with a custom error message

    /**
     * Validation for the 'coverletter' field.
     * 
     * - Can be of any type (mixed).
     * - Is required with a custom error message if not provided.
     */
    coverletter: yup
        .mixed() // The field can be of any type
        .required("upload your coverletter"), // Field is required with a custom error message

    /**
     * Validation for the 'description' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    description: yup
        .string() // The field should be of string type
        .required("all fields are required"), // Field is required with a custom error message
});
