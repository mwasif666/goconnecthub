const testimonials = [
  {
    name: "Guy Hawkins",
    company: "Amazon Seller",
    image: "/assets/imgs/page/homepage1/author.png",
    quote:
      "Receiving, storage, and dispatch became much easier once the team took over our fulfilment workflow. Stock updates are clear and orders move out quickly.",
  },
  {
    name: "Eleanor Pena",
    company: "Shopify Brand",
    image: "/assets/imgs/page/homepage1/author2.png",
    quote:
      "Their pick, pack, and returns handling helped us keep up with campaign demand without building our own warehouse process.",
  },
  {
    name: "Cody Fisher",
    company: "TikTok Shop",
    image: "/assets/imgs/page/homepage1/author3.png",
    quote:
      "We needed a fulfilment partner that could handle sudden spikes. The process is organized, responsive, and reliable during busy sales days.",
  },
];

function StarRating() {
  return (
    <span className="stars" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

export default function Testimonial1() {
  return (
    <>
      <section className="section pt-90 pb-90 testimonials-section">
        <div className="testimonial-bg-panel" aria-hidden="true" />
        <div className="container">
          <div className="testimonial-header">
            <div>
              <span className="testimonial-kicker">Testimonials</span>
              <h2>What our customers are saying</h2>
              <p>
                Fulfilment teams, marketplace sellers, and growing ecommerce
                brands trust us to keep inventory moving accurately.
              </p>
            </div>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.company}</span>
                  </div>
                </div>

                <p className="testimonial-quote">{testimonial.quote}</p>

                <div className="testimonial-rating">
                  <div>
                    <StarRating />
                    <span>For fulfilment support</span>
                  </div>
                  <strong>Rate: 4.95 / 5</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="testimonial-controls" aria-label="Testimonial navigation">
            <button type="button" aria-label="Previous testimonial">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button type="button" aria-label="Next testimonial">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .testimonials-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 82% 18%,
              rgba(55, 161, 165, 0.28),
              transparent 28%
            ),
            radial-gradient(
              circle at 8% 88%,
              rgba(255, 224, 138, 0.13),
              transparent 26%
            ),
            linear-gradient(135deg, rgba(24, 79, 105, 0.98), rgba(18, 63, 85, 0.98)),
            url("/assets/imgs/page/homepage1/bg-testimonial.png") center/cover;
        }

        .testimonial-bg-panel {
          position: absolute;
          right: -170px;
          bottom: -230px;
          width: 520px;
          height: 520px;
          border: 1px solid rgba(255, 224, 138, 0.2);
          border-radius: 50%;
          background: rgba(55, 161, 165, 0.1);
        }

        .testimonials-section::after {
          content: "”";
          position: absolute;
          top: 56px;
          right: 42px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 120px;
          line-height: 1;
          font-weight: 800;
        }

        .testimonials-section :global(.container) {
          position: relative;
          z-index: 1;
        }

        .testimonial-header {
          max-width: 860px;
          margin-bottom: 50px;
        }

        .testimonial-kicker {
          display: inline-flex;
          margin-bottom: 16px;
          color: #ffe08a;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.12em;
          line-height: 1;
          text-transform: uppercase;
        }

        .testimonial-header h2 {
          max-width: 820px;
          margin: 0;
          color: #ffffff;
          font-size: clamp(42px, 5.2vw, 78px);
          line-height: 1;
          letter-spacing: 0;
          font-weight: 800;
        }

        .testimonial-header p {
          max-width: 700px;
          margin: 22px 0 0;
          color: rgba(255, 255, 255, 0.86);
          font-size: 18px;
          line-height: 1.6;
          font-weight: 600;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .testimonial-card {
          position: relative;
          min-height: 370px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(24, 79, 105, 0.08);
          border-radius: 8px;
          padding: 34px;
          background: #ffffff;
          box-shadow: 0 20px 54px rgba(2, 16, 22, 0.14);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .testimonial-author img {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          object-fit: cover;
        }

        .testimonial-author h3 {
          margin: 0 0 4px;
          color: #184f69;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 800;
        }

        .testimonial-author span {
          color: #6f8590;
          font-size: 15px;
          line-height: 1.2;
        }

        .testimonial-quote {
          margin: 0;
          color: #2b3941;
          font-size: 17px;
          line-height: 1.65;
        }

        .testimonial-rating {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 16px;
          margin-top: 30px;
          border-radius: 4px;
          padding: 18px 20px;
          background: #184f69;
        }

        .testimonial-rating span {
          display: block;
          margin-top: 4px;
          color: #ffffff;
          font-size: 15px;
          line-height: 1.3;
        }

        :global(.stars) {
          color: #ffe08a;
          font-size: 18px;
          line-height: 1;
          letter-spacing: 1px;
        }

        .testimonial-rating strong {
          color: #ffffff;
          font-size: 13px;
          line-height: 1.3;
          white-space: nowrap;
        }

        .testimonial-controls {
          display: flex;
          gap: 14px;
          margin-top: 42px;
        }

        .testimonial-controls button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border: 0;
          border-radius: 50%;
          background: #ffffff;
          color: #184f69;
          cursor: pointer;
          transition:
            transform 180ms ease,
            background 180ms ease,
            color 180ms ease;
        }

        .testimonial-controls button:hover {
          transform: translateY(-3px);
          background: #37a1a5;
          color: #ffffff;
        }

        .testimonial-controls svg {
          width: 22px;
          height: 22px;
        }

        @media (max-width: 1199px) {
          .testimonial-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .testimonial-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 991px) {
          .testimonial-bg-panel {
            right: -240px;
            bottom: -260px;
          }
        }

        @media (max-width: 575px) {
          .testimonials-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .testimonial-bg-panel {
            width: 360px;
            height: 360px;
            opacity: 0.5;
          }

          .testimonials-section::after {
            top: 28px;
            right: 20px;
            font-size: 76px;
          }

          .testimonial-header {
            margin-bottom: 30px;
          }

          .testimonial-header h2 {
            font-size: 40px;
          }

          .testimonial-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-card,
          .testimonial-card:last-child {
            grid-column: auto;
          }

          .testimonial-card {
            min-height: 0;
            padding: 24px 20px;
          }

          .testimonial-rating {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
