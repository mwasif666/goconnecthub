import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const stats = [
    { value: "2015", label: "Started fulfilment operations" },
    { value: "500+", label: "Businesses supported" },
    { value: "99.8%", label: "Order accuracy focus" },
    { value: "Millions", label: "Orders processed" },
];

const values = [
    {
        title: "Excellence in every order",
        text: "Every receiving, packing, and dispatch step is handled with consistent checks so fulfilment feels reliable at scale.",
    },
    {
        title: "Technology-driven solutions",
        text: "We combine organized warehouse workflows with clear system updates so businesses can keep inventory moving accurately.",
    },
    {
        title: "Partnership over transactions",
        text: "Go Connect Hub works as an operations partner, not a one-off service provider, because your growth is the goal.",
    },
    {
        title: "Continuous innovation",
        text: "We keep improving fulfilment processes across storage, prep, dispatch, and returns as ecommerce needs evolve.",
    },
];

const milestones = [
    { year: "2015", title: "Founded", desc: "Go Connect Hub launched with a single fulfilment facility built around ecommerce seller needs." },
    { year: "2018", title: "Expanded Services", desc: "Added FBA prep, kitting, bundling, and B2B wholesale fulfilment to support growing seller channels." },
    { year: "2021", title: "500+ Clients", desc: "Passed 500 active business relationships across Amazon, Shopify, and TikTok channels." },
    { year: "2024", title: "Full Ecosystem", desc: "Complete fulfilment ecosystem covering 9 services with same-day dispatch capability." },
];

const results = [
    { label: "Industry Average", value: "78%", height: 60 },
    { label: "Top Competitors", value: "85%", height: 70 },
    { label: "Go Connect Hub", value: "99.8%", height: 92, featured: true },
    { label: "Market Standard", value: "82%", height: 66 },
];

const team = [
    {
        name: "Operations Team",
        role: "Warehouse & Dispatch",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "Client Success",
        role: "Account Management",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "Tech & Systems",
        role: "Inventory & Integrations",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    },
];

export default function About() {
    const resultsRef = useRef(null);

    useEffect(() => {
        if (!resultsRef.current) return;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const fills = gsap.utils.toArray(".bar-fill");
            const nums  = gsap.utils.toArray(".bar-num");

            gsap.set(fills, { scaleY: 0, transformOrigin: "bottom center" });
            gsap.set(nums,  { autoAlpha: 0, y: 10 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: resultsRef.current,
                    start: "top 72%",
                    once: true,
                },
            });

            fills.forEach((fill, i) => {
                tl.to(fill, {
                    scaleY: 1,
                    duration: 0.9,
                    ease: "power3.out",
                }, i * 0.14);
                tl.to(nums[i], {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                }, i * 0.14 + 0.5);
            });
        }, resultsRef);

        return () => ctx.revert();
    }, []);

    return (
        <Layout>
            <main className="about-page">

                {/* ── HERO ── */}
                <section className="about-hero">
                    <div
                        className="hero-bg"
                        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80)" }}
                        aria-hidden="true"
                    />
                    <div className="hero-overlay" aria-hidden="true" />
                    <div className="container hero-inner">
                        <div className="hero-grid">
                            <div className="hero-copy wow animate__animated animate__fadeIn">
                                <span className="hero-kicker">About Go Connect Hub</span>
                                <h1>Building the future of fulfilment</h1>
                                <p>
                                    Since 2015, we&apos;ve been transforming how ecommerce businesses handle fulfilment. What began as a single warehouse has evolved into a comprehensive logistics ecosystem trusted by 500+ sellers.
                                </p>
                                <p>
                                    We combine technology-led warehouse workflows with hands-on operational expertise to deliver fulfilment services that scale with your ambitions — across Amazon, Shopify, TikTok, and beyond.
                                </p>
                                <div className="hero-actions">
                                    <Link className="about-cta primary" href="/contact">Work with us</Link>
                                    <Link className="about-cta secondary" href="/services">
                                        Our services
                                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="hero-cards wow animate__animated animate__fadeIn">
                                <div className="hero-card-main">
                                    <img
                                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
                                        alt="Go Connect Hub warehouse operations"
                                    />
                                    <div className="hero-badge">
                                        <strong>500+</strong>
                                        <span>businesses trust Go Connect Hub</span>
                                    </div>
                                    <div className="hero-accuracy">
                                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        99.8% accuracy
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── STATS BAR ── */}
                <section className="stats-bar">
                    <div className="container">
                        <div className="stats-grid">
                            {stats.map((item) => (
                                <div className="stat-item" key={item.label}>
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── OUR STORY ── */}
                <section className="story-section">
                    <div className="container">
                        <div className="story-grid">
                            <div className="story-images wow animate__animated animate__fadeIn">
                                <div className="story-img-main">
                                    <img
                                        src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=700&q=80"
                                        alt="Go Connect Hub container operations"
                                    />
                                </div>
                                <div className="story-img-float">
                                    <img
                                        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&q=80"
                                        alt="Go Connect Hub packaging"
                                    />
                                    <div className="float-stat">
                                        <strong>9</strong>
                                        <span>fulfilment services</span>
                                    </div>
                                </div>
                            </div>
                            <div className="story-content wow animate__animated animate__fadeIn">
                                <span className="section-tag">Our Story</span>
                                <h2>From one warehouse to a full fulfilment ecosystem</h2>
                                <p>
                                    Go Connect Hub was built to solve a real gap — ecommerce sellers needed a reliable operations partner that understood the demands of marketplace, DTC, and social commerce fulfilment without the overhead of running their own warehouse.
                                </p>
                                <p>
                                    We started with warehousing and pick-and-pack, then grew into FBA prep, kitting, returns, container unloading, and wholesale B2B — because our clients needed more as they scaled.
                                </p>
                                <p>
                                    Today, Go Connect Hub is the behind-the-scenes operation that keeps inventory organized, orders moving, and customer expectations met.
                                </p>
                                <div className="story-chips">
                                    <span>Amazon FBA & FBM</span>
                                    <span>Shopify DTC</span>
                                    <span>TikTok Shops</span>
                                    <span>Wholesale B2B</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MILESTONES ── */}
                <section className="milestones-section">
                    <div className="container">
                        <div className="milestones-header">
                            <span className="section-tag light">Our journey</span>
                            <h2 className="light">Key milestones since 2015</h2>
                        </div>
                        <div className="milestones-grid">
                            {milestones.map((m, i) => (
                                <div className="milestone wow animate__animated animate__fadeInUp" key={m.year} data-wow-delay={`${i * 0.1}s`}>
                                    <span className="milestone-year">{m.year}</span>
                                    <div className="milestone-dot" aria-hidden="true" />
                                    <h4>{m.title}</h4>
                                    <p>{m.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PERFORMANCE ── */}
                <section className="results-section" ref={resultsRef}>
                    <div className="results-glow" aria-hidden="true" />
                    <div className="container">
                        <div className="results-head">
                            <span className="section-tag light">Performance</span>
                            <h2>We don&apos;t believe in talk.<br />We deliver results.</h2>
                            <p>Our accuracy and fulfilment performance are built around the operational detail ecommerce sellers need every day.</p>
                        </div>

                        <div className="bars-wrap">
                            <div className="bars">
                                {results.map((item) => (
                                    <div className={`result-bar${item.featured ? " featured" : ""}`} key={item.label}>
                                        {item.featured && (
                                            <div className="bar-badge">
                                                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Our accuracy
                                            </div>
                                        )}
                                        <div className="bar-shell">
                                            <div className="bar-track" aria-hidden="true" />
                                            <div className="bar-fill" style={{ height: `${item.height}%` }}>
                                                <span className="bar-num">{item.value}</span>
                                            </div>
                                        </div>
                                        <div className="bar-footer">
                                            <span className="bar-label">{item.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="results-footnote">
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                            Based on ecommerce fulfilment industry benchmarks and internal operational data.
                        </div>
                    </div>
                </section>

                {/* ── VALUES ── */}
                <section className="values-section">
                    <div className="container">
                        <div className="values-grid">
                            <div className="values-left wow animate__animated animate__fadeIn">
                                <span className="section-tag">What we stand for</span>
                                <h2>Operational values that keep fulfilment moving</h2>
                                <div className="values-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80"
                                        alt="Go Connect Hub loading dock"
                                    />
                                </div>
                            </div>
                            <div className="values-list">
                                {values.map((item, index) => (
                                    <div className="value-item wow animate__animated animate__fadeInUp" key={item.title} data-wow-delay={`${index * 0.08}s`}>
                                        <span className="value-num">{String(index + 1).padStart(2, "0")}</span>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── TEAM ── */}
                <section className="team-section">
                    <div className="container">
                        <div className="team-header">
                            <span className="section-tag">The people</span>
                            <h2>Teams that keep your fulfilment running</h2>
                            <p>Operations, client success, and systems — working together so your inventory stays organized and orders move on time.</p>
                        </div>
                        <div className="team-grid">
                            {team.map((member, i) => (
                                <div className="team-card wow animate__animated animate__fadeInUp" key={member.name} data-wow-delay={`${i * 0.1}s`}>
                                    <div className="team-img">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <div className="team-info">
                                        <h4>{member.name}</h4>
                                        <span>{member.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="about-cta">
                    <div
                        className="cta-bg"
                        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1612599539537-2788b23434a0?auto=format&fit=crop&w=1600&q=80)" }}
                        aria-hidden="true"
                    />
                    <div className="cta-overlay" aria-hidden="true" />
                    <div className="container cta-inner">
                        <span className="section-tag light">Ready to start?</span>
                        <h2>Let&apos;s build your fulfilment setup</h2>
                        <p>Tell us about your inventory, order volume, and channels — we&apos;ll find the right fit.</p>
                        <div className="cta-btns">
                            <Link className="about-cta primary" href="/request-a-quote">Get a Quote</Link>
                            <Link className="about-cta secondary" href="/contact">Contact Us</Link>
                        </div>
                    </div>
                </section>

            </main>

            <style jsx>{`
                .about-page {
                    background: #ffffff;
                    overflow: hidden;
                }

                /* ── HERO ── */
                .about-hero {
                    position: relative;
                    min-height: 620px;
                    display: flex;
                    align-items: center;
                    padding: 100px 0 80px;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        110deg,
                        rgba(14, 51, 71, 0.96) 0%,
                        rgba(14, 51, 71, 0.82) 50%,
                        rgba(55, 161, 165, 0.5) 100%
                    );
                }
                .hero-inner {
                    position: relative;
                    z-index: 2;
                }
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1fr minmax(0, 0.85fr);
                    gap: 60px;
                    align-items: center;
                }
                .hero-kicker {
                    display: inline-block;
                    padding: 6px 16px;
                    background: rgba(55, 161, 165, 0.2);
                    border: 1px solid rgba(55, 161, 165, 0.45);
                    border-radius: 100px;
                    color: #37a1a5;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    margin-bottom: 22px;
                }
                h1 {
                    color: #ffffff;
                    font-size: clamp(40px, 5.5vw, 76px);
                    line-height: 1.0;
                    font-weight: 800;
                    margin: 0 0 28px;
                }
                .hero-copy p {
                    color: rgba(255, 255, 255, 0.82);
                    font-size: 17px;
                    line-height: 1.7;
                    margin: 0 0 16px;
                    max-width: 620px;
                }
                .hero-actions {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    margin-top: 32px;
                    flex-wrap: wrap;
                }
                :global(a.about-cta) {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    min-height: 58px;
                    padding: 0 30px;
                    color: #ffffff;
                    font-size: 15px;
                    font-weight: 800;
                    line-height: 1;
                    text-decoration: none;
                    border-radius: 6px;
                    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
                    white-space: nowrap;
                }
                :global(a.about-cta.primary) {
                    background: #37a1a5;
                    border: 2px solid #37a1a5;
                }
                :global(a.about-cta.secondary) {
                    background: rgba(255,255,255,0.1);
                    border: 2px solid rgba(255,255,255,0.82);
                    backdrop-filter: blur(4px);
                }
                :global(a.about-cta:hover) {
                    color: #ffffff;
                    transform: translateY(-2px);
                }
                :global(a.about-cta.primary:hover),
                :global(a.about-cta.secondary:hover) {
                    border-color: #37a1a5;
                    background: #37a1a5;
                }
                :global(a.about-cta svg) {
                    width: 18px;
                    height: 18px;
                    flex: 0 0 18px;
                    display: block;
                    transition: transform 0.2s ease;
                }
                :global(a.about-cta:hover svg) { transform: translateX(3px); }

                /* ── HERO CARDS — single image ── */
                .hero-cards {
                    position: relative;
                }
                .hero-card-main {
                    position: relative;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 28px 70px rgba(0,0,0,0.36);
                }
                .hero-card-main img {
                    width: 100%;
                    height: 460px;
                    object-fit: cover;
                    object-position: center center;
                    display: block;
                }
                .hero-badge {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    background: rgba(255,255,255,0.97);
                    padding: 14px 20px;
                    border-radius: 12px;
                    backdrop-filter: blur(8px);
                }
                .hero-badge strong {
                    display: block;
                    color: #184f69;
                    font-size: 34px;
                    font-weight: 800;
                    line-height: 1;
                    margin-bottom: 4px;
                }
                .hero-badge span {
                    color: #374151;
                    font-size: 12px;
                    font-weight: 600;
                }
                .hero-accuracy {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(14,51,71,0.9);
                    color: #ffffff;
                    font-size: 13px;
                    font-weight: 700;
                    padding: 9px 16px;
                    border-radius: 100px;
                    backdrop-filter: blur(6px);
                    white-space: nowrap;
                }
                .hero-accuracy svg { width: 15px; height: 15px; color: #37a1a5; flex-shrink: 0; }

                /* ── STATS BAR ── */
                .stats-bar {
                    background: #184f69;
                    padding: 30px 0;
                }
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0;
                }
                .stat-item {
                    text-align: center;
                    padding: 0 20px;
                    border-right: 1px solid rgba(255,255,255,0.12);
                }
                .stat-item:last-child { border-right: none; }
                .stat-item strong {
                    display: block;
                    color: #37a1a5;
                    font-size: 28px;
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 4px;
                }
                .stat-item span {
                    color: rgba(255,255,255,0.7);
                    font-size: 13px;
                    font-weight: 500;
                }

                /* ── SECTION TAG ── */
                .section-tag {
                    display: inline-block;
                    color: #37a1a5;
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    margin-bottom: 14px;
                }
                .section-tag.light { color: rgba(255,255,255,0.65); }
                h2.light { color: #ffffff; }

                /* ── STORY ── */
                .story-section {
                    padding: 96px 0;
                    background: #f9fafb;
                }
                .story-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 70px;
                    align-items: center;
                }
                .story-images {
                    position: relative;
                }
                .story-img-main {
                    border-radius: 14px;
                    overflow: hidden;
                    box-shadow: 0 24px 60px rgba(24,79,105,0.18);
                }
                .story-img-main img {
                    width: 100%;
                    height: 460px;
                    object-fit: cover;
                    display: block;
                }
                .story-img-float {
                    position: absolute;
                    bottom: -30px;
                    right: -30px;
                    width: 220px;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 16px 40px rgba(24,79,105,0.22);
                    border: 4px solid #ffffff;
                }
                .story-img-float img {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                    display: block;
                }
                .float-stat {
                    background: #184f69;
                    padding: 14px;
                    text-align: center;
                }
                .float-stat strong {
                    display: block;
                    color: #37a1a5;
                    font-size: 28px;
                    font-weight: 800;
                    line-height: 1;
                }
                .float-stat span {
                    color: rgba(255,255,255,0.8);
                    font-size: 12px;
                    font-weight: 600;
                }
                .story-content h2 {
                    color: #184f69;
                    font-size: clamp(28px, 3.5vw, 44px);
                    font-weight: 800;
                    line-height: 1.12;
                    margin: 0 0 22px;
                }
                .story-content p {
                    color: #4b5563;
                    font-size: 16px;
                    line-height: 1.7;
                    margin-bottom: 16px;
                }
                .story-chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 28px;
                }
                .story-chips span {
                    padding: 7px 16px;
                    border: 1px solid rgba(55,161,165,0.4);
                    border-radius: 100px;
                    color: #184f69;
                    font-size: 13px;
                    font-weight: 600;
                    background: rgba(55,161,165,0.07);
                }

                /* ── MILESTONES ── */
                .milestones-section {
                    background: linear-gradient(135deg, #184f69 0%, #0e3347 100%);
                    padding: 90px 0;
                }
                .milestones-header {
                    text-align: center;
                    margin-bottom: 56px;
                }
                .milestones-header h2 {
                    color: #ffffff;
                    font-size: clamp(28px, 3.5vw, 46px);
                    font-weight: 800;
                    margin: 0;
                }
                .milestones-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0;
                    position: relative;
                }
                .milestones-grid::before {
                    content: "";
                    position: absolute;
                    top: 30px;
                    left: 12%;
                    right: 12%;
                    height: 2px;
                    background: rgba(55,161,165,0.35);
                }
                .milestone {
                    text-align: center;
                    padding: 0 24px;
                }
                .milestone-year {
                    display: inline-block;
                    color: #37a1a5;
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    margin-bottom: 14px;
                }
                .milestone-dot {
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: #37a1a5;
                    border: 3px solid rgba(255,255,255,0.2);
                    margin: 0 auto 20px;
                    position: relative;
                    z-index: 1;
                }
                .milestone h4 {
                    color: #ffffff;
                    font-size: 17px;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .milestone p {
                    color: rgba(255,255,255,0.68);
                    font-size: 14px;
                    line-height: 1.6;
                    margin: 0;
                }

                /* ── PERFORMANCE ── */
                .results-section {
                    position: relative;
                    padding: 100px 0 90px;
                    background: #071520;
                    overflow: hidden;
                }
                .results-glow {
                    position: absolute;
                    top: -120px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 700px;
                    height: 400px;
                    background: radial-gradient(ellipse, rgba(55,161,165,0.18) 0%, transparent 70%);
                    pointer-events: none;
                }
                .results-head {
                    text-align: center;
                    max-width: 780px;
                    margin: 0 auto 72px;
                }
                .results-head h2 {
                    color: #ffffff;
                    font-size: clamp(32px, 4.5vw, 60px);
                    font-weight: 800;
                    line-height: 1.08;
                    margin: 0 0 20px;
                    letter-spacing: -0.01em;
                }
                .results-head p {
                    color: rgba(255,255,255,0.58);
                    font-size: 17px;
                    line-height: 1.65;
                    margin: 0;
                    max-width: 560px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .bars-wrap {
                    max-width: 860px;
                    margin: 0 auto;
                }
                .bars {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 18px;
                    align-items: end;
                }
                .result-bar {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .bar-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: #37a1a5;
                    color: #ffffff;
                    border-radius: 100px;
                    padding: 8px 16px;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    margin-bottom: 14px;
                    white-space: nowrap;
                }
                .bar-badge svg {
                    width: 15px;
                    height: 15px;
                    flex-shrink: 0;
                }
                .bar-shell {
                    position: relative;
                    width: 100%;
                    height: 340px;
                    border-radius: 20px;
                    overflow: hidden;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.07);
                }
                .bar-track {
                    position: absolute;
                    inset: 0;
                    background: repeating-linear-gradient(
                        180deg,
                        rgba(255,255,255,0.03) 0px,
                        rgba(255,255,255,0.03) 1px,
                        transparent 1px,
                        transparent 40px
                    );
                }
                .bar-fill {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border-radius: 20px 20px 0 0;
                    background: rgba(55,161,165,0.3);
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    padding-top: 20px;
                    /* scaleY animated by GSAP */
                }
                .featured .bar-fill {
                    background: linear-gradient(180deg, #37a1a5 0%, #2d8a8e 100%);
                    box-shadow: 0 -8px 40px rgba(55,161,165,0.4);
                }
                .bar-num {
                    color: #ffffff;
                    font-size: 17px;
                    font-weight: 800;
                    opacity: 0; /* controlled by GSAP */
                }
                .bar-footer {
                    margin-top: 16px;
                    text-align: center;
                }
                .bar-label {
                    color: rgba(255,255,255,0.5);
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 1.4;
                }
                .featured .bar-label {
                    color: #37a1a5;
                    font-weight: 700;
                }
                .results-footnote {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    margin-top: 48px;
                    color: rgba(255,255,255,0.3);
                    font-size: 13px;
                    line-height: 1.5;
                    text-align: center;
                }
                .results-footnote svg {
                    width: 16px;
                    height: 16px;
                    flex-shrink: 0;
                    opacity: 0.5;
                }

                /* ── VALUES ── */
                .values-section {
                    padding: 96px 0;
                    background: #ffffff;
                }
                .values-grid {
                    display: grid;
                    grid-template-columns: 0.55fr 1fr;
                    gap: 60px;
                    align-items: start;
                }
                .values-left h2 {
                    color: #184f69;
                    font-size: clamp(26px, 3vw, 40px);
                    font-weight: 800;
                    line-height: 1.15;
                    margin: 0 0 28px;
                }
                .values-image {
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 16px 40px rgba(24,79,105,0.14);
                }
                .values-image img {
                    width: 100%;
                    height: 260px;
                    object-fit: cover;
                    display: block;
                }
                .values-list {
                    border-top: 1px solid rgba(24,79,105,0.1);
                }
                .value-item {
                    display: grid;
                    grid-template-columns: 60px 1fr;
                    gap: 24px;
                    padding: 30px 0;
                    border-bottom: 1px solid rgba(24,79,105,0.1);
                }
                .value-num {
                    color: rgba(24,79,105,0.2);
                    font-size: 22px;
                    font-weight: 800;
                    line-height: 1.3;
                    padding-top: 4px;
                }
                .value-item h3 {
                    color: #184f69;
                    font-size: clamp(18px, 2.2vw, 26px);
                    font-weight: 700;
                    margin: 0 0 10px;
                }
                .value-item p {
                    color: #6b7280;
                    font-size: 16px;
                    line-height: 1.65;
                    margin: 0;
                }

                /* ── TEAM ── */
                .team-section {
                    padding: 90px 0;
                    background: #f2f8f9;
                }
                .team-header {
                    text-align: center;
                    max-width: 620px;
                    margin: 0 auto 52px;
                }
                .team-header h2 {
                    color: #184f69;
                    font-size: clamp(26px, 3.2vw, 40px);
                    font-weight: 800;
                    margin: 0 0 14px;
                }
                .team-header p {
                    color: #6b7280;
                    font-size: 16px;
                    line-height: 1.6;
                    margin: 0;
                }
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                }
                .team-card {
                    border-radius: 14px;
                    overflow: hidden;
                    background: #ffffff;
                    border: 1px solid rgba(24,79,105,0.1);
                    box-shadow: 0 8px 28px rgba(24,79,105,0.08);
                    transition: transform 0.22s, box-shadow 0.22s;
                }
                .team-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 18px 48px rgba(24,79,105,0.15);
                }
                .team-img {
                    overflow: hidden;
                    height: 260px;
                }
                .team-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.4s;
                }
                .team-card:hover .team-img img {
                    transform: scale(1.05);
                }
                .team-info {
                    padding: 22px 24px;
                }
                .team-info h4 {
                    color: #184f69;
                    font-size: 17px;
                    font-weight: 700;
                    margin: 0 0 4px;
                }
                .team-info span {
                    color: #37a1a5;
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                }

                /* ── CTA ── */
                .about-cta {
                    position: relative;
                    padding: 100px 0;
                    overflow: hidden;
                }
                .cta-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                }
                .cta-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(14,51,71,0.95) 0%, rgba(14,51,71,0.85) 100%);
                }
                .cta-inner {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 640px;
                    margin: 0 auto;
                }
                .cta-inner h2 {
                    color: #ffffff;
                    font-size: clamp(28px, 4vw, 50px);
                    font-weight: 800;
                    margin: 0 0 16px;
                }
                .cta-inner p {
                    color: rgba(255,255,255,0.75);
                    font-size: 17px;
                    line-height: 1.6;
                    margin-bottom: 36px;
                }
                .cta-btns {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .cta-link {
                    color: rgba(255,255,255,0.85);
                    font-size: 15px;
                    font-weight: 600;
                    text-decoration: none;
                    border-bottom: 1px solid rgba(255,255,255,0.35);
                    padding-bottom: 2px;
                    transition: color 0.2s, border-color 0.2s;
                }
                .cta-link:hover { color: #37a1a5; border-color: #37a1a5; }

                /* ── RESPONSIVE ── */
                @media (max-width: 1199px) {
                    .story-img-float { right: -10px; }
                }
                @media (max-width: 991px) {
                    .hero-grid,
                    .story-grid,
                    .values-grid { grid-template-columns: 1fr; gap: 40px; }
                    .hero-cards { height: 420px; }
                    .hero-card-main img { height: 280px; }
                    .hero-card-small { width: 65%; }
                    .hero-card-small img { height: 148px; }
                    .stats-grid { grid-template-columns: repeat(2, 1fr); }
                    .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.12); padding-bottom: 20px; }
                    .stat-item:last-child, .stat-item:nth-child(even) { border-bottom: none; }
                    .milestones-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
                    .milestones-grid::before { display: none; }
                    .bars { grid-template-columns: repeat(2, 1fr); }
                    .team-grid { grid-template-columns: repeat(2, 1fr); }
                    .story-img-float { position: relative; bottom: auto; right: auto; width: 100%; }
                    .story-img-float img { height: 200px; }
                }
                @media (max-width: 575px) {
                    .about-hero { padding: 80px 0 60px; }
                    .hero-cards { height: 360px; }
                    .hero-card-main img { height: 240px; }
                    .hero-card-small { width: 80%; }
                    .hero-card-small img { height: 130px; }
                    .stats-grid { grid-template-columns: 1fr; }
                    .milestones-grid { grid-template-columns: 1fr; }
                    .bars { grid-template-columns: repeat(2, 1fr); }
                    .bar-shell { height: 220px; }
                    .team-grid { grid-template-columns: 1fr; }
                    .value-item { grid-template-columns: 1fr; gap: 8px; }
                }
            `}</style>
        </Layout>
    );
}
