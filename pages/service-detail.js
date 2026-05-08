export default function ServiceDetailRedirect() {
    return null;
}

export function getServerSideProps() {
    return {
        redirect: {
            destination: "/services/warehousing-storage",
            permanent: true,
        },
    };
}
