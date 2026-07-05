import { useEffect } from "react";
import { trackLead } from "./leadTracking";

export const CONTACT_FORM_ACTION = "https://api.rootsbmd.com/public/SaveContactForm";
export const CONTACT_FORM_EMAIL_TO = "sales@goconnecthub.uk";

function getFieldLabel(field, index) {
    const dataLabel = field.getAttribute("data-label");
    const name = field.getAttribute("name");
    const ariaLabel = field.getAttribute("aria-label");
    const placeholder = field.getAttribute("placeholder");
    const label = field.id ? document.querySelector(`label[for="${field.id}"]`)?.innerText : "";
    const parentLabel = field.closest("label")?.innerText;
    const selectLabel = field.tagName.toLowerCase() === "select" ? field.options[0]?.text : "";

    return (dataLabel || ariaLabel || placeholder || label || parentLabel || selectLabel || name || `field_${index + 1}`)
        .replace(/\s+/g, " ")
        .replace(/\*/g, "")
        .trim();
}

function getCheckboxText(field) {
    const labelText = field.closest("label")?.innerText;
    const parentText = field.parentElement?.innerText;
    const value = field.value && field.value !== "on" ? field.value : "";

    return (value || labelText || parentText || "Selected").replace(/\s+/g, " ").trim();
}

function collectFields(container) {
    const fields = {};
    const elements = Array.from(container.querySelectorAll("input, select, textarea"));

    elements.forEach((field, index) => {
        const tagName = field.tagName.toLowerCase();
        const type = (field.getAttribute("type") || tagName).toLowerCase();

        if (["submit", "button", "reset", "hidden", "password"].includes(type)) {
            return;
        }

        const label = getFieldLabel(field, index);
        if (!label) {
            return;
        }

        if (type === "checkbox" || type === "radio") {
            if (field.checked) {
                const current = fields[label];
                const value = getCheckboxText(field);
                fields[label] = current ? `${current}, ${value}` : value;
            }
            return;
        }

        if (tagName === "select" && field.selectedIndex === 0 && !field.value) {
            return;
        }

        const value = tagName === "select" ? field.options[field.selectedIndex]?.text || field.value : field.value;

        if (value && value.trim()) {
            fields[label] = value.trim();
        }
    });

    return fields;
}

function getCommonValue(fields, patterns) {
    const entry = Object.entries(fields).find(([key]) => (
        patterns.some((pattern) => pattern.test(key))
    ));

    return entry?.[1] || "";
}

function getFormTitle(container) {
    const title = container.querySelector("h1, h2, h3, .title-favicon")?.innerText;
    return title?.replace(/\s+/g, " ").trim() || "Website form";
}

function getLeadType(container) {
    const configuredType = container.dataset.leadType;
    if (configuredType) {
        return configuredType;
    }

    return /quote/i.test(getFormTitle(container)) ? "quote_form" : "contact_us";
}

function hasContactIntent(container, fields) {
    if (container.querySelector('input[type="password"]')) {
        return false;
    }

    if (container.matches(".box-form-contact-leading")) {
        return Object.keys(fields).length > 0;
    }

    const text = `${container.className || ""} ${Object.keys(fields).join(" ")}`.toLowerCase();
    return /email|message|phone|number|name|quote|contact|newsletter|notify/.test(text);
}

function setStatus(container, message, type) {
    let status = container.querySelector("[data-contact-status]");

    if (!status) {
        status = document.createElement("p");
        status.setAttribute("data-contact-status", "true");
        status.style.marginTop = "12px";
        status.style.fontWeight = "700";
        container.appendChild(status);
    }

    status.textContent = message;
    status.style.color = type === "error" ? "#b42318" : "#12715b";
}

function setButtonLoading(button, loading) {
    if (!button) {
        return;
    }

    if (loading) {
        button.dataset.originalText = button.value || button.innerText;
        button.setAttribute("aria-disabled", "true");
        if ("disabled" in button) {
            button.disabled = true;
        }
        if (button.value) {
            button.value = "Sending...";
        } else {
            button.innerText = "Sending...";
        }
        return;
    }

    button.removeAttribute("aria-disabled");
    if ("disabled" in button) {
        button.disabled = false;
    }
    if (button.dataset.originalText) {
        if (button.value) {
            button.value = button.dataset.originalText;
        } else {
            button.innerText = button.dataset.originalText;
        }
    }
}

function clearFields(container) {
    Array.from(container.querySelectorAll("input, select, textarea")).forEach((field) => {
        const type = (field.getAttribute("type") || "").toLowerCase();
        if (["submit", "button", "reset", "hidden", "password"].includes(type)) {
            return;
        }

        if (type === "checkbox" || type === "radio") {
            field.checked = false;
            return;
        }

        if (field.tagName.toLowerCase() === "select") {
            field.selectedIndex = 0;
            return;
        }

        field.value = "";
    });
}

function appendValue(formData, key, value) {
    if (value) {
        formData.append(key, value);
    }
}

function buildFormData(container, fields) {
    const formData = new FormData();
    const name = getCommonValue(fields, [/name/i]);
    const email = getCommonValue(fields, [/email/i]);
    const phone = getCommonValue(fields, [/phone/i, /number/i]);
    const title = getFormTitle(container);
    const details = Object.entries(fields)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

    const message = [
        `Form: ${title}`,
        `Page: ${window.location.href}`,
        "",
        "Details:",
        details || "No details provided",
    ].join("\n");

    formData.append("email_to", CONTACT_FORM_EMAIL_TO);
    appendValue(formData, "name", name);
    appendValue(formData, "email", email);
    appendValue(formData, "phone", phone);
    formData.append("subject", title);
    formData.append("message", message);

    return formData;
}

async function submitContact(container, button) {
    const fields = collectFields(container);

    if (!hasContactIntent(container, fields)) {
        return false;
    }

    const formData = buildFormData(container, fields);

    setButtonLoading(button, true);
    setStatus(container, "Sending your details...", "success");

    try {
        const response = await fetch(CONTACT_FORM_ACTION, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Submission failed. Please try again.");
        }

        const result = await response.json().catch(() => ({}));

        if (result.status === false) {
            throw new Error(result.message || "Submission failed. Please try again.");
        }

        trackLead(getLeadType(container));
        setStatus(container, result.message || "Form submitted successfully.", "success");
        clearFields(container);
        window.location.assign(
            getLeadType(container) === "quote_form"
                ? "/thank-you/quote"
                : "/thank-you/contact"
        );
    } catch (error) {
        setStatus(container, error.message || "Please try again in a moment.", "error");
    } finally {
        setButtonLoading(button, false);
    }

    return true;
}

export default function GlobalFormHandler() {
    useEffect(() => {
        const handleSubmit = async (event) => {
            const form = event.target;
            if (!(form instanceof HTMLFormElement)) {
                return;
            }

            if (form.dataset.contactManaged === "true") {
                return;
            }

            event.preventDefault();
            const button = form.querySelector('[type="submit"]');
            await submitContact(form, button);
        };

        const handleClick = async (event) => {
            if (!(event.target instanceof Element)) {
                return;
            }

            const button = event.target.closest(".box-form-contact-leading a, .box-form-contact-leading button");
            const container = button?.closest(".box-form-contact-leading");
            const quoteTrigger = event.target.closest('a[href="#"], button');
            const triggerText = quoteTrigger?.innerText || quoteTrigger?.value || "";

            if (container?.dataset.contactManaged === "true") {
                return;
            }

            if (!button && /calculate package|get a quote|request a quote/i.test(triggerText)) {
                const quoteForm = document.querySelector(".box-form-contact-leading");
                if (quoteForm) {
                    event.preventDefault();
                    quoteForm.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                return;
            }

            if (!button || !container || button.getAttribute("href") === "/contact") {
                return;
            }

            const text = button.innerText || button.value || "";
            if (!/cost|submit|quote|calculate/i.test(text)) {
                return;
            }

            event.preventDefault();
            await submitContact(container, button);
        };

        document.addEventListener("submit", handleSubmit);
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("submit", handleSubmit);
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return null;
}
