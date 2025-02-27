import {Item} from "@interfaces/Item.interface";

export interface SuggestionItemProps {
    item: Item;
    query: string;
    onSelect: (item: Item) => void;
}
