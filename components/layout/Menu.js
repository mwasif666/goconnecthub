import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="main-menu">
                <li><Link href="/">Home</Link></li>
                <li className="has-children"><Link href="/services">Services</Link>
                    <ul className="sub-menu">
                        <li><Link href="/services">Warehousing &amp; Storage</Link></li>
                        <li><Link href="/services">Pick &amp; Pack Fulfilment</Link></li>
                        <li><Link href="/services">FBA &amp; FBM Fulfilment</Link></li>
                        <li><Link href="/services">Kitting &amp; Bundling</Link></li>
                        <li><Link href="/services">Repackaging &amp; Relabelling</Link></li>
                        <li><Link href="/services">Wholesale (B2B) Fulfilment</Link></li>
                        <li><Link href="/services">Cross Docking Service</Link></li>
                        <li><Link href="/services">Return Handling</Link></li>
                        <li><Link href="/services">Container Unloading</Link></li>
                    </ul>
                </li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/portal">Portal</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
