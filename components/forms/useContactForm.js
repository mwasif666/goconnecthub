import { useCallback, useRef, useState } from "react";

export const CONTACT_FORM_ACTION = "https://api.rootsbmd.com/public/SaveContactForm";
export const CONTACT_FORM_EMAIL_TO = "sales@goconnecthub.uk";

export default function useContactForm() {
    const formRef = useRef(null);
    const [toastMessage, setToastMessage] = useState("");
    const [isToastVisible, setIsToastVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const showToast = useCallback((message) => {
        setToastMessage(message);
        setIsToastVisible(true);
        window.setTimeout(() => setIsToastVisible(false), 3000);
    }, []);

    const handleSubmit = useCallback(
        async (event) => {
            event.preventDefault();
            if (!formRef.current || isSubmitting) return;

            setIsSubmitting(true);
            try {
                const formData = new FormData(formRef.current);
                const response = await fetch(CONTACT_FORM_ACTION, {
                    method: "POST",
                    body: formData,
                });

                const result = await response.json().catch(() => ({}));
                if (!response.ok || result.status === false) {
                    throw new Error(result.message || "Request failed");
                }

                formRef.current.reset();
                showToast(result.message || "Form submitted successfully.");
            } catch (error) {
                showToast("Submission failed. Please try again.");
            } finally {
                setIsSubmitting(false);
            }
        },
        [isSubmitting, showToast]
    );

    return {
        formRef,
        handleSubmit,
        isSubmitting,
        toastMessage,
        isToastVisible,
    };
}
