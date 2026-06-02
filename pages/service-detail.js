import ServiceDetail from "./services/[slug]";
import { getServiceBySlug, services } from "@/util/servicesData";

export default ServiceDetail;

export function getStaticProps() {
    const slug = "warehousing-storage";

    return {
        props: {
            service: getServiceBySlug(slug),
            relatedServices: services
                .filter((item) => item.slug !== slug)
                .slice(0, 3),
        },
    };
}
