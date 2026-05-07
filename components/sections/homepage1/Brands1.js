import Brand1Slider from "@/components/slider/Brand1Slider";

export default function Brands1() {
    return (
        <>
            <div className="section bg-2 pt-65 pb-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto mb-30 text-center wow animate__animated animate__fadeIn">
                            <p className="font-2xl-bold color-brand-2 mb-15">Seamless integrations with leading commerce and shipping channels</p>
                            <p className="font-md color-grey-700 mb-0">Connect your fulfillment workflow with the marketplaces, storefronts, and ecommerce tools your business already uses every day.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mb-30">
                            <Brand1Slider />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
