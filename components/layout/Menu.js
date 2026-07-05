import Link from "next/link"
import { services } from "@/util/servicesData"

export default function Menu() {
    return (
        <>
            <ul className="main-menu">
                <li><Link href="/">Home</Link></li>
                <li className="has-children"><Link href="/services">Services</Link>
                    <ul className="sub-menu">
                        {services.map((service) => (
                            <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/our-team">Our Team</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/faqs">FAQs</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
