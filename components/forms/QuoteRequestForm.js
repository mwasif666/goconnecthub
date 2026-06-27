import Link from "next/link";
import useContactForm, {
    CONTACT_FORM_ACTION,
    CONTACT_FORM_EMAIL_TO,
} from "./useContactForm";

export default function QuoteRequestForm() {
    const {
        formRef,
        handleSubmit,
        isSubmitting,
        toastMessage,
        isToastVisible,
    } = useContactForm();

    return (
        <form
            id="quote-form"
            ref={formRef}
            className="box-form-contact-leading quote-request-form"
            method="post"
            action={CONTACT_FORM_ACTION}
            data-contact-managed="true"
            data-form-title="Get a Quote"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="email_to" value={CONTACT_FORM_EMAIL_TO} />
            <input type="hidden" name="subject" value="Get a Quote" />
            <div className="row">
                <div className="col-lg-8">
                    <h2 className="title-favicon color-brand-2 mb-15 wow animate__animated animate__fadeIn">Get a Quote</h2>
                    <p className="font-md color-grey-700 mb-25 wow animate__animated animate__fadeIn">
                        Share your shipment or fulfilment details and our team will contact you with the best option.
                    </p>
                    <div className="row align-items-center wow animate__animated animate__fadeIn">
                        <div className="col-lg-4">
                            <div className="form-group">
                                <label className="quote-label" htmlFor="quote-name">Name *</label>
                                <input id="quote-name" className="form-control" type="text" name="name" data-label="Name" placeholder="Your name" required />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <label className="quote-label" htmlFor="quote-email">Email *</label>
                                <input id="quote-email" className="form-control" type="email" name="email" data-label="Email" placeholder="you@example.com" required />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <label className="quote-label" htmlFor="quote-phone">Phone *</label>
                                <input id="quote-phone" className="form-control" type="tel" name="phone" data-label="Phone" placeholder="+44..." required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="quote-label" htmlFor="quote-service">Service required *</label>
                                <select id="quote-service" className="form-control" name="Service Required" data-label="Service Required" defaultValue="" required>
                                    <option value="" disabled>Select a service</option>
                                    <option value="Pick and pack fulfilment">Pick and pack fulfilment</option>
                                    <option value="FBA / FBM fulfilment">FBA / FBM fulfilment</option>
                                    <option value="Warehousing and storage">Warehousing and storage</option>
                                    <option value="Repackaging and relabelling">Repackaging and relabelling</option>
                                    <option value="Returns management">Returns management</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="quote-label" htmlFor="quote-pickup">Pickup / stock location</label>
                                <input id="quote-pickup" className="form-control" type="text" name="Pickup / Stock Location" data-label="Pickup / Stock Location" placeholder="City or supplier location" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="quote-label" htmlFor="quote-delivery">Delivery destination</label>
                                <input id="quote-delivery" className="form-control" type="text" name="Delivery Destination" data-label="Delivery Destination" placeholder="UK, EU, marketplace, customer" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="quote-label" htmlFor="quote-goods">Goods type</label>
                                <input id="quote-goods" className="form-control" type="text" name="Goods Type" data-label="Goods Type" placeholder="Clothing, electronics, cosmetics..." />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="quote-label" htmlFor="quote-quantity">Quantity / order volume</label>
                                <input id="quote-quantity" className="form-control" type="text" name="Quantity / Order Volume" data-label="Quantity / Order Volume" placeholder="Units, cartons, pallets, monthly orders" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="quote-label" htmlFor="quote-message">Message / requirements</label>
                                <textarea id="quote-message" className="form-control" name="message" data-label="Message" rows={5} placeholder="Tell us about prep, labelling, returns, timelines, or any special requirements." />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group quote-extras">
                                <strong className="font-sm-bold color-grey-900">Extra services</strong>
                                <div className="row mt-10 box-cb-form">
                                    <div className="col-lg-4 col-md-6">
                                        <label className="quote-check">
                                            <input className="cd-form" type="checkbox" name="Extra Services" data-label="Extra Services" value="Express delivery" />
                                            Express delivery
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="quote-check">
                                            <input className="cd-form" type="checkbox" name="Extra Services" data-label="Extra Services" value="Insurance" />
                                            Insurance
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="quote-check">
                                            <input className="cd-form" type="checkbox" name="Extra Services" data-label="Extra Services" value="Packaging / relabelling" />
                                            Packaging / relabelling
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <button className="btn btn-brand-1-big mr-25" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Submit Quote Request"}
                            </button>
                            <Link className="btn btn-link-medium" href="/contact">
                                Contact Us
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                            {isToastVisible && <p className="quote-status">{toastMessage}</p>}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box-image-contact wow animate__animated animate__fadeIn">
                        <img src="/assets/imgs/page/homepage1/img-contact.png" alt="Go Connect Hub quote" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .quote-request-form {
                    scroll-margin-top: 120px;
                }

                .quote-label {
                    display: block;
                    color: #102b3c;
                    font-size: 13px;
                    font-weight: 800;
                    margin-bottom: 8px;
                }

                .quote-check {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    color: #102b3c;
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 1.4;
                }

                .quote-extras {
                    padding: 12px 0 4px;
                }

                .quote-status {
                    color: #12715b;
                    font-weight: 800;
                    margin-top: 12px;
                }
            `}</style>
        </form>
    );
}
