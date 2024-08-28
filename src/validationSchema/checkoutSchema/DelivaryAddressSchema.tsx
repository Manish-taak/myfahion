// Define validation schema
import * as yup from "yup";

/**
 * Yup schema for the "Delivery Address" form.
 * 
 * This schema is used to validate the inputs for the "Delivery Address" form.
 * It includes validation for the `fullName`, `mobile`, `pincode`, `city`,
 * `fullAddress`, `landmark`, `state`, and `addressType` fields.
 */
export const DelivaryAddressSchema = yup.object().shape({

    /**
     * Validation for the 'fullName' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    fullName: yup
        .string() // The field should be of string type
        .required("Full Name is required"), // Field is required with a custom error message

    /**
     * Validation for the 'mobile' field.
     * 
     * - Must be a string.
     * - Must match the specified regular expression for phone number format (10 digits).
     * - Is required with a custom error message if not provided.
     */
    mobile: yup
        .string() // The field should be of string type
        .matches(/^\d{10}$/, { // Regular expression to validate phone number format (10 digits)
            message: "Invalid phone number", // Custom error message if the pattern does not match
            excludeEmptyString: true, // Exclude empty string from validation
        })
        .required("Mobile number is required"), // Field is required with a custom error message

    /**
     * Validation for the 'pincode' field.
     * 
     * - Must be a string.
     * - Must match the specified regular expression for pincode format (6 digits).
     * - Is required with a custom error message if not provided.
     */
    pincode: yup
        .string() // The field should be of string type
        .matches(/^\d{6}$/, { // Regular expression to validate pincode format (6 digits)
            message: "Invalid pincode", // Custom error message if the pattern does not match
            excludeEmptyString: true, // Exclude empty string from validation
        })
        .required("Pincode is required"), // Field is required with a custom error message

    /**
     * Validation for the 'city' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    city: yup
        .string() // The field should be of string type
        .required("City/Distt/Town is required"), // Field is required with a custom error message

    /**
     * Validation for the 'fullAddress' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    fullAddress: yup
        .string() // The field should be of string type
        .required("Full Address is required"), // Field is required with a custom error message

    /**
     * Validation for the 'landmark' field.
     * 
     * - Must be a string.
     * - Optional field without a custom error message.
     */
    landmark: yup
        .string(), // The field should be of string type, no required validation

    /**
     * Validation for the 'state' field.
     * 
     * - Must be a string.
     * - Is required with a custom error message if not provided.
     */
    state: yup
        .string() // The field should be of string type
        .required("State is required"), // Field is required with a custom error message

    /**
     * Validation for the 'addressType' field.
     * 
     * - Must be a string.
     * - Optional field without a custom error message.
     */
    addressType: yup
        .string(), // The field should be of string type, no required validation
});
