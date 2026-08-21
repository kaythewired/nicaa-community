"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/media/community-hero.avif",
    alt: "The flags of Angola and Nigeria standing side by side",
    eyebrow: "Welcome to NICAA",
    title: "Peace, unity and progress.",
    objectPosition: "center center",
  },
  {
    image: "/media/news-foundation.avif",
    alt: "NICAA members at the community building foundation ceremony",
    eyebrow: "Building our future",
    title: "A permanent home begins.",
    objectPosition: "center 20%",
  },
  {
    image: "/media/news-senate.avif",
    alt: "A Nigerian community reception in Angola",
    eyebrow: "Community and connection",
    title: "Welcoming Nigeria in Angola.",
    objectPosition: "center 18%",
  },
  {
    image: "/media/news-kilamba.avif",
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

  const goToSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section
      className="nicaa-welcome-carousel"
      aria-label="Welcome to NICAA photo gallery"
      aria-roledescription="carousel"
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
              alt={index === activeIndex ? slide.alt : ""}
              width={1500}
              height={1000}
              sizes="(max-width: 900px) 100vw, 49vw"
              priority={index === 0}
              style={{ objectPosition: slide.objectPosition }}
            />
          </figure>
        ))}
      </div>

      <div className="nicaa-welcome-carousel__caption" aria-live="polite">
        <p>{slides[activeIndex].eyebrow}</p>
        <strong>{slides[activeIndex].title}</strong>
      </div>

      <div className="nicaa-welcome-carousel__controls">
        <button type="button" onClick={() => goToSlide(activeIndex - 1)} aria-label="Show previous welcome image">
          <span aria-hidden="true">←</span>
        </button>
        <div className="nicaa-welcome-carousel__dots" aria-label="Choose a welcome image">
          {slides.map((slide, index) => (
            <button
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`Show image ${index + 1}: ${slide.title}`}
              className={index === activeIndex ? "nicaa-welcome-carousel__dot--active" : ""}
              key={slide.image}
              onClick={() => goToSlide(index)}
              type="button"
            />
          ))}
        </div>
        <button type="button" onClick={() => goToSlide(activeIndex + 1)} aria-label="Show next welcome image">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
