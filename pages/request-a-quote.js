import Layout from "@/components/layout/Layout";
import QuoteRequestForm from "@/components/forms/QuoteRequestForm";
import Project1Slider from "@/components/slider/Project1Slider";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
export default function Quote() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                <section className="section box-requestaquote-4">
                    <div className="box-bg-requestaquote-4" />
                    <div className="container">
                        <div className="text-center mt-100">
                            <h2 className="color-brand-2 wow animate__animated animate__fadeIn">Request a quote for<br className="d-none d-lg-block" />shipping services</h2>
                            <div className="box-button mt-30"><Link className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeIn" href="#quote-form">Calculate Package</Link><a className="btn btn-play popup-youtube hover-up color-brand-2 wow animate__animated animate__fadeIn" onClick={() => setOpen(true)}><img src="/assets/imgs/template/icons/play.svg" alt="" />How it work ?</a></div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                        </div>
                        <QuoteRequestForm />
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <h2 className="color-brand-2 mb-20 wow animate__animated animate__fadeIn">We have branches in many<br className="d-none d-lg-block" />regions of the world</h2>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 mb-30">
                                <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">We has experience in handling the formalities and documentation required for your imports and exports. We work with all international station to guarantee that your load will safely reach without any delays.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn" href="/request-a-quote">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>Get a quote</Link></div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-xl-3 col-md-6 mb-50">
                                <div className="cardService">
                                    <div className="cardImage wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/contact/branch1.png" alt="transp" /></div>
                                    <div className="cardInfo wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" />
                                        <h6 className="color-brand-2 mb-15">Go Connect Hub Manchester</h6>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Address:</strong>2 Peel Lane Greater, Cheetham Hill, Manchester M8 8RJ</p>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Phone Number:</strong>+44 7404 307411</p>
                                        <p className="font-xs color-grey-900"><strong className="color-brand-2">Email:</strong>sales@goconnecthub.uk</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-50">
                                <div className="cardService">
                                    <div className="cardImage wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/contact/branch2.png" alt="transp" /></div>
                                    <div className="cardInfo wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" />
                                        <h6 className="color-brand-2 mb-15">Go Connect Hub Fulfilment</h6>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Address:</strong>2 Peel Lane Greater, Cheetham Hill, Manchester M8 8RJ</p>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Phone Number:</strong>+44 7404 307411</p>
                                        <p className="font-xs color-grey-900"><strong className="color-brand-2">Email:</strong>sales@goconnecthub.uk</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-50">
                                <div className="cardService">
                                    <div className="cardImage wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/contact/branch3.png" alt="transp" /></div>
                                    <div className="cardInfo wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" />
                                        <h6 className="color-brand-2 mb-15">Go Connect Hub Ecommerce Support</h6>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Address:</strong>2 Peel Lane Greater, Cheetham Hill, Manchester M8 8RJ</p>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Phone Number:</strong>+44 7404 307411</p>
                                        <p className="font-xs color-grey-900"><strong className="color-brand-2">Email:</strong>sales@goconnecthub.uk</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-50">
                                <div className="cardService">
                                    <div className="cardImage wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/contact/branch4.png" alt="transp" /></div>
                                    <div className="cardInfo wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" />
                                        <h6 className="color-brand-2 mb-15">Go Connect Hub Seller Support</h6>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Address:</strong>2 Peel Lane Greater, Cheetham Hill, Manchester M8 8RJ</p>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Phone Number:</strong>+44 7404 307411</p>
                                        <p className="font-xs color-grey-900"><strong className="color-brand-2">Email:</strong>sales@goconnecthub.uk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-85 bg-worldmap">
                    <div className="container">
                        <div className="text-start"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/template/icons/favicon.svg" alt="transp" />
                            <h2 className="color-brand-2 mb-20 wow animate__animated animate__fadeIn">How It Works</h2>
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">You choose the cities where you’d like to deliver. All deliveries are within a specific service area and delivery services vary by location. Whatever the mode or requirement, we will find and book the ideal expedited shipping solution to ensure a timely delivery.</p>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6 mb-30">
                                <div className="box-image-how"><img className="w-100 wow animate__animated animate__fadeIn" src="/assets/imgs/page/homepage1/how-it-work.png" alt="transp" />
                                    <div className="box-info-bottom-img">
                                        <div className="image-play wow animate__animated animate__fadeIn"><img className="mb-15" src="/assets/imgs/template/icons/play.svg" alt="transp" /></div>
                                        <div className="info-play">
                                            <h4 className="color-white mb-15 wow animate__animated animate__fadeIn">We have 25 years experience in this passion</h4>
                                            <p className="font-sm color-white wow animate__animated animate__fadeIn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <ul className="list-how-works">
                                    <li>
                                        <div className="image-how"><span className="img wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/order.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2 wow animate__animated animate__fadeIn">Customer places order</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Inspection and quality check of goods</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2 wow animate__animated animate__fadeIn">Payment successful</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Payoneer, Paypal, or Visa master card</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2 wow animate__animated animate__fadeIn">Warehouse receives order</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Check the accuracy of the goods.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/picked.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2 wow animate__animated animate__fadeIn">Item picked, packed &amp; shipped</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Ship the goods to a local carrier</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-brand-2 wow animate__animated animate__fadeIn">Delivered &amp; Measure success</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Update order status on the system</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="line-border" />
                <section className="section pb-5 pt-110">
                    <div className="container">
                        <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">What We Have Done</h2>
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8 mb-30">
                                <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">Check out some of the projects we've completed with our amazing partners</p>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up" href="#">
                                <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>View All Projects</Link></div>
                        </div>
                        <div className="mt-35">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-4 pb-50">
                                    <Project1Slider />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-90" />
                <div className="section bg-map d-block">
                    <div className="container">
                        <div className="box-newsletter">
                            <h3 className="color-brand-2 mb-20 wow animate__animated animate__fadeIn">Get in Touch</h3>
                            <div className="row">
                                <div className="col-lg-5 mb-30">
                                    <div className="form-newsletter wow animate__animated animate__fadeIn">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your email *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Weight" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Height" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder="Message / Note" rows={5} defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input className="btn btn-brand-1-big" type="submit" defaultValue="Submit Now" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-7 mb-30">
                                    <div className="d-flex box-newsletter-right">
                                        <div className="box-map-2 wow animate__animated animate__fadeIn">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.960389549842!2d-83.76408938441998!3d37.15364135542302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884352a00e70879f%3A0x1ad06ed33b7003c!2sIangar!5e0!3m2!1svi!2s!4v1678013229780!5m2!1svi!2s" height={242} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                        <ul className="list-info-footer">
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/address.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Address</h6>
                                                    <p className="font-sm color-grey-900">2 Peel Lane Greater, Cheetham Hill, Manchester M8 8RJ</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/email.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Email</h6>
                                                    <p className="font-sm color-grey-900">sales@goconnecthub.uk</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/phone.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Telephone</h6>
                                                    <p className="font-sm color-grey-900">+44 7404 307411</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
