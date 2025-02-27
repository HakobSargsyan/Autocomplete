export const sanitizeInput = (input: string): string => {
    return input.replace(/<script.*?>.*?<\/script>/gi, '').replace(/<\/?[^>]+(>|$)/g, "");
};

export const validateInput = (input: string): boolean => {
    const invalidChars = /<|>|\/|\\|&|\//;
    return !invalidChars.test(input);
};
