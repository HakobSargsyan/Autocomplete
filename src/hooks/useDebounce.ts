import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number): { setDebouncedValue: (value: (((prevState: string) => string) | string)) => void; debouncedValue: string } => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return {setDebouncedValue, debouncedValue};
};

export default useDebounce;
