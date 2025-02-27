import React from "react";
import styles from './Chip.module.css';
import {ChipProps} from "@components/atoms/Chip/Chip.interface";

const Chip: React.FC<ChipProps> = ({ label, onRemove }) => {
    return (
        <div className={styles.chip}>
            <span>{label}</span>
            <button className={styles.chipClose} onClick={onRemove}>
                &times;
            </button>
        </div>
    );
};

export default Chip;
