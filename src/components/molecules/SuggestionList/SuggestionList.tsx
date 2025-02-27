import React from "react";
import SuggestionItem from "@components/molecules/SuggestionItem/SuggestionItem";
import styles from '@components/molecules/SuggestionItem/SuggestionItem.module.css';
import {SuggestionListProps} from "@components/molecules/SuggestionList/SuggestionList.interface";

const SuggestionList: React.FC<SuggestionListProps> = ({ suggestions, query, onSelect, loading }) => {
    if (!query) return null;

    if (loading) {
        return (
            <ul className={styles.suggestionList}>
                <li className={styles.loading}>Loading...</li>
            </ul>
        );
    }

    if (suggestions.length > 0) {
        return (
            <ul className={styles.suggestionList}>
                {suggestions.map((item) => (
                    <SuggestionItem key={item.id} item={item} query={query} onSelect={onSelect} />
                ))}
            </ul>
        );
    }

    return (
        <ul className={styles.suggestionList}>
            <li className={styles.suggestionItem}>No Options</li>
        </ul>
    );
};

export default SuggestionList;
