import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { companyInfo } from "@/util/companyInfo";

const dataUses = [
    "Respond to enquiries, quote requests, and service questions.",
    "Plan storage, prep, fulfilment, dispatch, returns, and ecommerce support workflows.",
    "Improve website performance, lead tracking, forms, and customer communication.",
    "Protect our website, systems, users, and business from misuse or security issues.",
];

const rights = [
    "Ask for a copy of the personal data we hold about you.",
    "Ask us to correct inaccurate or incomplete personal data.",
    "Ask us to delete your personal data where we no longer need it.",
    "Object to or restrict certain processing activities.",
    "Withdraw consent where processing is based on consent.",
];

export default function PrivacyPolicy() {
    return (
        <Layout headTitle="Privacy Policy">
            <main className="legal-page">
                <section className="legal-hero">
                    <div className="container">
                        <div className="legal-hero-grid">
                            <div className="wow animate__animated animate__fadeIn">
                                <span className="legal-kicker">Go Connect Hub</span>
                                <h1>Privacy Policy</h1>
                                <p>
                                    This Privacy Policy explains how {companyInfo.name} collects, uses, stores, and protects personal information when you visit our website, contact us, request a quote, or use our ecommerce fulfilment services.
                                </p>
                                <div className="legal-actions">
                                    <Link href="/contact">Contact us</Link>
                                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                                </div>
                            </div>
                            <aside className="legal-summary-card wow animate__animated animate__fadeInUp">
                                <span>Last updated</span>
                                <strong>9 July 2026</strong>
                                <p>{companyInfo.email}</p>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="legal-content">
                    <div className="container">
                        <div className="legal-layout">
                            <aside className="legal-toc">
                                <span>On this page</span>
                                <a href="#who-we-are">Who we are</a>
                                <a href="#data-we-collect">Data we collect</a>
                                <a href="#how-we-use-data">How we use data</a>
                                <a href="#sharing">Sharing</a>
                                <a href="#cookies">Cookies</a>
                                <a href="#your-rights">Your rights</a>
                                <a href="#contact">Contact</a>
                            </aside>

                            <div className="legal-article">
                                <section id="who-we-are" className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>1. Who we are</h2>
                                    <p>
                                        {companyInfo.name} provides ecommerce fulfilment support including warehousing and storage, pick and pack fulfilment, FBA and FBM support, kitting, bundling, repackaging, relabelling, wholesale fulfilment, cross docking, returns handling, and container unloading.
                                    </p>
                                    <p>
                                        For privacy questions, you can contact us at <Link href={`mailto:${companyInfo.email}`}>{companyInfo.email}</Link> or by post at {companyInfo.address}.
                                    </p>
                                </section>

                                <section id="data-we-collect" className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>2. Personal information we collect</h2>
                                    <p>We may collect personal information when you use our website, submit a form, contact us, or discuss fulfilment requirements with our team. This may include:</p>
                                    <ul>
                                        <li>Name, email address, phone number, company name, and contact details.</li>
                                        <li>Messages, quote requests, fulfilment requirements, product or inventory information, and service preferences.</li>
                                        <li>Website usage information such as pages visited, form submissions, device information, browser type, approximate location, and interaction data.</li>
                                        <li>Communication history, support notes, and operational details needed to respond to your enquiry or provide services.</li>
                                    </ul>
                                </section>

                                <section id="how-we-use-data" className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>3. How we use your information</h2>
                                    <p>We use personal information for practical business, service, and website purposes. This includes:</p>
                                    <div className="legal-list-grid">
                                        {dataUses.map((item) => (
                                            <div className="legal-list-item" key={item}>{item}</div>
                                        ))}
                                    </div>
                                    <p>
                                        Where applicable, we rely on lawful bases such as consent, contract performance, legitimate business interests, and legal obligations.
                                    </p>
                                </section>

                                <section className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>4. Forms and lead tracking</h2>
                                    <p>
                                        When you submit a contact or quote form, the information you provide may be sent to our team and processed through our website form handling systems. We may also use lead tracking tools to understand which enquiries come from website activity or marketing campaigns.
                                    </p>
                                    <p>
                                        We only ask for information that helps us respond to your request, prepare a quote, or understand the fulfilment support you need.
                                    </p>
                                </section>

                                <section id="sharing" className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>5. Who we share information with</h2>
                                    <p>We do not sell your personal information. We may share information only where needed, such as with:</p>
                                    <ul>
                                        <li>Internal team members who handle enquiries, quotes, operations, and customer support.</li>
                                        <li>Website hosting, form processing, analytics, marketing, and technology providers.</li>
                                        <li>Couriers, logistics partners, ecommerce platforms, or operational partners where required to provide fulfilment services.</li>
                                        <li>Professional advisers, regulators, or authorities where legally required.</li>
                                    </ul>
                                </section>

                                <section id="cookies" className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>6. Cookies and similar technologies</h2>
                                    <p>
                                        Our website may use cookies, pixels, scripts, and similar technologies to operate the website, improve user experience, measure performance, and support marketing or lead tracking. These tools may collect usage and device information.
                                    </p>
                                    <p>
                                        You can manage or block cookies through your browser settings. Some website features may not work correctly if cookies are disabled.
                                    </p>
                                </section>

                                <section className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>7. How long we keep information</h2>
                                    <p>
                                        We keep personal information only for as long as reasonably needed for the purpose it was collected, including responding to enquiries, preparing quotes, managing customer relationships, fulfilling services, meeting legal obligations, resolving disputes, and maintaining business records.
                                    </p>
                                </section>

                                <section className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>8. Security</h2>
                                    <p>
                                        We use reasonable technical and organisational measures to protect personal information. However, no website, email, or online system can be guaranteed to be completely secure. Please avoid sending sensitive or confidential information unless it is necessary for your enquiry or service request.
                                    </p>
                                </section>

                                <section id="your-rights" className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>9. Your rights</h2>
                                    <p>Depending on your location and applicable law, you may have rights over your personal information, including the right to:</p>
                                    <ul>
                                        {rights.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>
                                        To make a request, contact us at <Link href={`mailto:${companyInfo.email}`}>{companyInfo.email}</Link>.
                                    </p>
                                </section>

                                <section className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>10. External links</h2>
                                    <p>
                                        Our website may link to third-party websites or social platforms. We are not responsible for the privacy practices, content, or security of external websites. Please review their policies before sharing information with them.
                                    </p>
                                </section>

                                <section className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>11. Changes to this policy</h2>
                                    <p>
                                        We may update this Privacy Policy from time to time. The latest version will be published on this page with the updated date.
                                    </p>
                                </section>

                                <section id="contact" className="legal-card contact-card wow animate__animated animate__fadeInUp">
                                    <h2>12. Contact us</h2>
                                    <p>If you have any questions about this Privacy Policy or how your information is handled, contact us:</p>
                                    <div className="contact-lines">
                                        <Link href={`mailto:${companyInfo.email}`}>{companyInfo.email}</Link>
                                        <Link href={`tel:${companyInfo.phone}`}>{companyInfo.phoneDisplay}</Link>
                                        <span>{companyInfo.address}</span>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .legal-page {
                    background: #ffffff;
                    color: #082233;
                    overflow: hidden;
                }

                .legal-hero {
                    padding: 104px 0 82px;
                    color: #ffffff;
                    background:
                        linear-gradient(90deg, rgba(8, 34, 51, 0.86), rgba(24, 79, 105, 0.94)),
                        url("/assets/imgs/page/homepage1/banner-truck-unsplash.jpg") center/cover;
                }

                .legal-hero-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.36fr);
                    gap: 44px;
                    align-items: end;
                }

                .legal-kicker,
                .legal-toc span,
                .legal-summary-card span {
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
                    max-width: 860px;
                }

                .legal-hero p {
                    color: rgba(255, 255, 255, 0.88);
                    font-size: 20px;
                    line-height: 1.6;
                    margin: 0;
                    max-width: 820px;
                }

                .legal-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 14px;
                    margin-top: 32px;
                }

                .legal-actions a {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 48px;
                    padding: 0 22px;
                    border-radius: 999px;
                    background: #ffe08a;
                    color: #082233;
                    font-weight: 900;
                }

                .legal-actions a + a {
                    background: rgba(255, 255, 255, 0.1);
                    color: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .legal-summary-card {
                    border-radius: 18px;
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    background: rgba(255, 255, 255, 0.1);
                    padding: 28px;
                    backdrop-filter: blur(14px);
                }

                .legal-summary-card strong {
                    display: block;
                    color: #ffffff;
                    font-size: 34px;
                    line-height: 1.1;
                    margin-bottom: 14px;
                }

                .legal-summary-card p {
                    font-size: 15px;
                    margin: 0;
                }

                .legal-content {
                    padding: 86px 0 100px;
                    background: #f8fbfc;
                }

                .legal-layout {
                    display: grid;
                    grid-template-columns: 270px minmax(0, 1fr);
                    gap: 34px;
                    align-items: start;
                }

                .legal-toc {
                    position: sticky;
                    top: 120px;
                    padding: 26px;
                    border-radius: 18px;
                    background: #ffffff;
                    border: 1px solid rgba(24, 79, 105, 0.12);
                    box-shadow: 0 18px 50px rgba(8, 34, 51, 0.08);
                }

                .legal-toc span {
                    color: #184f69;
                    margin-bottom: 18px;
                }

                .legal-toc a {
                    display: block;
                    color: #456070;
                    font-weight: 800;
                    padding: 10px 0;
                    border-top: 1px solid rgba(24, 79, 105, 0.08);
                }

                .legal-article {
                    display: grid;
                    gap: 22px;
                }

                .legal-card {
                    border-radius: 20px;
                    background: #ffffff;
                    border: 1px solid rgba(24, 79, 105, 0.12);
                    padding: 38px;
                    box-shadow: 0 18px 50px rgba(8, 34, 51, 0.06);
                }

                .legal-card h2 {
                    color: #082233;
                    font-size: clamp(28px, 3vw, 42px);
                    line-height: 1.1;
                    margin: 0 0 18px;
                }

                .legal-card p,
                .legal-card li {
                    color: #4b6472;
                    font-size: 17px;
                    line-height: 1.75;
                }

                .legal-card p {
                    margin: 0 0 16px;
                }

                .legal-card p:last-child {
                    margin-bottom: 0;
                }

                .legal-card ul {
                    margin: 0 0 16px;
                    padding-left: 22px;
                }

                .legal-card a {
                    color: #184f69;
                    font-weight: 900;
                }

                .legal-list-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 14px;
                    margin: 24px 0;
                }

                .legal-list-item {
                    border-radius: 14px;
                    background: #f8fbfc;
                    border: 1px solid rgba(24, 79, 105, 0.1);
                    padding: 18px;
                    color: #082233;
                    font-weight: 800;
                    line-height: 1.55;
                }

                .contact-card {
                    background: #184f69;
                }

                .contact-card h2,
                .contact-card p,
                .contact-card a,
                .contact-card span {
                    color: #ffffff;
                }

                .contact-lines {
                    display: grid;
                    gap: 8px;
                    margin-top: 18px;
                }

                @media (max-width: 991px) {
                    .legal-hero-grid,
                    .legal-layout {
                        grid-template-columns: 1fr;
                    }

                    .legal-toc {
                        position: static;
                    }
                }

                @media (max-width: 575px) {
                    .legal-hero {
                        padding: 82px 0 62px;
                    }

                    .legal-content {
                        padding: 56px 0 70px;
                    }

                    .legal-card,
                    .legal-toc,
                    .legal-summary-card {
                        padding: 24px;
                    }

                    .legal-list-grid {
                        grid-template-columns: 1fr;
                    }

                    .legal-actions a {
                        width: 100%;
                    }
                }
            `}</style>
        </Layout>
    );
}
