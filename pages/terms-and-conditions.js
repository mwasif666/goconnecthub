import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { companyInfo } from "@/util/companyInfo";

const responsibilities = [
    "Provide accurate product, stock, order, labelling, packaging, and delivery information.",
    "Make sure goods are lawful, safe, and suitable for storage, handling, and dispatch.",
    "Provide platform or marketplace requirements before work begins, including Amazon FBA/FBM, Shopify, TikTok Shop, or wholesale instructions.",
    "Pay agreed fees, charges, storage costs, service costs, courier costs, and any additional agreed expenses on time.",
];

const serviceAreas = [
    "Warehousing and storage",
    "Pick and pack fulfilment",
    "FBA and FBM fulfilment support",
    "Kitting, bundling, repackaging, and relabelling",
    "Wholesale B2B fulfilment, cross docking, returns handling, and container unloading",
];

export default function TermsAndConditions() {
    return (
        <Layout headTitle="Terms & Conditions">
            <main className="legal-page">
                <section className="legal-hero">
                    <div className="container">
                        <div className="legal-hero-grid">
                            <div className="wow animate__animated animate__fadeIn">
                                <span className="legal-kicker">Go Connect Hub</span>
                                <h1>Terms & Conditions</h1>
                                <p>
                                    These Terms & Conditions explain the general rules for using the {companyInfo.name} website, contacting our team, requesting quotes, and working with us for ecommerce fulfilment support.
                                </p>
                                <div className="legal-actions">
                                    <Link href="/request-a-quote">Request a quote</Link>
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                </div>
                            </div>
                            <aside className="legal-summary-card wow animate__animated animate__fadeInUp">
                                <span>Last updated</span>
                                <strong>9 July 2026</strong>
                                <p>For service questions, contact {companyInfo.email}</p>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="legal-content">
                    <div className="container">
                        <div className="legal-layout">
                            <aside className="legal-toc">
                                <span>On this page</span>
                                <a href="#intro">Introduction</a>
                                <a href="#services">Services</a>
                                <a href="#quotes">Quotes & bookings</a>
                                <a href="#responsibilities">Customer responsibilities</a>
                                <a href="#payments">Fees & payments</a>
                                <a href="#liability">Liability</a>
                                <a href="#contact">Contact</a>
                            </aside>

                            <div className="legal-article">
                                <section id="intro" className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>1. Introduction</h2>
                                    <p>
                                        These Terms & Conditions apply to the use of this website and to general enquiries, quote requests, and service discussions with {companyInfo.name}. By using this website or contacting us through it, you agree to these terms.
                                    </p>
                                    <p>
                                        If you enter into a separate written agreement, service order, quote, or fulfilment arrangement with us, that agreement may include additional terms and may take priority over these website terms where there is a conflict.
                                    </p>
                                </section>

                                <section id="services" className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>2. Our services</h2>
                                    <p>{companyInfo.name} provides ecommerce fulfilment and warehouse support for sellers, marketplace brands, and scaling stores. Our service areas include:</p>
                                    <div className="legal-list-grid">
                                        {serviceAreas.map((item) => (
                                            <div className="legal-list-item" key={item}>{item}</div>
                                        ))}
                                    </div>
                                    <p>
                                        Exact service scope, timelines, handling rules, carrier arrangements, and pricing will depend on the information you provide and what is agreed in writing.
                                    </p>
                                </section>

                                <section id="quotes" className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>3. Quotes, enquiries, and bookings</h2>
                                    <p>
                                        Website content, service descriptions, response times, statistics, and examples are provided for general information only. A quote or service estimate is not binding unless confirmed by us in writing.
                                    </p>
                                    <p>
                                        We may ask for additional details about your products, order volume, channels, packaging needs, storage requirements, delivery expectations, and platform requirements before confirming pricing or service suitability.
                                    </p>
                                    <p>
                                        We may decline work where products, instructions, volumes, timelines, risks, or requirements are unsuitable for our operations.
                                    </p>
                                </section>

                                <section id="responsibilities" className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>4. Customer responsibilities</h2>
                                    <p>To help us provide accurate and reliable support, you are responsible for:</p>
                                    <ul>
                                        {responsibilities.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>
                                        Delays, errors, additional costs, rejected shipments, platform issues, or carrier problems may occur if information, stock, labels, packaging, or instructions are missing, late, inaccurate, or non-compliant.
                                    </p>
                                </section>

                                <section className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>5. Goods, inventory, and prohibited items</h2>
                                    <p>
                                        You must not send goods that are illegal, unsafe, hazardous, restricted, counterfeit, stolen, perishable without agreement, or unsuitable for storage or fulfilment. You must tell us in advance about fragile, high-value, regulated, temperature-sensitive, or special-handling goods.
                                    </p>
                                    <p>
                                        We may refuse, hold, return, dispose of, or report goods where we reasonably believe there is a legal, safety, compliance, fraud, or operational risk.
                                    </p>
                                </section>

                                <section className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>6. Fulfilment, carriers, and delivery</h2>
                                    <p>
                                        We aim to handle orders carefully and efficiently, but dispatch and delivery can depend on third-party couriers, marketplaces, customs, traffic, weather, peak periods, strikes, platform issues, and other matters outside our control.
                                    </p>
                                    <p>
                                        Any delivery dates, turnaround times, or performance figures shown on the website are general targets or examples unless specifically confirmed in writing for your account.
                                    </p>
                                </section>

                                <section id="payments" className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>7. Fees, invoices, and payment</h2>
                                    <p>
                                        Fees, storage charges, fulfilment charges, prep costs, packaging costs, handling fees, courier charges, and any additional costs will be based on the agreed quote, service scope, or written arrangement.
                                    </p>
                                    <p>
                                        We may pause, delay, or stop services where invoices, agreed prepayments, or required account balances remain unpaid. You may also be responsible for extra costs caused by incorrect information, unexpected stock condition, urgent requests, failed collections, relabelling, rework, or special handling.
                                    </p>
                                </section>

                                <section className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>8. Website use</h2>
                                    <p>
                                        You must not misuse the website, attempt unauthorised access, interfere with security, submit false information, copy website content for commercial use without permission, or use the website in a way that could harm our business, systems, or other users.
                                    </p>
                                </section>

                                <section className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>9. Intellectual property</h2>
                                    <p>
                                        The website design, copy, branding, images, icons, graphics, and other content are owned by or licensed to {companyInfo.name}, unless stated otherwise. You may view the website for personal or business evaluation, but you may not copy, reproduce, or reuse our content without written permission.
                                    </p>
                                </section>

                                <section id="liability" className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>10. Liability</h2>
                                    <p>
                                        We work to provide reliable information and fulfilment support, but the website is provided on an informational basis and may not always be complete, current, or error-free. We are not responsible for losses caused by reliance on website content alone without a confirmed written agreement.
                                    </p>
                                    <p>
                                        Nothing in these terms excludes liability that cannot be excluded under applicable law. Where permitted by law, our liability is limited to the amount paid for the specific service giving rise to the claim, unless a separate written agreement states otherwise.
                                    </p>
                                </section>

                                <section className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>11. Privacy</h2>
                                    <p>
                                        We handle personal information according to our <Link href="/privacy-policy">Privacy Policy</Link>. Please read it to understand how we collect, use, store, and protect personal information.
                                    </p>
                                </section>

                                <section className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>12. Changes to these terms</h2>
                                    <p>
                                        We may update these Terms & Conditions from time to time. The latest version will be published on this page with the updated date. Continued use of the website after updates means you accept the revised terms.
                                    </p>
                                </section>

                                <section className="legal-card wow animate__animated animate__fadeInUp">
                                    <h2>13. Governing law</h2>
                                    <p>
                                        These Terms & Conditions are intended to be governed by the laws of England and Wales, unless a separate written agreement states otherwise.
                                    </p>
                                </section>

                                <section id="contact" className="legal-card contact-card wow animate__animated animate__fadeInUp">
                                    <h2>14. Contact us</h2>
                                    <p>For questions about these Terms & Conditions or our services, contact us:</p>
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
