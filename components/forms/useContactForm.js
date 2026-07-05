import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/router";
import { trackLead } from "./leadTracking";

export const CONTACT_FORM_ACTION = "https://api.rootsbmd.com/public/SaveContactForm";
export const CONTACT_FORM_EMAIL_TO = "sales@goconnecthub.uk";

export default function useContactForm(leadType = "contact_us") {
    const router = useRouter();
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

                trackLead(leadType);
                formRef.current.reset();
                const thankYouPath = leadType === "quote_form"
                    ? "/thank-you/quote"
                    : "/thank-you/contact";
                router.push(thankYouPath);
            } catch (error) {
                showToast("Submission failed. Please try again.");
            } finally {
                setIsSubmitting(false);
            }
        },
        [isSubmitting, leadType, router, showToast]
    );

    return {
        formRef,
        handleSubmit,
        isSubmitting,
        toastMessage,
        isToastVisible,
    };
}
