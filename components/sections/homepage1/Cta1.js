import Link from "next/link";

export default function Cta1() {
  return (
    <>
      <section className="section pt-70 pb-20 ribbon-section">
        <div className="container">
          <div className="ribbon-box">
            <div className="ribbon-copy">
              <span className="ribbon-kicker">Ready to move faster?</span>
              <h2>Launch a cleaner fulfilment workflow with our team</h2>
              <p>
                From first inventory intake to returns, we keep ecommerce
                operations organized while your order volume grows.
              </p>
            </div>
            <div className="ribbon-actions">
              <Link className="ribbon-btn ribbon-btn-primary" href="/request-a-quote">
                Get a quote
              </Link>
              <Link className="ribbon-btn ribbon-btn-secondary" href="/contact">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ribbon-section {
          background: #ffffff;
        }

        .ribbon-box {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 28px;
          align-items: center;
          border-radius: 8px;
          padding: 34px 38px;
          background:
            radial-gradient(
              circle at top right,
              rgba(55, 161, 165, 0.2),
              transparent 28%
            ),
            linear-gradient(135deg, #184f69 0%, #123f55 100%);
          box-shadow: 0 22px 58px rgba(24, 79, 105, 0.16);
        }

        .ribbon-box::after {
          content: "";
          position: absolute;
          right: -82px;
          top: -120px;
          width: 310px;
          height: 310px;
          border-radius: 50%;
          border: 1px solid rgba(255, 224, 138, 0.2);
        }

        .ribbon-copy,
        .ribbon-actions {
          position: relative;
          z-index: 1;
        }

        .ribbon-kicker {
          display: inline-flex;
          margin-bottom: 10px;
          color: #ffe08a;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          line-height: 1;
          text-transform: uppercase;
        }

        .ribbon-copy h2 {
          max-width: 780px;
          margin: 0;
          color: #ffffff;
          font-size: clamp(30px, 3.3vw, 48px);
          line-height: 1.08;
          letter-spacing: 0;
          font-weight: 800;
        }

        .ribbon-copy p {
          max-width: 720px;
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 16px;
          line-height: 1.6;
          font-weight: 600;
        }

        .ribbon-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: flex-end;
        }

        .ribbon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          border-radius: 4px;
          padding: 14px 20px;
          font-size: 14px;
          font-weight: 800;
          line-height: 1;
          text-transform: uppercase;
          transition:
            transform 180ms ease,
            background 180ms ease,
            color 180ms ease;
        }

        .ribbon-btn:hover {
          transform: translateY(-2px);
        }

        .ribbon-btn-primary {
          background: #ffe08a;
          color: #184f69;
        }

        .ribbon-btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.24);
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }

        .ribbon-btn-secondary:hover {
          background: #37a1a5;
          color: #ffffff;
        }

        @media (max-width: 991px) {
          .ribbon-box {
            grid-template-columns: 1fr;
          }

          .ribbon-actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 575px) {
          .ribbon-section {
            padding-top: 50px;
          }

          .ribbon-box {
            padding: 28px 20px;
          }

          .ribbon-actions {
            flex-direction: column;
          }

          .ribbon-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
