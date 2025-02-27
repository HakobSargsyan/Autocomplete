import {Item} from "@interfaces/Item.interface";

export interface SuggestionListProps {
    suggestions: Item[];
    query: string;
    onSelect: (item: Item) => void;
    loading: boolean
}
