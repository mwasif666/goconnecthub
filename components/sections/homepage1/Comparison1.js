const audiences = [
  {
    title: "Amazon Sellers",
    description:
      "FBA and FBM sellers who need reliable prep, storage, dispatch, and return handling without adding warehouse overhead.",
    stat: "FBA / FBM",
    icon: "amazon",
  },
  {
    title: "Shopify Brands",
    description:
      "Growing DTC stores that need fast fulfilment, clean inventory control, and dependable packing for repeat customers.",
    stat: "DTC",
    icon: "shopify",
  },
  {
    title: "TikTok Shops",
    description:
      "Social commerce teams managing sudden order spikes, campaign launches, and high-volume daily dispatches.",
    stat: "Social",
    icon: "tiktok",
  },
  {
    title: "Startups Scaling",
    description:
      "Early-stage businesses moving from manual shipping to a structured fulfilment operation built for growth.",
    stat: "Scale",
    icon: "startup",
  },
];

function AudienceIcon({ type }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  switch (type) {
    case "amazon":
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16.5c1.3.9 3 1.5 5.2 1.5 2.4 0 4.2-.7 5.8-2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 16h2.8l-.9 2.6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 13V9.5C8 7.4 9.6 6 12 6s4 1.4 4 3.5V13" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
        </svg>
      );
    case "shopify":
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 9.5h11l-1 10h-9l-1-10Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.5V8a3 3 0 0 1 6 0v1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 13.5c.8.6 2.4 1 4 .2" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 4v10.5a4 4 0 1 1-4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 6.5c1.1 2.1 2.8 3.3 5 3.5" />
        </svg>
      );
    case "startup":
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c3.3 2.2 5 5.1 5 8.6L12 21l-5-9.4C7 8.1 8.7 5.2 12 3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5h.01" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 15.5 5 19M15.5 15.5 19 19" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Comparison1() {
  return (
    <>
      <section className="section pt-90 pb-90 who-section">
        <div className="container">
          <div className="who-shell">
            <div className="who-intro">
              <div className="who-media wow animate__animated animate__fadeIn">
                <img
                  src="/assets/imgs/page/homepage1/banner-storage-unsplash.jpg"
                  alt="Warehouse storage shelves"
                />
              </div>
              <div className="who-intro-content">
                <span className="who-kicker wow animate__animated animate__fadeIn">
                  Who It&apos;s For
                </span>
                <h2 className="who-title wow animate__animated animate__fadeIn">
                  Built for sellers, brands, and scaling shops
                </h2>
                <div className="who-summary wow animate__animated animate__fadeIn">
                  <p className="who-copy">
                    Whether you sell through marketplaces, your own store, or
                    social commerce, our fulfilment support keeps operations
                    organized while order volume increases.
                  </p>
                  <div className="who-tags" aria-label="Supported channels">
                    <span>Amazon</span>
                    <span>Shopify</span>
                    <span>TikTok</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="who-grid">
              {audiences.map((audience, index) => (
                <article
                  className="who-card wow animate__animated animate__fadeInUp"
                  data-wow-delay={`${index * 0.08}s`}
                  key={audience.title}
                >
                  <div className="who-card-top">
                    <span className="who-icon">
                      <AudienceIcon type={audience.icon} />
                    </span>
                    <div className="who-card-meta">
                      <span className="who-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="who-stat">{audience.stat}</span>
                    </div>
                  </div>
                  <div className="who-card-body">
                    <h3>{audience.title}</h3>
                    <p>{audience.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .who-section {
          background: #ffffff;
        }

        .who-shell {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(24, 79, 105, 0.1);
          border-radius: 28px;
          padding: 34px;
          background: #ffffff;
          box-shadow: 0 22px 60px rgba(24, 79, 105, 0.09);
        }

        .who-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          gap: 42px;
          align-items: center;
          margin-bottom: 34px;
        }

        .who-media {
          position: relative;
          overflow: hidden;
          min-height: 400px;
          border-radius: 8px;
          background: #f2f8f9;
        }

        .who-media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(24, 79, 105, 0.08) 0%,
            rgba(24, 79, 105, 0.28) 100%
          );
          pointer-events: none;
        }

        .who-media img {
          width: 100%;
          height: 100%;
          min-height: 400px;
          display: block;
          object-fit: cover;
        }

        .who-intro-content {
          position: relative;
          padding-right: 24px;
        }

        .who-kicker {
          display: inline-flex;
          margin-bottom: 16px;
          color: #37a1a5;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.12em;
          line-height: 1;
          text-transform: uppercase;
        }

        .who-title {
          max-width: 780px;
          margin: 0;
          color: #184f69;
          font-size: clamp(26px, 3vw, 42px);
          line-height: 1;
          letter-spacing: 0;
          font-weight: 800;
        }

        .who-summary {
          position: relative;
          z-index: 1;
          max-width: 620px;
          margin-top: 24px;
          border-left: 3px solid #37a1a5;
          padding-left: 22px;
        }

        .who-copy {
          margin: 0;
          color: #2b3941;
          font-size: 16px;
          line-height: 1.65;
          font-weight: 600;
        }

        .who-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
        }

        .who-tags span {
          display: inline-flex;
          align-items: center;
          min-height: 30px;
          border: 1px solid rgba(55, 161, 165, 0.22);
          border-radius: 999px;
          padding: 7px 11px;
          background: rgba(55, 161, 165, 0.09);
          color: #184f69;
          font-size: 12px;
          font-weight: 800;
          line-height: 1;
        }

        .who-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .who-card {
          position: relative;
          min-height: 292px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          padding: 28px 26px 26px;
          background:
            linear-gradient(
              180deg,
              rgba(24, 79, 105, 0.98) 0%,
              rgba(8, 42, 56, 0.96) 100%
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 18px 42px rgba(2, 16, 22, 0.16);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .who-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 224, 138, 0.7);
          background:
            linear-gradient(
              180deg,
              rgba(14, 59, 78, 0.96) 0%,
              rgba(8, 34, 46, 0.88) 100%
            );
        }

        .who-card::after {
          content: "";
          position: absolute;
          right: -54px;
          bottom: -54px;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background: rgba(255, 224, 138, 0.09);
        }

        .who-card::before {
          content: "";
          position: absolute;
          right: 26px;
          bottom: 24px;
          left: 26px;
          height: 3px;
          background: linear-gradient(90deg, #ffe08a 0%, transparent 48%);
        }

        .who-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 34px;
        }

        .who-icon {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 62px;
          height: 62px;
          border-radius: 16px;
          background: #ffe08a;
          color: #184f69;
          box-shadow: 0 14px 28px rgba(255, 224, 138, 0.16);
        }

        .who-icon :global(svg) {
          width: 31px;
          height: 31px;
        }

        .who-card-meta {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .who-number {
          color: rgba(255, 255, 255, 0.18);
          font-size: 34px;
          font-weight: 800;
          line-height: 1;
        }

        .who-stat {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          border: 1px solid rgba(255, 224, 138, 0.5);
          border-radius: 999px;
          padding: 7px 12px;
          color: #ffe08a;
          font-size: 12px;
          font-weight: 800;
          line-height: 1;
          text-transform: uppercase;
        }

        .who-card-body {
          position: relative;
          z-index: 1;
        }

        .who-card h3 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 27px;
          line-height: 1.12;
          letter-spacing: 0;
          font-weight: 800;
        }

        .who-card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 15px;
          line-height: 1.62;
        }

        @media (max-width: 1199px) {
          .who-shell {
            padding: 28px;
          }

          .who-intro {
            gap: 28px;
          }

          .who-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .who-card {
            min-height: 290px;
          }
        }

        @media (max-width: 991px) {
          .who-intro {
            grid-template-columns: 1fr;
          }

          .who-media,
          .who-media img {
            min-height: 320px;
          }

          .who-intro-content {
            padding-right: 0;
          }
        }

        @media (max-width: 575px) {
          .who-section {
            padding-top: 56px;
            padding-bottom: 56px;
          }

          .who-shell {
            border-radius: 22px;
            padding: 18px;
          }

          .who-media,
          .who-media img {
            min-height: 250px;
          }

          .who-title {
            font-size: 40px;
          }

          .who-summary {
            border-left: 0;
            padding-left: 0;
          }

          .who-grid {
            grid-template-columns: 1fr;
          }

          .who-card {
            min-height: 250px;
            padding: 24px 20px;
          }

          .who-card h3 {
            font-size: 25px;
          }

          .who-card-top {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </>
  );
}
