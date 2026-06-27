import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero1Slider() {
    const [isOpen, setOpen] = useState(false)
    const slides = [
        {
            backgroundImage:
                "linear-gradient(90deg, rgba(24, 79, 105, 0.84) 0%, rgba(24, 79, 105, 0.58) 42%, rgba(24, 79, 105, 0.22) 100%), url(/assets/imgs/page/homepage1/banner-storage-unsplash.jpg)",
            backgroundPosition: "center center",
            eyebrow: "Smart Storage Solutions",
            titleLines: ["Free Storage With", "Market Competitive Rates"],
            description:
                "We are providing free storage support with market competitive rates so your business can move inventory with more confidence and less pressure on cost.",
        },
        {
            backgroundImage:
                "linear-gradient(90deg, rgba(24, 79, 105, 0.8) 0%, rgba(24, 79, 105, 0.52) 42%, rgba(24, 79, 105, 0.2) 100%), url(/assets/imgs/page/homepage1/banner-containers-unsplash.jpg)",
            backgroundPosition: "center center",
            eyebrow: "Affordable Shipping Options",
            titleLines: ["Cheapest Shipping Rates", "For Everyday Deliveries"],
            description:
                "Also offering cheapest shipping rates for practical, dependable delivery planning across your regular orders and growing shipment volumes.",
        },
        {
            backgroundImage:
                "linear-gradient(90deg, rgba(24, 79, 105, 0.82) 0%, rgba(24, 79, 105, 0.56) 42%, rgba(24, 79, 105, 0.22) 100%), url(/assets/imgs/page/homepage1/banner-truck-unsplash.jpg)",
            backgroundPosition: "center center",
            eyebrow: "Our Value Positioning",
            titleLines: ["Storage, Shipping, And", "Cost-Effective Logistics"],
            description:
                "A stronger logistics offer for your customers with free storage, competitive market pricing, and reliable shipping rates combined in one service.",
        },
    ]

    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                className="swiper-wrapper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.titleLines.join(" ")}>
                        <div className="banner-1" style={{ backgroundImage: slide.backgroundImage, backgroundPosition: slide.backgroundPosition }}>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <p className="font-md color-white mb-15 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">{slide.eyebrow}</p>
                                        <h1 className="color-white mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                                            {slide.titleLines[0]}
                                            <br className="d-none d-lg-block" />
                                            {slide.titleLines[1]}
                                        </h1>
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <p className="font-md color-white mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">{slide.description}</p>
                                            </div>
                                        </div>
                                        <div className="box-button mt-30">
                                            <Link className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeInUp" href="/request-a-quote">Get a Quote</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
            <div className="swiper-pagination swiper-pagination-banner" />
        </>
    )
}
