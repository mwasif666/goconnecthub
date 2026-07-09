import Preloader from "@/components/elements/Preloader";
import GlobalFormHandler from "@/components/forms/GlobalFormHandler";
import Script from "next/script";
import { useEffect, useState } from "react";
import "@/public/assets/css/vendors/normalize.css";
import "@/public/assets/css/vendors/bootstrap.min.css";
import "@/public/assets/css/vendors/uicons-regular-rounded.css";
import "@/public/assets/css/plugins/swiper-bundle.min.css";
import "@/public/assets/css/plugins/magnific-popup.css";
import "@/public/assets/css/plugins/select2.min.css";
import "@/public/assets/css/plugins/slick.css";
import "@/public/assets/css/plugins/perfect-scrollbar.css";
import "@/public/assets/css/plugins/animate.min.css";
import "@/public/assets/css/style.css";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return (
        <>
            {/* Meta Pixel Code */}
            <Script id="meta-pixel" strategy="afterInteractive">
                {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '912110935246491');
fbq('track', 'PageView');
                `}
            </Script>
            {/* End Meta Pixel Code */}
            <style jsx global>{`
                html,
                body {
                    overflow-x: hidden;
                }

                .legal-page,
                .legal-content,
                .legal-content .container,
                .legal-layout {
                    overflow: visible !important;
                }

                .legal-toc {
                    position: sticky !important;
                    top: 110px !important;
                    align-self: start !important;
                    height: max-content;
                    max-height: calc(100vh - 130px);
                    overflow-y: auto;
                    z-index: 5;
                }

                @media (max-width: 991px) {
                    .legal-toc {
                        position: static !important;
                        top: auto !important;
                        max-height: none;
                        overflow: visible;
                    }
                }
            `}</style>
            <GlobalFormHandler />
            {!loading ? <Component {...pageProps} /> : <Preloader />}
        </>
    );
}

export default MyApp;
