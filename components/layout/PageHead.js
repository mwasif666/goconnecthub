import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Go Connect Hub"}
                </title>
                <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            </Head>
        </>
    )
}

export default PageHead