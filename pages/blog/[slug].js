import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/util/blogData";

export default function BlogPost({ post, morePosts }) {
    return (
        <>
            <Layout headTitle={post.title}>
                <section className="section">
                    <div className="container">
                        <div className="content-detail">
                            <div className="box-pageheader-1 box-pageheader-services text-start pb-30">
                                <span className="btn btn-tag wow animate__animated animate__fadeIn">{post.category}</span>
                                <h2 className="color-brand-2 mt-15 mb-25 wow animate__animated animate__fadeIn">{post.title}</h2>
                                <div className="d-flex align-items-center wow animate__animated animate__fadeIn">
                                    <span className="font-sm-bold color-brand-2 mr-30">{post.author}</span>
                                    <span className="font-xs color-grey-700">{post.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10">
                                <img className="w-100 wow animate__animated animate__fadeIn" src={post.heroImage} alt={post.title} />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section mt-50">
                    <div className="container">
                        <div className="content-detail">
                            <strong className="font-md-bold color-grey-900 mb-25 d-block wow animate__animated animate__fadeIn">{post.intro}</strong>
                            {post.sections.map((section) => (
                                <div key={section.heading}>
                                    <h3 className="color-brand-2 mt-30 mb-15 wow animate__animated animate__fadeIn">{section.heading}</h3>
                                    {section.paragraphs.map((paragraph) => (
                                        <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn" key={paragraph}>{paragraph}</p>
                                    ))}
                                    {section.bullets && (
                                        <ul className="list-ticks list-ticks-2 mt-10 mb-20">
                                            {section.bullets.map((bullet) => (
                                                <li className="font-md color-grey-900 wow animate__animated animate__fadeIn" key={bullet}>
                                                    <svg className="icon-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                            <div className="box-note-bordered mt-40 p-30 wow animate__animated animate__fadeIn" style={{ background: "#f2f9fa", borderRadius: 12 }}>
                                <p className="font-md color-grey-900 mb-20">{post.cta}</p>
                                <Link className="btn btn-brand-1-big mr-15" href="/request-a-quote">Request a Quote</Link>
                                <Link className="btn btn-link-medium" href="/services">
                                    Explore our services
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-100" />
                <div className="line-border" />
                <section className="section mt-80 mb-70">
                    <div className="container">
                        <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">More From Our Blog</h2>
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">More insights on fulfilment, warehousing, and ecommerce operations.</p>
                        <div className="row mt-50">
                            {morePosts.map((item) => (
                                <div className="col-lg-6 wow animate__animated animate__fadeIn" key={item.slug}>
                                    <div className="card-blog-grid hover-up">
                                        <div className="card-image">
                                            <Link href={`/blog/${item.slug}`}>
                                                <img src={item.image} alt={item.title} />
                                            </Link>
                                            <span className="btn btn-border-brand-1 mr-15">{item.category}</span>
                                        </div>
                                        <div className="card-info">
                                            <Link href={`/blog/${item.slug}`}>
                                                <h5 className="color-brand-2">{item.title}</h5>
                                            </Link>
                                            <p className="font-sm color-grey-500 mt-20">{item.excerpt}</p>
                                            <div className="line-border" />
                                            <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                                <Link className="btn btn-link font-sm color-brand-2" href={`/blog/${item.slug}`}>
                                                    View Details
                                                    <span>
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                                <span className="date-post font-sm color-grey-700">{item.date}</span>
                                            </div>
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
        paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    };
}

export function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug);
    const morePosts = blogPosts.filter((item) => item.slug !== params.slug);

    return {
        props: {
            post,
            morePosts,
        },
    };
}
