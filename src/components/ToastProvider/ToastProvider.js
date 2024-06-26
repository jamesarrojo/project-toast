import React from 'react';
const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [message, setMessage] = React.useState('');
    const [variant, setVariant] = React.useState('notice');
    const [toasts, setToasts] = React.useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setToasts([
            ...toasts,
            {
                message,
                variant,
                id: crypto.randomUUID(),
            },
        ]);
        setMessage('');
        setVariant('notice');
    }

    function dismiss(id) {
        const filteredToast = toasts.filter((toast) => toast.id !== id);
        setToasts(filteredToast);
    }

    React.useEffect(() => {
        function handleKeyDown(e) {
            if (e.code === 'Escape') {
                setToasts([]);
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <ToastContext.Provider
            value={{
                message,
                setMessage,
                variant,
                setVariant,
                toasts,
                setToasts,
                handleSubmit,
                variantOptions: VARIANT_OPTIONS,
                dismiss,
            }}
        >
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
