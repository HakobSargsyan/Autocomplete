import React, {useMemo} from "react";
import {LikeIcon} from "@components/atoms/Icons/LikeIcon";
import {DislikeIcon} from "@components/atoms/Icons/DislikeIcon";
import {ViewIcon} from "@components/atoms/Icons/ViewIcon";
import styles from './SuggestionItem.module.css';
import {SuggestionItemProps} from "@components/molecules/SuggestionItem/SuggestionItem.interface";

const SuggestionItem: React.FC<SuggestionItemProps> = ({ item, query, onSelect }) => {
    const highlightedBody = useMemo(() => {
        const lowerCasedQuery = query.toLowerCase();
        return item.body.split(new RegExp(`(${query})`, "gi")).map((part, index) =>
            part.toLowerCase() === lowerCasedQuery ? (
                <span key={index} className={styles.highlight}>
                    {part}
                </span>
            ) : (
                part
            )
        );
    }, [item.body, query]);

    return (
        <li onClick={() => onSelect(item)} className={styles.suggestionItem}>
            <div className={styles.suggestionContent}>
                <span className={styles.suggestionTitle}>{highlightedBody}</span>
                <small>{item.title}</small>
                <img className={styles.suggestionMetaImage} width='50px' src={`https://picsum.photos/50/50?random=${Math.floor(Math.random() * 1000)}`} alt={item.title} />
                <div className={styles.suggestionMeta}>
                    <span className={styles.metaItem}><LikeIcon />{item.reactions?.likes || 0}</span>
                    <span className={styles.metaItem}><DislikeIcon />{item.reactions?.dislikes || 0}</span>
                    <span className={styles.metaItem}><ViewIcon />{item.views || 0}</span>
                </div>
            </div>
        </li>
    );
};

export default SuggestionItem;
