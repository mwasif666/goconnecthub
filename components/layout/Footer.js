import Link from "next/link";
import { services } from "@/util/servicesData";

export default function Footer1() {
    return (
        <>
            <footer className="footer">
                <div className="footer-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 width-23 mb-30">
                                <div className="mb-20"><img src="/logo.png" alt="Go Connect Hub" style={{ height: "45px", width: "auto" }} /></div>
                                <p className="font-xs mb-20 color-white">Go Connect Hub helps ecommerce sellers manage storage, prep, pick and pack, dispatch, returns, and value-added fulfilment support with organized warehouse workflows.</p>
                                <h6 className="color-brand-1">Follow Us</h6>
                                <div className="mt-15"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /><Link className="icon-socials icon-youtube" href="#" /><Link className="icon-socials icon-skype" href="#" /></div>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-1">Company</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/about">About Go Connect Hub</Link></li>
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                    <li><Link href="/request-a-quote">Request a Quote</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-1">Who We Help</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/services">Amazon Sellers</Link></li>
                                    <li><Link href="/services">Shopify Brands</Link></li>
                                    <li><Link href="/services">TikTok Shops</Link></li>
                                    <li><Link href="/services">Startups Scaling</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-1">Services</h5>
                                <ul className="menu-footer">
                                    {services.slice(0, 6).map((service) => (
                                        <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-lg-3 width-20 mb-30">
                                <h5 className="mb-10 color-brand-1">Gallery</h5>
                                <div className="galleries-footer">
                                    <ul className="list-imgs">
                                        {Array.from({ length: 9 }, (_, index) => (
                                            <li key={index}><img src={`/assets/imgs/page/homepage1/gal${index + 1}.png`} alt="Go Connect Hub fulfilment" /></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="container">
                        <div className="footer-bottom">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 text-center text-lg-start"><span className="color-grey-300 font-md">Go Connect Hub {new Date().getFullYear()}. All rights reserved.</span></div>
                                <div className="col-lg-6 col-md-12 text-center text-lg-end">
                                    <ul className="menu-bottom">
                                        <li><Link className="font-sm color-grey-300" href="/term-conditions">Privacy policy</Link></li>
                                        <li><Link className="font-sm color-grey-300" href="/term-conditions">Cookies</Link></li>
                                        <li><Link className="font-sm color-grey-300" href="/term-conditions">Terms of service</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
