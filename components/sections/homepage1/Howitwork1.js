import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const processSteps = [
  {
    number: "01",
    title: "Ship to Us",
    text: "Send inventory to our warehouse",
    detail:
      "Container unloading, intake, and initial processing handled by our expert team",
    image: "/assets/imgs/page/homepage1/cargo-ship.png",
    alt: "Cargo ship",
  },
  {
    number: "02",
    title: "We Receive",
    text: "Inspection and stock updates",
    detail: "Quality checks, inventory logging, and real-time system updates",
    image: "/assets/imgs/page/homepage1/warehouse.png",
    alt: "Warehouse receiving",
  },
  {
    number: "03",
    title: "We Fulfil",
    text: "Pick, pack, and dispatch orders",
    detail: "Same-day processing with quality packaging and carrier integration",
    image: "/assets/imgs/page/homepage1/delivery.png",
    alt: "Delivery truck",
  },
  {
    number: "04",
    title: "Returns",
    text: "Efficient reverse logistics",
    detail: "Complete returns management with inspection and restocking",
    image: "/assets/imgs/page/workprocess/cardboard.png",
    alt: "Return box",
  },
];

export default function Howitwork1() {
  const sectionRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !fillRef.current) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(fillRef.current, {
        clipPath: "inset(0px 0px 0px 0px round 0px)",
      });
      return undefined;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const getTitleClip = ({ isMobile = false } = {}) => {
        const shell = sectionRef.current.querySelector(".process-shell");
        const { width, height } = shell.getBoundingClientRect();
        const left = isMobile ? 16 : 38;
        const top = isMobile ? 68 : 78;
        const titleWidth = Math.min(width - left * 2, isMobile ? 310 : 760);
        const titleHeight = isMobile ? 170 : 235;
        const right = Math.max(width - left - titleWidth, 0);
        const bottom = Math.max(height - top - titleHeight, 0);
        const radius = isMobile ? 22 : 28;

        return `inset(${top}px ${right}px ${bottom}px ${left}px round ${radius}px)`;
      };

      mm.add("(min-width: 992px)", () => {
        const steps = gsap.utils.toArray(".process-step");
        const connectors = gsap.utils.toArray(".step-connector");

        gsap.set(fillRef.current, {
          clipPath: getTitleClip(),
        });
        gsap.set(steps, {
          autoAlpha: 0,
          y: 72,
          scale: 0.96,
        });
        gsap.set(connectors, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2600",
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline.to(
          fillRef.current,
          {
            clipPath: "inset(0px 0px 0px 0px round 0px)",
            duration: 4.1,
            ease: "power1.inOut",
          },
          0
        );

        steps.forEach((step, index) => {
          const cardStart = 0.35 + index * 0.82;

          timeline.to(
            step,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.72,
              ease: "power2.out",
            },
            cardStart
          );

          if (connectors[index]) {
            timeline.to(
              connectors[index],
              {
                scaleX: 1,
                duration: 0.45,
                ease: "power1.out",
              },
              cardStart + 0.48
            );
          }
        });

        return undefined;
      });

      mm.add("(max-width: 991px)", () => {
        const steps = gsap.utils.toArray(".process-step");

        gsap.set(fillRef.current, {
          clipPath: getTitleClip({ isMobile: true }),
        });

        gsap.to(fillRef.current, {
          clipPath: "inset(0px 0px 0px 0px round 0px)",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 45%",
            scrub: 1.2,
          },
        });

        gsap.from(steps, {
          autoAlpha: 0,
          y: 42,
          stagger: 0.16,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });

        return undefined;
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="how-it-works-process"
        ref={sectionRef}
        className="section pt-80 pb-80 process-section"
      >
        <div className="container">
          <div className="process-shell">
            <div className="process-bg-fill" ref={fillRef} aria-hidden="true" />
            <div className="process-header">
              <span className="process-kicker">How It Works</span>
              <h2>Four simple steps</h2>
            </div>

            <div className="process-flow" aria-label="Fulfillment process">
              {processSteps.map((step, index) => (
                <div className="process-step" key={step.number}>
                  <div className="step-marker">
                    <span>{step.number}</span>
                  </div>
                  <div className="step-card">
                    <div className="step-callout">{step.detail}</div>
                    <div className="step-content">
                      <span className="step-watermark">{step.number}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                      <img src={step.image} alt={step.alt} />
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <span className="step-connector" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .process-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #f2f8f9 0%, #ffffff 100%);
        }

        .process-section :global(.container) {
          position: relative;
          z-index: 1;
        }

        .process-shell {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 34px;
          padding: 48px 38px 44px;
          background: rgba(18, 63, 85, 0.18);
          box-shadow: 0 24px 70px rgba(24, 79, 105, 0.16);
        }

        .process-bg-fill {
          position: absolute;
          inset: 0;
          z-index: 0;
          clip-path: inset(
            78px calc(100% - 760px) calc(100% - 235px) 38px round 28px
          );
          background:
            radial-gradient(
              circle at top right,
              rgba(55, 161, 165, 0.28),
              transparent 34%
            ),
            linear-gradient(135deg, #184f69 0%, #123f55 100%);
          will-change: clip-path;
        }

        .process-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          background: radial-gradient(
            circle at top right,
            rgba(55, 161, 165, 0.08),
            transparent 34%
          );
          pointer-events: none;
        }

        .process-header,
        .process-flow {
          position: relative;
          z-index: 1;
        }

        .process-header {
          max-width: 1000px;
          margin-bottom: 50px;
        }

        .process-kicker {
          display: inline-flex;
          margin-bottom: 16px;
          color: #ffe08a;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.12em;
          line-height: 1;
          text-transform: uppercase;
        }

        .process-header h2 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(42px, 6vw, 82px);
          line-height: 0.98;
          letter-spacing: 0;
          font-weight: 800;
        }

        .process-flow {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }

        .process-step {
          position: relative;
          min-width: 0;
          padding-top: 34px;
          will-change: opacity, transform;
        }

        .step-marker {
          position: absolute;
          top: 0;
          left: 22px;
          z-index: 4;
          display: grid;
          width: 54px;
          height: 54px;
          place-items: center;
          border: 2px solid #ffe08a;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 14px 26px rgba(1, 9, 20, 0.18);
        }

        .step-marker span {
          color: #184f69;
          font-size: 15px;
          font-weight: 800;
        }

        .step-card {
          position: relative;
          height: 100%;
          min-height: 330px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          background: rgba(8, 29, 40, 0.58);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .step-callout {
          position: relative;
          margin: -1px 18px 0;
          min-height: 92px;
          padding: 20px 18px;
          border: 2px solid #ffe08a;
          background: #123f55;
          color: #ffffff;
          font-size: 14px;
          line-height: 1.5;
          text-align: center;
        }

        .step-callout::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -13px;
          width: 22px;
          height: 22px;
          border-right: 2px solid #ffe08a;
          border-bottom: 2px solid #ffe08a;
          background: #123f55;
          transform: translateX(-50%) rotate(45deg);
        }

        .step-content {
          position: relative;
          display: flex;
          min-height: 238px;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          padding: 28px 28px 24px;
        }

        .step-content h3 {
          position: relative;
          z-index: 2;
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 30px;
          line-height: 1.12;
          letter-spacing: 0;
          font-weight: 800;
        }

        .step-content p {
          position: relative;
          z-index: 2;
          margin: 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 16px;
          line-height: 1.45;
        }

        .step-content img {
          position: relative;
          z-index: 2;
          align-self: flex-end;
          width: 96px;
          height: 96px;
          object-fit: contain;
          opacity: 0.94;
        }

        .step-content::after {
          content: "";
          display: block;
          width: 64px;
          height: 3px;
          background: #ffe08a;
        }

        .step-watermark {
          position: absolute;
          right: 18px;
          top: 6px;
          z-index: 1;
          color: rgba(255, 255, 255, 0.18);
          font-size: 92px;
          line-height: 1;
          font-weight: 800;
        }

        .step-connector {
          position: absolute;
          top: 56%;
          left: calc(100% - 1px);
          z-index: 5;
          width: 26px;
          height: 2px;
          background: #37a1a5;
          transform-origin: left center;
        }

        .step-connector::after {
          content: "";
          position: absolute;
          right: -1px;
          top: 50%;
          width: 10px;
          height: 10px;
          border-top: 2px solid #37a1a5;
          border-right: 2px solid #37a1a5;
          transform: translateY(-50%) rotate(45deg);
        }

        @media (max-width: 1199px) {
          .process-shell {
            padding: 42px 26px 34px;
          }

          .process-flow {
            gap: 16px;
          }

          .step-card {
            min-height: 340px;
          }

          .step-content {
            padding: 26px 22px 22px;
          }

          .step-content h3 {
            font-size: 25px;
          }

          .step-callout {
            margin-right: 12px;
            margin-left: 12px;
            padding-right: 14px;
            padding-left: 14px;
            font-size: 13px;
          }

          .step-connector {
            width: 18px;
          }
        }

        @media (max-width: 991px) {
          .process-header {
            margin-bottom: 34px;
          }

          .process-flow {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .process-step {
            padding-top: 30px;
            padding-left: 36px;
          }

          .step-marker {
            left: 0;
            width: 50px;
            height: 50px;
          }

          .step-card {
            min-height: 0;
          }

          .step-content {
            min-height: 190px;
          }

          .step-content img {
            width: 86px;
            height: 86px;
          }

          .step-connector {
            top: auto;
            bottom: -18px;
            left: 24px;
            width: 2px;
            height: 18px;
          }

          .step-connector::after {
            right: auto;
            top: auto;
            bottom: -1px;
            left: 50%;
            transform: translateX(-50%) rotate(135deg);
          }
        }

        @media (max-width: 575px) {
          .process-section {
            padding-top: 56px;
            padding-bottom: 56px;
          }

          .process-shell {
            border-radius: 22px;
            padding: 32px 16px 24px;
          }

          .process-bg-fill {
            clip-path: inset(
              68px calc(100% - 310px) calc(100% - 170px) 16px round 22px
            );
          }

          .process-header h2 {
            font-size: 42px;
          }

          .process-step {
            padding-left: 0;
          }

          .step-marker {
            left: 18px;
          }

          .step-callout {
            min-height: auto;
            margin: 0 10px;
            padding: 16px 14px;
            font-size: 13px;
          }

          .step-content {
            padding: 26px 18px 20px;
          }

          .step-content h3 {
            font-size: 25px;
          }

          .step-content p {
            font-size: 15px;
          }

          .step-watermark {
            font-size: 76px;
          }

          .step-connector {
            left: 42px;
          }
        }
      `}</style>
    </>
  );
}
