import * as React from 'react';
import * as styles from "./styles.less";

export const Button = ({text, onClick}) => {
    return (
        <button
            className={styles['button']}
            onClick={onClick}>
            {text}
        </button>
    )
};