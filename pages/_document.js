import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.png" type="image/png" />
                    <link rel="preconnect" href="https://fonts.bunny.net" />
                    <link href="https://fonts.bunny.net/css?family=epilogue:400,500,600,700" rel="stylesheet" />
                </Head>
                <body>
                    {/* Meta Pixel Code (noscript) */}
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            style={{ display: "none" }}
                            src="https://www.facebook.com/tr?id=912110935246491&ev=PageView&noscript=1"
                            alt=""
                        />
                    </noscript>
                    {/* End Meta Pixel Code */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
