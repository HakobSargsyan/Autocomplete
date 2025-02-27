import React from 'react';
import Chip from '@components/atoms/Chip/Chip';
import styles from './ChipContainer.module.css';
import {ChipContainerProps} from "@components/molecules/ChipContainer/ChipContainer.interface";

const ChipContainer: React.FC<ChipContainerProps> = ({ chips, onRemoveChip }) => {
    return (
        <div className={styles.chipsContainer}>
            {chips.map((chip, index) => (
                <Chip key={index} label={chip} onRemove={() => onRemoveChip(chip)} />
            ))}
        </div>
    );
};

export default ChipContainer;
