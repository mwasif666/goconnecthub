import Layout from "@/components/layout/Layout";
import Brand1Slider from "@/components/slider/Brand1Slider";
import Link from "next/link";
import { blogPosts } from "@/util/blogData";
import { companyInfo } from "@/util/companyInfo";

export default function Blog() {
    return (
        <>
            <Layout headTitle="Latest News & Blog">
                <section className="section bg-2 position-relative">
                    <div className="container box-hero-blog position-relative">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <h6 className="color-brand-2 mb-15 wow animate__animated animate__fadeIn">Don’t miss the trending</h6>
                                <h2 className="color-brand-2 mb-25 wow animate__animated animate__fadeIn">Latest News &amp; Blog</h2>
                                <p className="font-md-color-grey-900 wow animate__animated animate__fadeIn">Practical insights from the Go Connect Hub team on fulfilment, warehousing, Amazon prep, and ecommerce operations.</p>
                            </div>
                        </div>
                        <div className="quote-blog shape-1" />
                    </div>
                    <div className="bg-right-blog" />
                </section>
                <section className="section mt-85">
                    <div className="container">
                        <div className="row">
                            {blogPosts.map((post) => (
                                <div className="col-lg-4 wow animate__animated animate__fadeIn" key={post.slug}>
                                    <div className="card-blog-grid hover-up">
                                        <div className="card-image">
                                            <Link href={`/blog/${post.slug}`}>
                                                <img src={post.image} alt={post.title} />
                                            </Link>
                                            <span className="btn btn-border-brand-1 mr-15">{post.category}</span>
                                        </div>
                                        <div className="card-info">
                                            <Link href={`/blog/${post.slug}`}>
                                                <h5 className="color-brand-2">{post.title}</h5>
                                            </Link>
                                            <p className="font-sm color-grey-500 mt-20">{post.excerpt}</p>
                                            <div className="line-border" />
                                            <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                                <Link className="btn btn-link font-sm color-brand-2" href={`/blog/${post.slug}`}>
                                                    View Details
                                                    <span>
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                                <span className="date-post font-sm color-grey-700">{post.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="mt-70" />
                <div className="section bg-2 pt-65 pb-35">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 mb-30 text-center text-lg-start wow animate__animated animate__fadeIn">
                                <p className="font-2xl-bold color-brand-2">
                                    We are<span className="color-brand-1"> trusted</span> by major global brands
                                </p>
                            </div>
                            <div className="col-lg-9 mb-30">
                                <div className="box-swiper">
                                    <div className="swiper-container swiper-group-6 pb-0">
                                        <Brand1Slider />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-100" />
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
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input className="form-control" type="tel" placeholder="Phone number" />
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
                                            <iframe title="Go Connect Hub location" src="https://www.google.com/maps?q=2+Peel+Lane,+Cheetham+Hill,+Manchester+M8+8RJ&hl=en&output=embed" height={242} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                        <ul className="list-info-footer">
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage">
                                                    <span className="icon-brand-1">
                                                        <img src="/assets/imgs/page/homepage2/address.svg" alt="transp" />
                                                    </span>
                                                </div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Address</h6>
                                                    <p className="font-sm color-grey-900">{companyInfo.address}</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage">
                                                    <span className="icon-brand-1">
                                                        <img src="/assets/imgs/page/homepage2/email.svg" alt="transp" />
                                                    </span>
                                                </div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Email</h6>
                                                    <p className="font-sm color-grey-900">{companyInfo.email}</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage">
                                                    <span className="icon-brand-1">
                                                        <img src="/assets/imgs/page/homepage2/phone.svg" alt="transp" />
                                                    </span>
                                                </div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Telephone</h6>
                                                    <p className="font-sm color-grey-900">{companyInfo.phoneDisplay}</p>
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
    );
}
