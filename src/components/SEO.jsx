import { Helmet } from "react-helmet-async";
import { seoConfig } from "../data/seoConfig";

const SEO = ({ title, description, image, url }) => {
    const meta = {
        title: title ? `${title} | AR Legal Group` : seoConfig.title,
        description: description || seoConfig.description,
        image: image || seoConfig.image,
        url: url || seoConfig.url,
    };

    return (
        <Helmet>
            {/* Título y descripción */}
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={seoConfig.keywords.join(", ")} />

            {/* Open Graph (Facebook, LinkedIn, etc.) */}
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.image} />
            <meta property="og:url" content={meta.url} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
        </Helmet>
    );
};

export default SEO;
