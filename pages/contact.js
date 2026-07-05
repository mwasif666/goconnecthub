import Layout from "@/components/layout/Layout";
import useContactForm, {
    CONTACT_FORM_ACTION,
    CONTACT_FORM_EMAIL_TO,
} from "@/components/forms/useContactForm";
import { companyInfo } from "@/util/companyInfo";
import Link from "next/link";

export default function Contact() {
    const {
        formRef,
        handleSubmit,
        isSubmitting,
        toastMessage,
        isToastVisible,
    } = useContactForm("contact_us");

    return (
        <Layout>
            <main className="contact-page">
                <section className="contact-hero">
                    <div className="container">
                        <div className="hero-grid">
                            <div>
                                <span>Contact Go Connect Hub</span>
                                <h1>Let&apos;s plan your fulfilment workflow</h1>
                                <p>
                                    Tell us what you sell, where orders come from, and what kind of support you need. Our team will help map the right storage, prep, dispatch, and returns setup.
                                </p>
                            </div>
                            <div className="hero-card">
                                <strong>Fast support for sellers</strong>
                                <p>Amazon, Shopify, TikTok, DTC, wholesale, and growing ecommerce brands.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-main">
                    <div className="container">
                        <div className="contact-grid">
                            <form
                                ref={formRef}
                                className="contact-form"
                                method="post"
                                action={CONTACT_FORM_ACTION}
                                data-contact-managed="true"
                                data-lead-type="contact_us"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="email_to" value={CONTACT_FORM_EMAIL_TO} />
                                <input type="hidden" name="subject" value="Contact Inquiry" />
                                <span className="kicker">Send your details</span>
                                <h2>Get in touch</h2>
                                <div className="form-grid">
                                    <input type="text" name="name" placeholder="Your name *" required />
                                    <input type="email" name="email" placeholder="Your email *" required />
                                    <input type="tel" name="phone" placeholder="Phone number" />
                                    <textarea name="message" placeholder="Message / fulfilment requirement" rows={7} />
                                </div>
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Submit inquiry"}
                                </button>
                                {isToastVisible && (
                                    <p className="contact-status" role="status" aria-live="polite">
                                        {toastMessage}
                                    </p>
                                )}
                            </form>

                            <aside className="contact-info">
                                <div className="info-card primary">
                                    <span>Head office</span>
                                    <h3>Go Connect Hub</h3>
                                    <p>Fulfilment support for ecommerce sellers, marketplace brands, and scaling stores.</p>
                                </div>
                                <div className="info-card">
                                    <span>Email</span>
                                    <Link href={`mailto:${companyInfo.email}`}>{companyInfo.email}</Link>
                                </div>
                                <div className="info-card">
                                    <span>Phone</span>
                                    <Link href={`tel:${companyInfo.phone}`}>{companyInfo.phoneDisplay}</Link>
                                </div>
                                <div className="info-card">
                                    <span>Address</span>
                                    <p>{companyInfo.address}</p>
                                </div>
                                <div className="info-card social-card">
                                    <span>Social</span>
                                    <div className="social-icons">
                                        <Link className="icon-socials icon-facebook" href={companyInfo.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" />
                                        <Link className="icon-socials icon-instagram" href={companyInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" />
                                    </div>
                                </div>
                                <div className="info-card">
                                    <span>Hours</span>
                                    <p>Monday to Saturday, 8:00 - 17:00</p>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .contact-page {
                    background: #ffffff;
                    color: #082233;
                    overflow: hidden;
                }

                .contact-hero {
                    padding: 104px 0 78px;
                    background:
                        linear-gradient(90deg, rgba(8, 34, 51, 0.78), rgba(24, 79, 105, 0.92)),
                        url("/assets/imgs/page/homepage1/banner-truck-unsplash.jpg") center/cover;
                    color: #ffffff;
                }

                .hero-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.38fr);
                    gap: 48px;
                    align-items: end;
                }

                .hero-grid span,
                .kicker,
                .info-card span {
                    display: inline-block;
                    color: #ffe08a;
                    font-size: 13px;
                    font-weight: 900;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    margin-bottom: 16px;
                }

                h1 {
                    color: #ffffff;
                    font-size: clamp(48px, 7vw, 92px);
                    line-height: 0.94;
                    margin: 0 0 24px;
                    letter-spacing: 0;
                    max-width: 850px;
                }

                .hero-grid p {
                    color: rgba(255, 255, 255, 0.88);
                    font-size: 20px;
                    line-height: 1.6;
                    margin: 0;
                    max-width: 720px;
                }

                .hero-card {
                    border-radius: 16px;
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    background: rgba(255, 255, 255, 0.08);
                    padding: 28px;
                }

                .hero-card strong {
                    display: block;
                    color: #ffffff;
                    font-size: 28px;
                    line-height: 1.1;
                    margin-bottom: 12px;
                }

                .contact-main {
                    padding: 86px 0 100px;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) minmax(300px, 0.42fr);
                    gap: 34px;
                    align-items: start;
                }

                .contact-form {
                    padding: 44px;
                    border-radius: 18px;
                    background: #ffffff;
                    border: 1px solid rgba(24, 79, 105, 0.16);
                    box-shadow: 0 20px 60px rgba(8, 34, 51, 0.1);
                }

                .contact-form h2 {
                    color: #082233;
                    font-size: clamp(38px, 5vw, 66px);
                    line-height: 1;
                    margin: 0 0 30px;
                    letter-spacing: 0;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 18px;
                }

                input,
                select,
                textarea {
                    width: 100%;
                    border: 1px solid rgba(24, 79, 105, 0.18);
                    border-radius: 10px;
                    background: #f8fbfc;
                    color: #082233;
                    font-size: 16px;
                    line-height: 1.4;
                    padding: 17px 18px;
                    outline: none;
                }

                textarea {
                    grid-column: 1 / -1;
                    resize: vertical;
                }

                button {
                    margin-top: 22px;
                    border: 0;
                    border-radius: 999px;
                    color: #082233;
                    background: #ffe08a;
                    padding: 17px 28px;
                    font-weight: 900;
                    cursor: pointer;
                }

                button:disabled {
                    cursor: not-allowed;
                    opacity: 0.72;
                }

                .contact-status {
                    color: #12715b;
                    font-weight: 800;
                    margin: 14px 0 0;
                }

                .contact-info {
                    display: grid;
                    gap: 18px;
                }

                .info-card {
                    padding: 28px;
                    border-radius: 16px;
                    border: 1px solid rgba(24, 79, 105, 0.14);
                    background: #f8fbfc;
                }

                .info-card.primary {
                    background: #184f69;
                    color: #ffffff;
                }

                .info-card h3 {
                    color: #ffffff;
                    font-size: 34px;
                    line-height: 1;
                    margin: 0 0 12px;
                }

                .info-card p,
                .info-card a {
                    display: block;
                    color: #263944;
                    font-size: 19px;
                    line-height: 1.5;
                    margin: 0;
                    font-weight: 800;
                }

                .social-card .social-icons {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    margin-top: 8px;
                }

                .social-card .social-icons :global(.icon-socials) {
                    width: 22px;
                    height: 22px;
                    margin-right: 0;
                    background: #37a1a5 !important;
                    transition: opacity 0.2s ease;
                }

                .social-card .social-icons :global(.icon-socials:hover) {
                    opacity: 0.7;
                }

                .social-card .social-icons :global(.icon-facebook) {
                    -webkit-mask: url(/assets/imgs/template/icons/fb.svg) no-repeat center / contain;
                    mask: url(/assets/imgs/template/icons/fb.svg) no-repeat center / contain;
                }

                .social-card .social-icons :global(.icon-instagram) {
                    -webkit-mask: url(/assets/imgs/template/icons/inst.svg) no-repeat center / contain;
                    mask: url(/assets/imgs/template/icons/inst.svg) no-repeat center / contain;
                }

                .info-card.primary p {
                    color: rgba(255, 255, 255, 0.86);
                    font-weight: 600;
                }

                @media (max-width: 991px) {
                    .hero-grid,
                    .contact-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 575px) {
                    .contact-hero {
                        padding: 72px 0 54px;
                    }

                    .contact-main {
                        padding: 58px 0 72px;
                    }

                    .contact-form {
                        padding: 28px 22px;
                    }

                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </Layout>
    );
}
