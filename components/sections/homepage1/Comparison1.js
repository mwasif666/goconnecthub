const comparisonRows = [
    {
        feature: "Free storage support",
        us: "Included for better inventory flexibility",
        others: "Often charged separately or limited",
    },
    {
        feature: "Shipping rates",
        us: "Market competitive and cost-optimized",
        others: "Higher markups with less flexibility",
    },
    {
        feature: "Channel integrations",
        us: "Connects with major ecommerce platforms",
        others: "Limited or fragmented integrations",
    },
    {
        feature: "Order visibility",
        us: "Centralized shipment and fulfillment tracking",
        others: "Manual follow-up across multiple tools",
    },
    {
        feature: "Onboarding speed",
        us: "Fast setup with guided support",
        others: "Longer setup and more internal effort",
    },
    {
        feature: "Support experience",
        us: "Dedicated and business-focused assistance",
        others: "Generic support with slower response time",
    },
]

export default function Comparison1() {
    return (
        <>
            <section className="section pt-70 pb-70">
                <div className="container">
                    <div className="comparison-shell wow animate__animated animate__fadeInUp">
                        <div className="comparison-header text-center">
                            <span className="comparison-kicker">Comparison Table</span>
                            <h2 className="mt-20 mb-20 color-brand-2">See what makes our fulfillment solution different</h2>
                            <p className="font-md color-grey-700 mb-0 comparison-copy">
                                A simple side-by-side breakdown of the value you get with us compared with typical alternatives in the market.
                            </p>
                        </div>

                        <div className="comparison-table-wrap">
                            <div className="comparison-table">
                                <div className="comparison-row comparison-row-head">
                                    <div className="comparison-cell comparison-cell-feature">Feature</div>
                                    <div className="comparison-cell comparison-cell-us">Us</div>
                                    <div className="comparison-cell comparison-cell-others">Others</div>
                                </div>

                                {comparisonRows.map((row) => (
                                    <div className="comparison-row" key={row.feature}>
                                        <div className="comparison-cell comparison-cell-feature" data-label="Feature">
                                            <span className="feature-title">{row.feature}</span>
                                        </div>
                                        <div className="comparison-cell comparison-cell-us" data-label="Us">
                                            <span className="value-pill value-pill-us">{row.us}</span>
                                        </div>
                                        <div className="comparison-cell comparison-cell-others" data-label="Others">
                                            <span className="value-pill value-pill-others">{row.others}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .comparison-shell {
                    border-radius: 28px;
                    padding: 42px 36px 32px;
                    background: linear-gradient(180deg, #ffffff 0%, #f6fbfd 100%);
                    border: 1px solid rgba(4, 28, 47, 0.08);
                    box-shadow: 0 18px 45px rgba(4, 28, 47, 0.08);
                }

                .comparison-header {
                    max-width: 760px;
                    margin: 0 auto 34px;
                }

                .comparison-kicker {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px 16px;
                    border-radius: 999px;
                    background: rgba(55, 161, 165, 0.14);
                    color: #184f69;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: 0.02em;
                    text-transform: uppercase;
                }

                .comparison-copy {
                    max-width: 680px;
                    margin: 0 auto;
                }

                .comparison-table-wrap {
                    overflow-x: auto;
                }

                .comparison-table {
                    min-width: 920px;
                    border-radius: 24px;
                    overflow: hidden;
                    border: 1px solid rgba(24, 79, 105, 0.1);
                    background: #ffffff;
                }

                .comparison-row {
                    display: grid;
                    grid-template-columns: 1.15fr 1fr 1fr;
                }

                .comparison-row:not(:last-child) {
                    border-bottom: 1px solid rgba(24, 79, 105, 0.1);
                }

                .comparison-row-head {
                    background: #184f69;
                    color: #ffffff;
                }

                .comparison-cell {
                    padding: 22px 24px;
                    display: flex;
                    align-items: center;
                    min-height: 92px;
                }

                .comparison-row-head .comparison-cell {
                    min-height: auto;
                    padding-top: 18px;
                    padding-bottom: 18px;
                    font-size: 16px;
                    font-weight: 700;
                }

                .comparison-cell-feature {
                    border-right: 1px solid rgba(24, 79, 105, 0.1);
                }

                .comparison-cell-us {
                    border-right: 1px solid rgba(24, 79, 105, 0.1);
                    background: linear-gradient(180deg, rgba(55, 161, 165, 0.14) 0%, rgba(55, 161, 165, 0.06) 100%);
                }

                .comparison-row-head .comparison-cell-us {
                    background: linear-gradient(180deg, #1f6781 0%, #184f69 100%);
                }

                .feature-title {
                    font-size: 18px;
                    line-height: 1.45;
                    font-weight: 700;
                    color: #2b3941;
                }

                .value-pill {
                    display: inline-flex;
                    align-items: center;
                    border-radius: 16px;
                    padding: 14px 16px;
                    font-size: 15px;
                    line-height: 1.5;
                    font-weight: 600;
                }

                .value-pill-us {
                    background: rgba(55, 161, 165, 0.18);
                    color: #184f69;
                }

                .value-pill-others {
                    background: #f3f7f9;
                    color: #2b3941;
                }

                @media (max-width: 991px) {
                    .comparison-shell {
                        padding: 32px 22px 24px;
                    }

                    .comparison-header {
                        margin-bottom: 26px;
                    }

                    .comparison-table {
                        min-width: 760px;
                    }

                    .comparison-cell {
                        padding: 18px 18px;
                        min-height: 84px;
                    }

                    .feature-title {
                        font-size: 16px;
                    }

                    .value-pill {
                        font-size: 14px;
                        padding: 12px 14px;
                    }
                }
            `}</style>
        </>
    )
}
