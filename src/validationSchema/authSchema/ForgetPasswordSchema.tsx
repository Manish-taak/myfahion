import * as yup from "yup";

/**
 * Yup schema for the "Forget Password" form.
 * 
 * This schema is used to validate the inputs for the "Forget Password" form.
 * It includes validation for the `newpassword` and `confirmpassword` fields.
 */
export const ForgetPasswordSchema = yup.object().shape({

    /**
     * Validation for the 'newpassword' field.
     * 
     * - Must be a string.
     * - Must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.
     * - Is required with a custom error message if not provided.
     */
    newpassword: yup
        .string() // The field should be of string type
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, // Regular expression to enforce password policy
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character" // Error message if the pattern does not match
        )
        .required("Enter your password"), // Field is required with a custom error message

    /**
     * Validation for the 'confirmpassword' field.
     * 
     * - Must be a string.
     * - Must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.
     * - Is required with a custom error message if not provided.
     * - Must match the `newpassword` field with a custom error message if it doesn't.
     */
    confirmpassword: yup
        .string() // The field should be of string type
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, // Regular expression to enforce password policy
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character" // Error message if the pattern does not match
        )
        .required("Enter your password") // Field is required with a custom error message
        .oneOf([yup.ref("newpassword")], "password must match"), // Field must match the 'newpassword' field with a custom error message if it doesn't
});
