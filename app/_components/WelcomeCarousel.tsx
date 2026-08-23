"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/media/carousel-community-enhanced.png",
    alt: "The flags of Angola and Nigeria standing side by side",
    eyebrow: "Welcome to NICAA",
    title: "Peace, unity and progress.",
    objectPosition: "center center",
  },
  {
    image: "/media/carousel-foundation-enhanced.png",
    alt: "NICAA members at the community building foundation ceremony",
    eyebrow: "Building our future",
    title: "A permanent home begins.",
    objectPosition: "center 20%",
  },
  {
    image: "/media/carousel-senate-enhanced.png",
    alt: "A Nigerian community reception in Angola",
    eyebrow: "Community and connection",
    title: "Welcoming Nigeria in Angola.",
    objectPosition: "center 18%",
  },
  {
    image: "/media/carousel-kilamba-enhanced.png",
    alt: "NICAA representatives meeting local partners in Angola",
    eyebrow: "Working together",
    title: "Strong local partnerships.",
    objectPosition: "center 22%",
  },
];

export function WelcomeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="nicaa-home__hero" aria-label="Welcome to NICAA">
      <div className="site-shell nicaa-home__hero-layout">
        <div className="nicaa-home__hero-copy">
          <p className="nicaa-home__eyebrow">Nigerian Community in Angola Association</p>
          <p className="nicaa-home__location">Luanda, Angola</p>
          <h1 key={slides[activeIndex].image}>{slides[activeIndex].title}</h1>
          <p className="nicaa-home__intro">
            NICAA brings our community together to support members, represent shared interests and build respectful ties with our Angolan neighbours.
          </p>
          <div className="nicaa-home__hero-actions">
            <Link className="nicaa-home__button nicaa-home__button--gold" href="/unions">
              Find your town union <span aria-hidden="true">→</span>
            </Link>
            <Link className="nicaa-home__button nicaa-home__button--outline" href="/about">
              Learn about NICAA
            </Link>
          </div>
        </div>

        <div
          className="nicaa-welcome-carousel"
          aria-label="Welcome to NICAA photo gallery"
          aria-roledescription="carousel"
          role="region"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="nicaa-welcome-carousel__slides">
            {slides.map((slide, index) => (
              <figure
                className={`nicaa-welcome-carousel__slide${index === activeIndex ? " nicaa-welcome-carousel__slide--active" : ""}`}
                aria-hidden={index !== activeIndex}
                key={slide.image}
              >
                <Image
                  src={slide.image}
                  unoptimized
                  alt={index === activeIndex ? slide.alt : ""}
                  width={1500}
                  height={1000}
                  sizes="100vw"
                  priority={index === 0}
                  style={{ objectPosition: slide.objectPosition }}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
