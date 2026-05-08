import Layout from "@/components/layout/Layout";
import Link from "next/link";

const stats = [
    { value: "2015", label: "Started fulfilment operations" },
    { value: "500+", label: "Businesses supported" },
    { value: "99.8%", label: "Order accuracy focus" },
    { value: "Millions", label: "Orders processed" },
];

const results = [
    { label: "Industry Average", value: "78%", height: 60 },
    { label: "Top Competitors", value: "85%", height: 70 },
    { label: "Go Connect Hub", value: "99.8%", height: 92, featured: true },
    { label: "Market Standard", value: "82%", height: 66 },
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

export default function About() {
    return (
        <Layout>
            <main className="about-page">
                <section className="about-hero">
                    <div className="container">
                        <div className="hero-grid">
                            <div className="hero-copy">
                                <span>About Go Connect Hub</span>
                                <h1>Building the future of fulfilment</h1>
                                <p>
                                    Since 2015, we&apos;ve been on a mission to transform how e-commerce businesses handle fulfilment. What began as a single warehouse has evolved into a comprehensive logistics ecosystem.
                                </p>
                                <p>
                                    We combine cutting-edge technology with hands-on expertise to deliver fulfilment services that scale with your ambitions. Today, Go Connect Hub is trusted by over 500 businesses, processing millions of orders with industry-leading accuracy.
                                </p>
                                <p>
                                    What drives us is the success of every business we partner with. Your growth is our mission.
                                </p>
                                <Link href="/contact">Work with us</Link>
                            </div>
                            <div className="hero-image">
                                <img src="/assets/imgs/page/homepage1/banner-storage-unsplash.jpg" alt="Go Connect Hub fulfilment warehouse" />
                                <div className="image-badge">
                                    <strong>500+</strong>
                                    <span>businesses trust Go Connect Hub</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="stats-section">
                    <div className="container">
                        <div className="stats-grid">
                            {stats.map((item) => (
                                <div className="stat-card" key={item.label}>
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="results-section">
                    <div className="container">
                        <div className="results-head">
                            <span>Performance</span>
                            <h2>We don&apos;t believe in talk. We deliver results.</h2>
                            <p>Our accuracy and fulfilment performance are built around the operational detail ecommerce sellers need every day.</p>
                        </div>
                        <div className="bars">
                            {results.map((item) => (
                                <div className={`result-bar ${item.featured ? "featured" : ""}`} key={item.label}>
                                    {item.featured && <em>accuracy</em>}
                                    <div className="bar-shell">
                                        <div className="bar-fill" style={{ height: `${item.height}%` }}>
                                            <strong>{item.value}</strong>
                                        </div>
                                    </div>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="values-section">
                    <div className="container">
                        <div className="values-grid">
                            <div>
                                <span className="kicker">What we stand for</span>
                                <h2>Operational values that keep fulfilment moving</h2>
                            </div>
                            <div className="values-list">
                                {values.map((item, index) => (
                                    <div className="value-item" key={item.title}>
                                        <span>{String(index + 1).padStart(2, "0")}</span>
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
            </main>

            <style jsx>{`
                .about-page {
                    background: #ffffff;
                    color: #082233;
                    overflow: hidden;
                }

                .about-hero {
                    padding: 100px 0 72px;
                    background:
                        radial-gradient(circle at 90% 12%, rgba(255, 224, 138, 0.2), transparent 28%),
                        linear-gradient(135deg, #184f69, #082f42);
                }

                .hero-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 0.9fr) minmax(380px, 0.74fr);
                    gap: 52px;
                    align-items: center;
                }

                .hero-copy {
                    color: #ffffff;
                }

                .hero-copy span,
                .results-head span,
                .kicker {
                    display: inline-block;
                    color: #ffe08a;
                    font-size: 14px;
                    font-weight: 900;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    margin-bottom: 18px;
                }

                h1 {
                    color: #ffffff;
                    font-size: clamp(48px, 7vw, 92px);
                    line-height: 0.94;
                    letter-spacing: 0;
                    margin: 0 0 30px;
                    max-width: 850px;
                }

                .hero-copy p {
                    color: rgba(255, 255, 255, 0.86);
                    font-size: 20px;
                    line-height: 1.65;
                    margin: 0 0 18px;
                    max-width: 790px;
                }

                .hero-copy a {
                    display: inline-flex;
                    margin-top: 18px;
                    color: #082233;
                    background: #ffe08a;
                    border-radius: 999px;
                    padding: 16px 25px;
                    font-weight: 900;
                }

                .hero-image {
                    position: relative;
                    min-height: 560px;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.28);
                }

                .hero-image img {
                    width: 100%;
                    height: 100%;
                    min-height: 560px;
                    object-fit: cover;
                }

                .image-badge {
                    position: absolute;
                    left: 28px;
                    bottom: 28px;
                    max-width: 270px;
                    padding: 24px;
                    border-radius: 16px;
                    background: #ffffff;
                    color: #082233;
                }

                .image-badge strong {
                    display: block;
                    color: #184f69;
                    font-size: 48px;
                    line-height: 1;
                    margin-bottom: 8px;
                }

                .image-badge span {
                    color: #263944;
                    font-weight: 800;
                    line-height: 1.4;
                }

                .stats-section {
                    padding: 0 0 84px;
                    margin-top: -38px;
                    position: relative;
                    z-index: 2;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 18px;
                }

                .stat-card {
                    background: #ffffff;
                    border: 1px solid rgba(24, 79, 105, 0.14);
                    border-radius: 14px;
                    padding: 28px;
                    box-shadow: 0 18px 50px rgba(8, 34, 51, 0.1);
                }

                .stat-card strong {
                    display: block;
                    color: #184f69;
                    font-size: 42px;
                    line-height: 1;
                    margin-bottom: 10px;
                }

                .stat-card span {
                    color: #52616b;
                    font-size: 16px;
                    font-weight: 800;
                }

                .results-section {
                    padding: 96px 0 110px;
                    background: #06151d;
                    color: #ffffff;
                }

                .results-head {
                    text-align: center;
                    max-width: 780px;
                    margin: 0 auto 58px;
                }

                .results-head h2 {
                    color: #ffffff;
                    font-size: clamp(42px, 6vw, 76px);
                    line-height: 0.98;
                    letter-spacing: 0;
                    margin: 0 0 20px;
                }

                .results-head p {
                    color: rgba(255, 255, 255, 0.68);
                    font-size: 19px;
                    line-height: 1.55;
                    margin: 0;
                }

                .bars {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 26px;
                    align-items: end;
                    max-width: 960px;
                    margin: 0 auto;
                }

                .result-bar {
                    position: relative;
                    text-align: center;
                }

                .result-bar em {
                    display: inline-block;
                    position: absolute;
                    top: -52px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #082233;
                    background: #ffe08a;
                    border-radius: 10px;
                    padding: 8px 14px;
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 900;
                    text-transform: uppercase;
                }

                .bar-shell {
                    position: relative;
                    height: 360px;
                    border-radius: 34px;
                    overflow: hidden;
                    background: repeating-linear-gradient(
                        -45deg,
                        rgba(255, 255, 255, 0.11),
                        rgba(255, 255, 255, 0.11) 4px,
                        rgba(255, 255, 255, 0.04) 4px,
                        rgba(255, 255, 255, 0.04) 8px
                    );
                }

                .bar-fill {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    padding-top: 44px;
                    border-radius: 34px 34px 0 0;
                    background: rgba(255, 224, 138, 0.58);
                }

                .featured .bar-fill {
                    background: #ffc21a;
                }

                .bar-fill strong {
                    color: #ffffff;
                    font-size: 17px;
                    font-weight: 900;
                }

                .result-bar > span {
                    display: block;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 15px;
                    margin-top: 18px;
                }

                .values-section {
                    padding: 100px 0;
                    background: #ffffff;
                }

                .values-grid {
                    display: grid;
                    grid-template-columns: minmax(290px, 0.45fr) minmax(0, 1fr);
                    gap: 60px;
                    align-items: start;
                }

                .values-grid h2 {
                    color: #082233;
                    font-size: clamp(42px, 6vw, 76px);
                    line-height: 0.98;
                    margin: 0;
                    letter-spacing: 0;
                }

                .values-list {
                    border-top: 1px solid rgba(8, 34, 51, 0.13);
                }

                .value-item {
                    display: grid;
                    grid-template-columns: 70px 1fr;
                    gap: 28px;
                    padding: 34px 0;
                    border-bottom: 1px solid rgba(8, 34, 51, 0.13);
                }

                .value-item > span {
                    color: rgba(8, 34, 51, 0.24);
                    font-size: 25px;
                    font-weight: 900;
                    line-height: 1.2;
                }

                .value-item h3 {
                    color: #082233;
                    font-size: clamp(30px, 4vw, 44px);
                    line-height: 1.05;
                    margin: 0 0 14px;
                }

                .value-item p {
                    color: #52616b;
                    font-size: 18px;
                    line-height: 1.6;
                    margin: 0;
                    max-width: 780px;
                }

                @media (max-width: 991px) {
                    .hero-grid,
                    .stats-grid,
                    .bars,
                    .values-grid {
                        grid-template-columns: 1fr;
                    }

                    .hero-image,
                    .hero-image img {
                        min-height: 380px;
                    }

                    .stats-section {
                        margin-top: 0;
                        padding-top: 50px;
                    }

                    .bar-shell {
                        height: 260px;
                    }
                }

                @media (max-width: 575px) {
                    .about-hero {
                        padding: 72px 0 54px;
                    }

                    .hero-copy p {
                        font-size: 17px;
                    }

                    .value-item {
                        grid-template-columns: 1fr;
                        gap: 10px;
                    }

                    .stats-grid {
                        gap: 14px;
                    }
                }
            `}</style>
        </Layout>
    );
}
