import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {
    function dismiss(id) {
        const filteredToast = toasts.filter((toast) => toast.id !== id);
        setToasts(filteredToast);
    }

    return (
        <ol className={styles.wrapper}>
            {toasts.map(({ message, variant, id }) => (
                <li className={styles.toastWrapper} key={id}>
                    <Toast id={id} variant={variant} dismiss={dismiss}>
                        {message}
                    </Toast>
                </li>
            ))}
        </ol>
    );
}

export default React.memo(ToastShelf);
