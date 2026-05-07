export default function Brand1Slider() {
    const integrations = [
        {
            name: "Shopify",
            logo: "/shopify-color-svgrepo-com.svg",
            className: "logo-shopify",
        },
        {
            name: "WooCommerce",
            logo: "/woocommerce-svgrepo-com.svg",
            className: "logo-woocommerce",
        },
        {
            name: "TikTok",
            logo: "/tiktok-icon-white-1-logo-svgrepo-com.svg",
            className: "logo-tiktok",
        },
        {
            name: "eBay",
            logo: "/ebay-svgrepo-com.svg",
            className: "logo-ebay",
        },
        {
            name: "Amazon",
            logo: "/amazon-color-svgrepo-com.svg",
            className: "logo-amazon",
        },
    ]
    const marqueeItems = [...integrations, ...integrations, ...integrations]

    return (
        <>
            <div className="integration-marquee wow animate__animated animate__fadeIn">
                <div className="integration-track">
                    {marqueeItems.map((integration, index) => (
                        <div className="integration-logo" key={`${integration.name}-${index}`}>
                            <img className={`integration-logo-image ${integration.className}`} src={integration.logo} alt={integration.name} />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .integration-marquee {
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    padding: 18px 0;
                    mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
                    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
                }

                .integration-track {
                    display: flex;
                    align-items: center;
                    gap: 72px;
                    width: max-content;
                    animation: marquee-scroll 24s linear infinite;
                }

                .integration-logo {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex: 0 0 auto;
                    min-width: 180px;
                }

                .integration-logo-image {
                    height: 72px;
                    width: auto;
                    max-width: 240px;
                    object-fit: contain;
                    display: block;
                }

                .logo-amazon {
                    height: 84px;
                    max-width: 260px;
                }

                .logo-woocommerce {
                    height: 66px;
                    max-width: 250px;
                }

                .logo-tiktok,
                .logo-ebay,
                .logo-shopify {
                    height: 78px;
                }

                @keyframes marquee-scroll {
                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(-50%);
                    }
                }

                @media (max-width: 991px) {
                    .integration-track {
                        gap: 46px;
                        animation-duration: 22s;
                    }

                    .integration-logo {
                        min-width: 140px;
                    }

                    .integration-logo-image {
                        height: 56px;
                        max-width: 190px;
                    }

                    .logo-amazon {
                        height: 68px;
                        max-width: 210px;
                    }

                    .logo-woocommerce {
                        height: 52px;
                        max-width: 200px;
                    }

                    .logo-tiktok,
                    .logo-ebay,
                    .logo-shopify {
                        height: 60px;
                    }
                }

                @media (max-width: 575px) {
                    .integration-track {
                        gap: 30px;
                        animation-duration: 18s;
                    }

                    .integration-logo {
                        min-width: 110px;
                    }

                    .integration-logo-image {
                        height: 42px;
                        max-width: 140px;
                    }

                    .logo-amazon {
                        height: 50px;
                        max-width: 150px;
                    }

                    .logo-woocommerce {
                        height: 38px;
                        max-width: 145px;
                    }

                    .logo-tiktok,
                    .logo-ebay,
                    .logo-shopify {
                        height: 44px;
                    }
                }
            `}</style>
        </>
    )
}
