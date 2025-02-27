import React, { useState } from "react";
import useDebounce from "@hooks/useDebounce";
import useFetchPosts from "@hooks/useFetchPosts";
import { sanitizeInput } from '@shared/helpers';
import SuggestionList from "@components/molecules/SuggestionList/SuggestionList";
import ChipContainer from "@components/molecules/ChipContainer/ChipContainer";
import styles from './Autocomplete.module.css';
import { AUTOCOMPLETE_PLACEHOLDER } from "@shared/Constants";
import apiUrls from "@shared/ApiUrls";
import {AutocompleteProps} from "@components/organizms/AutoComplete/Autocomplete.interface";

const Autocomplete: React.FC<AutocompleteProps> = ({
 placeholder = AUTOCOMPLETE_PLACEHOLDER,
 multiselect= true,
}) => {
    const [inputValue, setInputValue] = useState("");
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const { debouncedValue } = useDebounce(inputValue, 500);

    const { posts, loading, error } = useFetchPosts(debouncedValue, `${apiUrls.posts_search}${debouncedValue}`);

    const handleSelect = (item: any) => {
        // Clear the input after selection
        setInputValue('');
        setSelectedValues((prevSelectedValues) => {
            if (!prevSelectedValues.includes(item.title)) {
                return multiselect ? [...prevSelectedValues, item.title] : [item.title];
            }
            return prevSelectedValues;
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(sanitizeInput(e.target.value));
    };

    const handleRemoveChip = (chip: string) => {
        setSelectedValues((prevSelectedValues) =>
            prevSelectedValues.filter((value) => value !== chip)
        );
    };

    return (
        <div className={styles.autocompleteContainer}>
            {selectedValues.length > 0 ? ( <div className={styles.inputWithChips}>
                    <ChipContainer chips={selectedValues} onRemoveChip={handleRemoveChip} />
            </div>) : null}
            <input
                className={styles.autocompleteInput}
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
            />

            {error ? (<p className={styles.autocompleteError}>{error}</p>) : null}

            <SuggestionList
                suggestions={posts}
                query={inputValue}
                onSelect={handleSelect}
                loading={loading}
            />
        </div>
    );
};

export default Autocomplete;
