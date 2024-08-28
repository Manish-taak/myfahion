import * as yup from "yup";

/**
 * Yup schema for the "Card Option" form.
 * 
 * This schema is used to validate the inputs for the "Card Option" form.
 * It includes validation for the `cardHolderName`, `cardNumber`, `expiryDate`,
 * and `cvv` fields.
 */
export const CardOption = yup.object().shape({

    /**
     * Validation for the 'cardHolderName' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    cardHolderName: yup
        .string() // The field should be of string type
        .required("Card Holder Name is required"), // Field is required with a custom error message

    /**
     * Validation for the 'cardNumber' field.
     * 
     * - Must be a string.
     * - Must match the specified regular expression for card number format (exactly 16 digits).
     * - Is required with a custom error message if not provided.
     */
    cardNumber: yup
        .string() // The field should be of string type
        .matches(
            /^\d{16}$/, // Regular expression to validate card number format (exactly 16 digits)
            "Card Number must be exactly 16 digits" // Custom error message if the pattern does not match
        )
        .required("Card Number is required"), // Field is required with a custom error message

    /**
     * Validation for the 'expiryDate' field.
     * 
     * - Must be a string.
     * - Must match the specified regular expression for expiry date format (MM/YY).
     * - Is required with a custom error message if not provided.
     */
    expiryDate: yup
        .string() // The field should be of string type
        .matches(
            /^(0[1-9]|1[0-2])\/\d{2}$/, // Regular expression to validate expiry date format (MM/YY)
            "Expiry Date must be in MM/YY format" // Custom error message if the pattern does not match
        )
        .required("Expiry Date is required"), // Field is required with a custom error message

    /**
     * Validation for the 'cvv' field.
     * 
     * - Must be a string.
     * - Must match the specified regular expression for CVV format (3 or 4 digits).
     * - Is required with a custom error message if not provided.
     */
    cvv: yup
        .string() // The field should be of string type
        .matches(
            /^\d{3,4}$/, // Regular expression to validate CVV format (3 or 4 digits)
            "CVV must be 3 or 4 digits" // Custom error message if the pattern does not match
        )
        .required("CVV is required"), // Field is required with a custom error message
});
