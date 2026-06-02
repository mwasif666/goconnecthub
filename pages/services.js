import Layout from "@/components/layout/Layout";
import { services } from "@/util/servicesData";
import Link from "next/link";

const iconImages = {
    warehouse: "/assets/imgs/page/homepage4/pallet.png",
    box: "/assets/imgs/page/homepage1/order.png",
    amazon: "/assets/imgs/page/homepage1/cargo-ship.png",
    bundle: "/assets/imgs/page/homepage1/container.png",
    label: "/assets/imgs/page/homepage1/payment.png",
    wholesale: "/assets/imgs/page/homepage1/warehouse.png",
    transfer: "/assets/imgs/page/homepage1/worldwide.png",
    returns: "/assets/imgs/page/workprocess/cardboard.png",
    container: "/assets/imgs/page/homepage1/port.png",
};

export default function Service() {
    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="box-pageheader-1 box-pageheader-services text-center">
                            <span className="btn btn-tag wow animate__animated animate__fadeIn">Go Connect Hub services</span>
                            <h2 className="color-brand-2 mt-15 mb-10 wow animate__animated animate__fadeIn">Our Services</h2>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                                Storage, prep, pick and pack, dispatch, returns, and value-added fulfilment support for ecommerce sellers and growing brands.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section mt-0">
                    <div className="container">
                        <div className="row">
                            {services.map((service, index) => (
                                <div className="col-xl-4 col-md-6 mb-30 wow animate__animated animate__fadeIn" key={service.slug}>
                                    <div className="cardService">
                                        <div className="cardImage">
                                            <Link href={`/services/${service.slug}`}>
                                                <img src={service.image} alt={service.title} />
                                            </Link>
                                        </div>
                                        <div className="cardInfo">
                                            <Link href={`/services/${service.slug}`}>
                                                <img src={iconImages[service.icon]} alt={service.title} />
                                                <h6 className="color-brand-2">{service.title}</h6>
                                                <p className="font-xs color-grey-900">{service.description}</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="mt-50" />
                <section className="section pt-20 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <span className="btn btn-tag wow animate__animated animate__fadeIn">Get in touch</span>
                                <h3 className="color-grey-900 mb-20 mt-15 wow animate__animated animate__fadeIn">Proud to deliver fulfilment excellence every time</h3>
                                <p className="font-md color-grey-900 mb-40 wow animate__animated animate__fadeIn">
                                    Go Connect Hub keeps ecommerce fulfilment organized from inbound receiving to outbound dispatch. Share your order volume, platforms, and inventory flow, and we will help shape the right warehouse workflow.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Scale daily orders</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Pick, pack, dispatch, and returns support built for repeat ecommerce operations.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Clean inventory flow</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Storage, labelling, bundling, and inbound handling under one fulfilment process.</p>
                                    </div>
                                </div>
                                <div className="mt-20">
                                    <Link className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn" href="/contact">Contact Us</Link>
                                    <Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="/request-a-quote">Request a Quote
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 position-relative">
                                <div className="certified-icon wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage3/certified.png" alt="Go Connect Hub" /></div>
                                <div className="row">
                                    <div className="col-md-6 wow animate__animated animate__fadeIn"><img className="mt-90" src="/assets/imgs/page/homepage3/img-info-5.png" alt="Go Connect Hub fulfilment" /></div>
                                    <div className="col-md-6 wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage3/img-info-5-2.png" alt="Go Connect Hub warehouse" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
