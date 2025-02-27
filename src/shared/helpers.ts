/**
 * Sanitizes an input string by removing any script tags and other HTML tags.
 * This helps prevent cross-site scripting (XSS) attacks.
 *
 * @param {string} input - The input string to sanitize.
 * @returns {string} - The sanitized string with script and HTML tags removed.
 */
export const sanitizeInput = (input: string): string => {
    return input
        .replace(/<script.*?>.*?<\/script>/gi, '') // Removes <script> tags and their content
        .replace(/<\/?[^>]+(>|$)/g, ""); // Removes all remaining HTML tags
};

/**
 * Validates an input string by checking for potentially unsafe characters.
 * This helps prevent security vulnerabilities such as injection attacks.
 *
 * @param {string} input - The input string to validate.
 * @returns {boolean} - Returns true if the input is safe, otherwise false.
 */
export const validateInput = (input: string): boolean => {
    const invalidChars = /<|>|\/|\\|&|\//; // Regular expression for disallowed characters
    return !invalidChars.test(input); // Returns false if any invalid character is found
};
