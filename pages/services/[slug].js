import Layout from "@/components/layout/Layout";
import { getServiceBySlug, services } from "@/util/servicesData";
import Link from "next/link";

const detailImages = [
    "/assets/imgs/page/service-detail/img1.png",
    "/assets/imgs/page/service-detail/img2.png",
    "/assets/imgs/page/service-detail/img3.png",
    "/assets/imgs/page/service-detail/img4.png",
];

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

export default function ServiceDetail({ service, relatedServices }) {
    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="box-pageheader-1 box-pageheader-services text-center">
                            <span className="btn btn-tag wow animate__animated animate__fadeIn">Go Connect Hub Services</span>
                            <h2 className="color-brand-2 mt-15 mb-10 wow animate__animated animate__fadeIn">{service.title}</h2>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">{service.description}</p>
                        </div>
                    </div>
                </section>

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 wow animate__animated animate__fadeIn">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="col-lg-6 position-relative wow animate__animated animate__fadeIn">
                                <img src={detailImages[1]} alt="Go Connect Hub fulfilment process" />
                                <div className="quote-center shape-2" />
                            </div>
                        </div>
                    </div>
                </div>

                <section className="section mt-50">
                    <div className="container">
                        <div className="content-detail">
                            <strong className="font-md-bold color-grey-900 mb-25 d-block wow animate__animated animate__fadeIn">{service.overview}</strong>
                            <h3 className="color-brand-2 wow animate__animated animate__fadeIn">{service.title} for growing sellers</h3>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">{service.bestFor}</p>
                            <p className="wow animate__animated animate__fadeIn"><img src={detailImages[2]} alt={`${service.title} workflow`} /></p>
                            <p className="wow animate__animated animate__fadeIn">
                                Go Connect Hub keeps this service connected to the wider fulfilment workflow, so storage, prep, picking, packing, dispatch, and returns can move with fewer handoffs and clearer accountability.
                            </p>
                            <h3 className="wow animate__animated animate__fadeIn">What&apos;s included</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-7 wow animate__animated animate__fadeIn">
                                    {service.includes.map((item) => (
                                        <p key={item}>• {item}</p>
                                    ))}
                                </div>
                                <div className="col-lg-5 wow animate__animated animate__fadeIn">
                                    <img src={detailImages[3]} alt="Go Connect Hub warehouse support" />
                                </div>
                            </div>
                            <h3 className="wow animate__animated animate__fadeIn">How the process works</h3>
                            {service.process.map((step, index) => (
                                <p className="wow animate__animated animate__fadeIn" key={step}>
                                    <strong className="color-brand-2">{String(index + 1).padStart(2, "0")}.</strong> {step}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="mt-50" />
                <section className="section">
                    <div className="container">
                        <div className="box-form-contact-leading">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2 className="title-favicon color-brand-2 mb-15 wow animate__animated animate__fadeIn">Calculate Fulfilment</h2>
                                    <p className="font-md color-grey-700 mb-25 wow animate__animated animate__fadeIn">Share your inventory, order volume, and preferred service so Go Connect Hub can guide the right setup.</p>
                                    <div className="row align-items-center wow animate__animated animate__fadeIn">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control" defaultValue={service.title}>
                                                    {services.map((item) => (
                                                        <option value={item.title} key={item.slug}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Monthly orders" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="SKU count" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Selling platform" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Current location" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" rows={5} placeholder="Message / Note" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <strong className="font-sm-bold color-grey-900">Extra Services</strong>
                                                <div className="row mt-10 box-cb-form">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group"><input className="cd-form" type="checkbox" />FBA prep</div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group"><input className="cd-form" type="checkbox" />Returns</div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group"><input className="cd-form" type="checkbox" />Packaging</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <Link className="btn btn-brand-1-big mr-25 wow animate__animated animate__fadeIn" href="/request-a-quote">
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                                                </svg>Request a Quote
                                            </Link>
                                            <Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="/contact">Contact Us
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box-image-contact wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/img-contact.png" alt="Go Connect Hub contact" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="line-border mt-80" />
                <section className="section pb-5 pt-50 mb-80">
                    <div className="container">
                        <div className="text-center">
                            <img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/template/icons/favicon.svg" alt="Go Connect Hub" />
                            <h2 className="color-brand-2 mb-15 wow animate__animated animate__fadeIn">Other Services</h2>
                            <p className="font-md color-grey-700 mb-35 wow animate__animated animate__fadeIn">Build a fulfilment setup around the services your store actually needs.</p>
                        </div>
                        <div className="row">
                            {relatedServices.map((item) => (
                                <div className="col-xl-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" key={item.slug}>
                                    <div className="cardService">
                                        <div className="cardImage">
                                            <Link href={`/services/${item.slug}`}><img src={item.image} alt={item.title} /></Link>
                                        </div>
                                        <div className="cardInfo">
                                            <Link href={`/services/${item.slug}`}>
                                                <img src={iconImages[item.icon]} alt={item.title} />
                                                <h6 className="color-brand-2">{item.title}</h6>
                                                <p className="font-xs color-grey-900">{item.description}</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
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
    const relatedServices = services.filter((item) => item.slug !== params.slug).slice(0, 3);

    return {
        props: {
            service,
            relatedServices,
        },
    };
}
