import { useState } from "react";

export default function Accordion() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How quickly can I get a quote?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">You can receive a quote within minutes by filling out our online quote form. For more complex or large-scale shipments, our dedicated team will get back to you within 24 hours with a tailored solution that meets your needs.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What information do I need to provide for a quote?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">To generate an accurate quote, please provide the pickup and delivery locations, the type and nature of goods, total weight and dimensions of your shipment, and your preferred delivery timeline. The more detail you provide, the more precise your quote will be.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Do you handle international shipping?</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, we offer comprehensive international shipping services worldwide. Our experienced team handles all customs documentation, import/export regulations, and compliance requirements, ensuring your goods reach their destination smoothly and on time.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can I track my inventory in real-time?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Absolutely. Our advanced platform provides real-time inventory and shipment tracking around the clock. You can monitor stock levels, shipment status, and delivery updates 24/7 through our secure online portal, giving you full visibility at every stage.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                        <button className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What happens if there's an issue with my order?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Our 24/7 customer support team is always on hand to resolve any issues as quickly as possible. As soon as a problem is reported, we initiate an immediate investigation, keep you informed throughout the process, and work to find the best resolution for your situation.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(6)}>
                        <button className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How do I get started?</button>
                    </h5>
                    <div className={isActive.key == 6 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Getting started is simple. Just contact us through our website or fill out the quote form, and one of our team members will reach out to discuss your requirements, walk you through our services, and set up your account so you can start shipping with confidence right away.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
