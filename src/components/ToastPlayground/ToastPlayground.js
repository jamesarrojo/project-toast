import React, { useContext } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
// import Toast from '../Toast/Toast';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastPlayground() {
    const {
        handleSubmit,
        message,
        variantOptions,
        setMessage,
        variant,
        setVariant,
    } = useContext(ToastContext);
    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf />

            <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: 'baseline' }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            required={true}
                            id="message"
                            className={styles.messageInput}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {variantOptions.map((option) => (
                            <label htmlFor={`variant-${option}`} key={option}>
                                <input
                                    id={`variant-${option}`}
                                    type="radio"
                                    name="variant"
                                    value={option}
                                    checked={option === variant}
                                    onChange={(e) => setVariant(e.target.value)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button>Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
