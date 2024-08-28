import prisma from "../../prisma";

/**
 * Function to connect to the database asynchronously.
 * @function
 * @returns {Promise<void>} A Promise that resolves when the connection is established.
 * @throws {Error} Throws an error if unable to connect to the database.
 */


export const Connectdatabase = async () => {
    try {
        await prisma.$connect(); // Attempt to establish connection to the database
    } catch (error) {
        console.log(error); // Log any errors that occur during connection
        throw new Error("unable to connect to database  "); // Throw a custom error message if connection fails
    }
};
