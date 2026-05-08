import Layout from "@/components/layout/Layout";
import { getServiceBySlug, services } from "@/util/servicesData";
import Link from "next/link";

export default function ServiceDetail({ service, relatedServices }) {
    return (
        <>
            <Layout>

                {/* ── HERO ── */}
                <section className="svc-hero">
                    <div
                        className="svc-hero-bg"
                        style={{ backgroundImage: `url(${service.heroImage})` }}
                        aria-hidden="true"
                    />
                    <div className="svc-hero-overlay" aria-hidden="true" />
                    <div className="container svc-hero-inner">
                        <span className="svc-eyebrow wow animate__animated animate__fadeIn">
                            {service.eyebrow}
                        </span>
                        <h1 className="svc-hero-title wow animate__animated animate__fadeInUp">
                            {service.title}
                        </h1>
                        <p className="svc-hero-desc wow animate__animated animate__fadeInUp">
                            {service.description}
                        </p>
                        <div className="svc-hero-btns wow animate__animated animate__fadeInUp">
                            <Link className="about-cta primary" href="/request-a-quote">
                                Get a Quote
                            </Link>
                            <Link className="about-cta secondary" href="/contact">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── STATS BAR ── */}
                <div className="svc-stats-bar">
                    <div className="container">
                        <div className="svc-stats-grid">
                            {service.stats.map((stat) => (
                                <div className="svc-stat" key={stat.label}>
                                    <span className="svc-stat-value">{stat.value}</span>
                                    <span className="svc-stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── OVERVIEW ── */}
                <section className="svc-overview section pt-80 pb-80">
                    <div className="container">
                        <div className="svc-overview-grid">
                            <div className="svc-overview-content wow animate__animated animate__fadeIn">
                                <span className="svc-section-tag">Overview</span>
                                <h2 className="svc-section-title">
                                    {service.title} for growing sellers
                                </h2>
                                <p className="svc-overview-text">{service.overview}</p>
                                <div className="svc-best-for">
                                    <span className="svc-best-for-label">Best for</span>
                                    <p>{service.bestFor}</p>
                                </div>
                            </div>
                            <div className="svc-overview-image wow animate__animated animate__fadeIn">
                                <img src={service.heroImage} alt={service.title} />
                                <div className="svc-img-badge">
                                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Trusted fulfilment
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── WHAT'S INCLUDED ── */}
                <section className="svc-includes">
                    <div className="container">
                        <div className="svc-includes-header">
                            <span className="svc-section-tag light">What&apos;s included</span>
                            <h2 className="svc-section-title light">
                                Everything covered under this service
                            </h2>
                        </div>
                        <div className="svc-includes-grid">
                            {service.includes.map((item, i) => (
                                <div className="svc-include-card wow animate__animated animate__fadeInUp" key={i} data-wow-delay={`${i * 0.08}s`}>
                                    <span className="svc-include-num">{String(i + 1).padStart(2, "0")}</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PROCESS ── */}
                <section className="svc-process section pt-80 pb-80">
                    <div className="container">
                        <div className="text-center mb-50">
                            <span className="svc-section-tag">How it works</span>
                            <h2 className="svc-section-title center">Step-by-step process</h2>
                        </div>
                        <div className="svc-process-grid">
                            {service.process.map((step, i) => (
                                <div className="svc-process-step wow animate__animated animate__fadeInUp" key={i} data-wow-delay={`${i * 0.1}s`}>
                                    <div className="svc-process-num">{String(i + 1).padStart(2, "0")}</div>
                                    <div className="svc-process-line" aria-hidden="true" />
                                    <h4 className="svc-process-title">{step.title}</h4>
                                    <p className="svc-process-desc">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── QUOTE FORM ── */}
                <section className="section pb-80">
                    <div className="container">
                        <div className="svc-quote-box">
                            <div className="row align-items-center">
                                <div className="col-lg-5 mb-40 mb-lg-0">
                                    <span className="svc-section-tag">Get started</span>
                                    <h2 className="svc-section-title mt-10 mb-20">Request a quote for {service.title}</h2>
                                    <p className="font-md color-grey-700 mb-30">
                                        Share your inventory details and order volume so we can guide the right setup for your business.
                                    </p>
                                    <div className="svc-quote-image">
                                        <img src={service.heroImage} alt={service.title} />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="svc-form-wrap">
                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <select className="form-control" defaultValue={service.title}>
                                                    {services.map((item) => (
                                                        <option value={item.title} key={item.slug}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <input className="form-control" type="text" placeholder="Monthly orders" />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <input className="form-control" type="text" placeholder="SKU count" />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <input className="form-control" type="text" placeholder="Selling platform" />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <input className="form-control" type="text" placeholder="Your name" />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <input className="form-control" type="email" placeholder="Email address" />
                                            </div>
                                            <div className="col-12 mb-20">
                                                <textarea className="form-control" rows={4} placeholder="Message / additional details" />
                                            </div>
                                            <div className="col-12">
                                                <Link className="btn btn-brand-1-big mr-20" href="/request-a-quote">
                                                    Send Request
                                                </Link>
                                                <Link className="btn btn-link-medium" href="/contact">
                                                    Contact Us
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── RELATED SERVICES ── */}
                <section className="svc-related section pb-80">
                    <div className="container">
                        <div className="text-center mb-50">
                            <img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/template/icons/favicon.svg" alt="Go Connect Hub" />
                            <h2 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Other Services</h2>
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                                Build a fulfilment setup around the services your store actually needs.
                            </p>
                        </div>
                        <div className="row">
                            {relatedServices.map((item, i) => (
                                <div className="col-lg-4 col-md-6 mb-30 wow animate__animated animate__fadeInUp" key={item.slug} data-wow-delay={`${i * 0.08}s`}>
                                    <Link href={`/services/${item.slug}`} className="svc-related-card">
                                        <div className="svc-related-img">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="svc-related-body">
                                            <span className="svc-related-tag">{item.eyebrow}</span>
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                            <span className="svc-related-link">
                                                View Service
                                                <svg className="icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </Layout>

            <style jsx>{`
                /* ── HERO ── */
                .svc-hero {
                    position: relative;
                    min-height: 540px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }
                .svc-hero-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    transform: scale(1.04);
                }
                .svc-hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        110deg,
                        rgba(14, 51, 71, 0.92) 0%,
                        rgba(14, 51, 71, 0.78) 55%,
                        rgba(55, 161, 165, 0.45) 100%
                    );
                }
                .svc-hero-inner {
                    position: relative;
                    z-index: 2;
                    padding-top: 100px;
                    padding-bottom: 80px;
                    max-width: 760px;
                }
                .svc-eyebrow {
                    display: inline-block;
                    padding: 6px 16px;
                    background: rgba(55, 161, 165, 0.22);
                    border: 1px solid rgba(55, 161, 165, 0.5);
                    border-radius: 100px;
                    color: #37a1a5;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                }
                .svc-hero-title {
                    color: #ffffff;
                    font-size: clamp(36px, 5vw, 64px);
                    font-weight: 800;
                    line-height: 1.05;
                    margin: 0 0 20px;
                }
                .svc-hero-desc {
                    color: rgba(255, 255, 255, 0.82);
                    font-size: 18px;
                    line-height: 1.6;
                    max-width: 580px;
                    margin-bottom: 36px;
                }
                .svc-hero-btns {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                    align-items: center;
                }
                /* ── STATS BAR ── */
                .svc-stats-bar {
                    background: #184f69;
                    padding: 28px 0;
                }
                .svc-stats-grid {
                    display: flex;
                    justify-content: center;
                    gap: 0;
                }
                .svc-stat {
                    flex: 1;
                    max-width: 260px;
                    text-align: center;
                    padding: 0 24px;
                    border-right: 1px solid rgba(255, 255, 255, 0.12);
                }
                .svc-stat:last-child {
                    border-right: none;
                }
                .svc-stat-value {
                    display: block;
                    color: #37a1a5;
                    font-size: 22px;
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 4px;
                }
                .svc-stat-label {
                    color: rgba(255, 255, 255, 0.72);
                    font-size: 13px;
                    font-weight: 500;
                }

                /* ── SECTION TAGS ── */
                .svc-section-tag {
                    display: inline-block;
                    color: #37a1a5;
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    margin-bottom: 12px;
                }
                .svc-section-tag.light {
                    color: rgba(255, 255, 255, 0.7);
                }
                .svc-section-title {
                    color: #184f69;
                    font-size: clamp(26px, 3.2vw, 40px);
                    font-weight: 800;
                    line-height: 1.15;
                    margin: 0 0 20px;
                }
                .svc-section-title.light {
                    color: #ffffff;
                }
                .svc-section-title.center {
                    text-align: center;
                }

                /* ── OVERVIEW ── */
                .svc-overview-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                }
                .svc-overview-text {
                    color: #4b5563;
                    font-size: 17px;
                    line-height: 1.7;
                    margin-bottom: 28px;
                }
                .svc-best-for {
                    padding: 20px 24px;
                    background: #f2f8f9;
                    border-left: 4px solid #37a1a5;
                    border-radius: 0 8px 8px 0;
                }
                .svc-best-for-label {
                    display: block;
                    color: #37a1a5;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    margin-bottom: 8px;
                }
                .svc-best-for p {
                    color: #374151;
                    font-size: 15px;
                    line-height: 1.6;
                    margin: 0;
                }
                .svc-overview-image {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 24px 60px rgba(24, 79, 105, 0.18);
                }
                .svc-overview-image img {
                    width: 100%;
                    height: 420px;
                    object-fit: cover;
                    display: block;
                }
                .svc-img-badge {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(14, 51, 71, 0.88);
                    backdrop-filter: blur(8px);
                    color: #ffffff;
                    font-size: 13px;
                    font-weight: 600;
                    padding: 10px 16px;
                    border-radius: 100px;
                }
                .svc-img-badge svg {
                    width: 18px;
                    height: 18px;
                    color: #37a1a5;
                    flex-shrink: 0;
                }

                /* ── WHAT'S INCLUDED ── */
                .svc-includes {
                    background: linear-gradient(135deg, #184f69 0%, #0e3347 100%);
                    padding: 80px 0;
                }
                .svc-includes-header {
                    text-align: center;
                    margin-bottom: 50px;
                }
                .svc-includes-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                }
                .svc-include-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 18px;
                    background: rgba(255, 255, 255, 0.07);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    padding: 24px 28px;
                    transition: background 0.2s;
                }
                .svc-include-card:hover {
                    background: rgba(255, 255, 255, 0.11);
                }
                .svc-include-num {
                    flex-shrink: 0;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: rgba(55, 161, 165, 0.2);
                    border: 1px solid rgba(55, 161, 165, 0.4);
                    color: #37a1a5;
                    font-size: 13px;
                    font-weight: 800;
                }
                .svc-include-card p {
                    color: rgba(255, 255, 255, 0.88);
                    font-size: 15px;
                    line-height: 1.6;
                    margin: 0;
                    padding-top: 8px;
                }

                /* ── PROCESS ── */
                .svc-process-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                }
                .svc-process-step {
                    position: relative;
                    padding: 32px 28px 28px;
                    background: #ffffff;
                    border: 1px solid rgba(24, 79, 105, 0.1);
                    border-radius: 12px;
                    box-shadow: 0 8px 32px rgba(24, 79, 105, 0.08);
                }
                .svc-process-num {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 52px;
                    height: 52px;
                    background: #184f69;
                    color: #ffffff;
                    font-size: 18px;
                    font-weight: 800;
                    border-radius: 50%;
                    margin-bottom: 20px;
                }
                .svc-process-line {
                    position: absolute;
                    top: 52px;
                    right: -16px;
                    width: 32px;
                    height: 2px;
                    background: #37a1a5;
                    z-index: 2;
                }
                .svc-process-step:last-child .svc-process-line {
                    display: none;
                }
                .svc-process-title {
                    color: #184f69;
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .svc-process-desc {
                    color: #6b7280;
                    font-size: 15px;
                    line-height: 1.6;
                    margin: 0;
                }

                /* ── QUOTE FORM ── */
                .svc-quote-box {
                    background: #f2f8f9;
                    border: 1px solid rgba(55, 161, 165, 0.2);
                    border-radius: 16px;
                    padding: 56px 52px;
                }
                .svc-quote-image {
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 16px 40px rgba(24, 79, 105, 0.15);
                    margin-top: 28px;
                }
                .svc-quote-image img {
                    width: 100%;
                    height: 220px;
                    object-fit: cover;
                    display: block;
                }
                .svc-form-wrap {
                    background: #ffffff;
                    border-radius: 12px;
                    padding: 36px;
                    box-shadow: 0 8px 30px rgba(24, 79, 105, 0.08);
                }

                /* ── RELATED SERVICES ── */
                :global(.svc-related-card) {
                    display: block;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid rgba(24, 79, 105, 0.1);
                    background: #ffffff;
                    text-decoration: none;
                    box-shadow: 0 6px 24px rgba(24, 79, 105, 0.07);
                    transition: transform 0.22s, box-shadow 0.22s;
                }
                :global(.svc-related-card:hover) {
                    transform: translateY(-4px);
                    box-shadow: 0 16px 40px rgba(24, 79, 105, 0.14);
                }
                :global(.svc-related-img) {
                    overflow: hidden;
                    height: 200px;
                }
                :global(.svc-related-img img) {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.4s;
                }
                :global(.svc-related-card:hover .svc-related-img img) {
                    transform: scale(1.05);
                }
                :global(.svc-related-body) {
                    padding: 24px;
                }
                :global(.svc-related-tag) {
                    display: inline-block;
                    color: #37a1a5;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    margin-bottom: 8px;
                }
                :global(.svc-related-body h5) {
                    color: #184f69;
                    font-size: 17px;
                    font-weight: 700;
                    margin-bottom: 8px;
                }
                :global(.svc-related-body p) {
                    color: #6b7280;
                    font-size: 14px;
                    line-height: 1.55;
                    margin-bottom: 16px;
                }
                :global(.svc-related-link) {
                    display: inline-flex;
                    align-items: center;
                    color: #184f69;
                    font-size: 14px;
                    font-weight: 600;
                    gap: 4px;
                }

                /* ── RESPONSIVE ── */
                @media (max-width: 991px) {
                    .svc-overview-grid {
                        grid-template-columns: 1fr;
                        gap: 36px;
                    }
                    .svc-includes-grid {
                        grid-template-columns: 1fr;
                    }
                    .svc-process-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    .svc-process-line {
                        display: none;
                    }
                    .svc-stats-grid {
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                    .svc-stat {
                        border-right: none;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
                        padding-bottom: 16px;
                    }
                    .svc-stat:last-child {
                        border-bottom: none;
                    }
                    .svc-quote-box {
                        padding: 36px 24px;
                    }
                    .svc-form-wrap {
                        padding: 24px;
                    }
                }
                @media (max-width: 575px) {
                    .svc-hero-inner {
                        padding-top: 80px;
                        padding-bottom: 60px;
                    }
                    .svc-hero-desc {
                        font-size: 16px;
                    }
                    .svc-overview-image img {
                        height: 280px;
                    }
                }
            `}</style>
        </>
    );
}

export function getStaticPaths() {
    return {
        paths: services.map((service) => ({ params: { slug: service.slug } })),
        fallback: false,
    };
}

export function getStaticProps({ params }) {
    const service = getServiceBySlug(params.slug);
    const relatedServices = services
        .filter((item) => item.slug !== params.slug)
        .slice(0, 3);

    return {
        props: {
            service,
            relatedServices,
        },
    };
}
