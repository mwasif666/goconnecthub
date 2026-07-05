import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { companyInfo } from "@/util/companyInfo";

export default function ThankYouPage({ type }) {
    const isQuote = type === "quote";

    const steps = isQuote
        ? [
            { title: "We review your request", text: "Our team checks your requirements in detail." },
            { title: "We prepare your quote", text: "We match you with the best available option." },
            { title: "We get in touch", text: "You will hear from us shortly with pricing." },
        ]
        : [
            { title: "We read your message", text: "Your enquiry goes straight to our team." },
            { title: "We prepare a response", text: "The right person looks into your query." },
            { title: "We get back to you", text: "Expect a reply as soon as possible." },
        ];

    return (
        <Layout headTitle={isQuote ? "Quote Request Received" : "Message Received"}>
            <section className="thank-you-page">
                <div className="orb orb-1" aria-hidden="true" />
                <div className="orb orb-2" aria-hidden="true" />
                <div className="container">
                    <div className="thank-you-card">
                        <div className="check-wrap" aria-hidden="true">
                            <span className="ring" />
                            <div className="check">
                                <svg viewBox="0 0 52 52" fill="none">
                                    <path className="check-path" d="M14 27.5L22.5 36L38 18" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <span className="eyebrow">Submission successful</span>
                        <h1>{isQuote ? "Thank you for your quote request" : "Thank you for contacting us"}</h1>
                        <p className="lead">
                            {isQuote
                                ? "We have received your requirements. Our team will review them and contact you with the best available option."
                                : "We have received your message. A member of our team will get back to you as soon as possible."}
                        </p>

                        <div className="steps">
                            {steps.map((step, i) => (
                                <div className="step" key={step.title}>
                                    <span className="step-num">{i + 1}</span>
                                    <strong>{step.title}</strong>
                                    <small>{step.text}</small>
                                </div>
                            ))}
                        </div>

                        <div className="actions">
                            <Link className="btn btn-brand-1-big" href="/">
                                Back to homepage
                                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                            <Link className="btn btn-link-medium" href="/services">
                                Explore our services
                                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                        </div>

                        <div className="contact-strip">
                            <span className="contact-label">Need urgent assistance?</span>
                            <div className="contact-links">
                                <Link href={`tel:${companyInfo.phone}`}>
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    {companyInfo.phoneDisplay}
                                </Link>
                                <span className="dot" aria-hidden="true" />
                                <Link href={`mailto:${companyInfo.email}`}>
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    {companyInfo.email}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .thank-you-page {
                    position: relative;
                    overflow: hidden;
                    min-height: 78vh;
                    display: flex;
                    align-items: center;
                    padding: 90px 0;
                    background: linear-gradient(160deg, #eef7f8 0%, #ffffff 45%, #f3fbfb 100%);
                }

                .orb {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                }

                .orb-1 {
                    top: -120px;
                    right: -80px;
                    width: 380px;
                    height: 380px;
                    background: radial-gradient(circle, rgba(55, 161, 165, 0.14) 0%, rgba(55, 161, 165, 0) 70%);
                }

                .orb-2 {
                    bottom: -140px;
                    left: -100px;
                    width: 420px;
                    height: 420px;
                    background: radial-gradient(circle, rgba(24, 79, 105, 0.1) 0%, rgba(24, 79, 105, 0) 70%);
                }

                .thank-you-card {
                    position: relative;
                    max-width: 860px;
                    margin: 0 auto;
                    padding: 64px 56px 48px;
                    text-align: center;
                    border: 1px solid rgba(24, 79, 105, 0.1);
                    border-radius: 24px;
                    background: #ffffff;
                    box-shadow: 0 30px 80px rgba(8, 34, 51, 0.12);
                    overflow: hidden;
                    animation: card-in 0.6s ease both;
                }

                .thank-you-card::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 6px;
                    background: linear-gradient(90deg, #37a1a5 0%, #184f69 100%);
                }

                .check-wrap {
                    position: relative;
                    width: 92px;
                    height: 92px;
                    margin: 0 auto 26px;
                }

                .ring {
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    background: rgba(55, 161, 165, 0.25);
                    animation: ring-pulse 2.4s ease-out infinite;
                }

                .check {
                    position: absolute;
                    inset: 8px;
                    display: grid;
                    place-items: center;
                    border-radius: 50%;
                    color: #ffffff;
                    background: linear-gradient(135deg, #37a1a5 0%, #184f69 120%);
                    box-shadow: 0 12px 28px rgba(55, 161, 165, 0.4);
                }

                .check svg {
                    width: 42px;
                    height: 42px;
                }

                .check-path {
                    stroke-dasharray: 40;
                    stroke-dashoffset: 40;
                    animation: check-draw 0.5s ease-out 0.35s forwards;
                }

                .eyebrow {
                    display: block;
                    margin-bottom: 14px;
                    color: #37a1a5;
                    font-size: 13px;
                    font-weight: 900;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                }

                h1 {
                    margin: 0 0 18px;
                    color: #082233;
                    font-size: clamp(36px, 5.4vw, 60px);
                    line-height: 1.06;
                }

                .lead {
                    max-width: 620px;
                    margin: 0 auto;
                    color: #52636d;
                    font-size: 18px;
                    line-height: 1.7;
                }

                .steps {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 14px;
                    margin: 38px 0 0;
                    text-align: left;
                }

                .step {
                    padding: 20px 18px;
                    border: 1px solid rgba(24, 79, 105, 0.1);
                    border-radius: 14px;
                    background: #f7fbfc;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .step:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 24px rgba(8, 34, 51, 0.08);
                }

                .step-num {
                    display: inline-grid;
                    place-items: center;
                    width: 28px;
                    height: 28px;
                    margin-bottom: 12px;
                    border-radius: 50%;
                    color: #ffffff;
                    background: #37a1a5;
                    font-size: 13px;
                    font-weight: 800;
                }

                .step strong {
                    display: block;
                    margin-bottom: 4px;
                    color: #082233;
                    font-size: 15px;
                    font-weight: 800;
                    line-height: 1.3;
                }

                .step small {
                    display: block;
                    color: #52636d;
                    font-size: 13px;
                    line-height: 1.55;
                }

                .actions {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 16px;
                    margin-top: 34px;
                }

                .contact-strip {
                    margin-top: 36px;
                    padding-top: 26px;
                    border-top: 1px dashed rgba(24, 79, 105, 0.18);
                }

                .contact-label {
                    display: block;
                    margin-bottom: 12px;
                    color: #082233;
                    font-size: 14px;
                    font-weight: 800;
                }

                .contact-links {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 14px;
                }

                .contact-links :global(a) {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: #184f69;
                    font-size: 15px;
                    font-weight: 700;
                    transition: color 0.2s ease;
                }

                .contact-links :global(a:hover) {
                    color: #37a1a5;
                }

                .contact-links :global(svg) {
                    width: 18px;
                    height: 18px;
                    flex: 0 0 18px;
                }

                .dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: rgba(24, 79, 105, 0.3);
                }

                @keyframes card-in {
                    from {
                        opacity: 0;
                        transform: translateY(24px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes check-draw {
                    to {
                        stroke-dashoffset: 0;
                    }
                }

                @keyframes ring-pulse {
                    0% {
                        transform: scale(0.85);
                        opacity: 0.9;
                    }
                    70% {
                        transform: scale(1.35);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1.35);
                        opacity: 0;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .thank-you-card,
                    .check-path,
                    .ring {
                        animation: none;
                    }
                    .check-path {
                        stroke-dashoffset: 0;
                    }
                    .ring {
                        display: none;
                    }
                }

                @media (max-width: 767px) {
                    .steps {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                }

                @media (max-width: 575px) {
                    .thank-you-page {
                        padding: 50px 0;
                    }

                    .thank-you-card {
                        padding: 44px 22px 36px;
                    }

                    .actions {
                        flex-direction: column;
                    }

                    .actions :global(.btn) {
                        width: 100%;
                    }

                    .contact-links {
                        flex-direction: column;
                        gap: 10px;
                    }

                    .dot {
                        display: none;
                    }
                }
            `}</style>
        </Layout>
    );
}
