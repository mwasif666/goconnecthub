import Link from "next/link";
import { featuredServices } from "@/util/servicesData";

function ServiceIcon({ type }) {
    const commonProps = {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
    };

    switch (type) {
        case "warehouse":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1h-4v-6H8v6H4a1 1 0 0 1-1-1v-9.5Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01" />
                </svg>
            );
        case "box":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 4 7l8 4 8-4-8-4Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10l8 4 8-4V7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v10" />
                </svg>
            );
        case "amazon":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 16.5c1.1.8 2.7 1.5 4.8 1.5 2.2 0 3.8-.6 5.2-1.8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 16.2h2.5l-.8 2.3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 13.5V9.8c0-2 1.5-3.3 4-3.3s4 1.3 4 3.3v3.7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5h8" />
                </svg>
            );
        case "bundle":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 6.5h13v11h-13z" />
                </svg>
            );
        case "label":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 4H6a2 2 0 0 0-2 2v4l8 8 8-8-8-8Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.5h.01" />
                </svg>
            );
        case "wholesale":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18v-7h4v7M14 18V8h4v10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5h8v3" />
                </svg>
            );
        case "transfer":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h12" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m13 4 3 3-3 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 17H8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11 14-3 3 3 3" />
                </svg>
            );
        case "returns":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 8H4V4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8a8 8 0 1 1-1 7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v5l3 2" />
                </svg>
            );
        case "container":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18v8H3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8v8M11 8v8M15 8v8M19 8v8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 18v2M19 18v2" />
                </svg>
            );
        default:
            return null;
    }
}

export default function Services1() {
    return (
        <>
            <section className="section mt-100">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-8 col-md-8 mb-30">
                            <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">What We Offer</h2>
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">
                                From warehousing and fulfilment to returns and container unloading, our service offering is built around the exact operational needs shown in our service menu.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start">
                            <Link className="btn btn-brand-1 hover-up" href="/request-a-quote">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                                Get a quote
                            </Link>
                        </div>
                    </div>
                    <div className="mt-20 box-background-offer">
                        <div className="bg-under" />
                        <div className="row">
                            {featuredServices.map((service) => (
                                <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" key={service.slug}>
                                    <div className="card-offer hover-up">
                                        <div className="card-image">
                                            <span className="service-icon-wrap">
                                                <ServiceIcon type={service.icon} />
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <h5 className="color-brand-2 mb-15">{service.title}</h5>
                                            <p className="font-sm color-grey-900 mb-35">{service.description}</p>
                                            <div className="box-button-offer mb-30">
                                                <Link className="btn btn-link font-sm color-brand-2" href={`/services/${service.slug}`}>
                                                    View Details
                                                    <span>
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-20 wow animate__animated animate__fadeIn">
                            <Link className="btn btn-link-medium" href="/services">
                                View More
                                <span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .service-icon-wrap {
                    width: 84px;
                    height: 84px;
                    border-radius: 22px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(180deg, rgba(55, 161, 165, 0.22) 0%, rgba(55, 161, 165, 0.08) 100%);
                    color: #184f69;
                }

                .service-icon-wrap :global(svg) {
                    width: 38px;
                    height: 38px;
                }
            `}</style>
        </>
    );
}
