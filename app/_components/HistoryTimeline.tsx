"use client";

import { useState, type CSSProperties } from "react";

type HistoryChapter = {
  year: string;
  title: string;
  copy: string;
};

export function HistoryTimeline({ chapters }: { chapters: ReadonlyArray<HistoryChapter> }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeChapter = chapters[activeIndex];
  const progress = chapters.length > 1 ? activeIndex / (chapters.length - 1) : 0;

  return (
    <section className="history-timeline" aria-label="Explore NICAA history by era">
      <div className="history-timeline__inner">
        <div className="history-timeline__heading">
          <p className="subpage-kicker">Explore the timeline</p>
          <p>Choose an era to follow the community’s journey from its first gathering to the present day.</p>
        </div>

        <div className="history-timeline__navigation" role="tablist" aria-label="NICAA history eras">
          <span className="history-timeline__line" aria-hidden="true">
            <i style={{ "--history-progress": progress } as CSSProperties} />
          </span>
          {chapters.map((chapter, index) => (
            <button
              aria-controls="history-timeline-panel"
              aria-selected={index === activeIndex}
              className={index === activeIndex ? "history-timeline__era history-timeline__era--active" : "history-timeline__era"}
              id={`history-timeline-tab-${index}`}
              key={chapter.year}
              onClick={() => setActiveIndex(index)}
              role="tab"
              type="button"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{chapter.year}</strong>
            </button>
          ))}
        </div>

        <article
          aria-labelledby={`history-timeline-tab-${activeIndex}`}
          className="history-timeline__chapter"
          id="history-timeline-panel"
          key={activeChapter.year}
          role="tabpanel"
          tabIndex={0}
        >
          <p className="history-timeline__chapter-number">Chapter {String(activeIndex + 1).padStart(2, "0")}</p>
          <p className="history-timeline__chapter-year">{activeChapter.year}</p>
          <div>
            <h2>{activeChapter.title}</h2>
            <p>{activeChapter.copy}</p>
          </div>
          <button
            className="history-timeline__next"
            onClick={() => setActiveIndex((index) => (index + 1) % chapters.length)}
            type="button"
          >
            Next chapter <span aria-hidden="true">→</span>
          </button>
        </article>
      </div>
    </section>
  );
}
