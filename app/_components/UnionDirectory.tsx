"use client";

import { useId, useMemo, useState } from "react";
import { townUnions } from "../_data/community";

type TownUnion = (typeof townUnions)[number];

type UnionDirectoryProps = {
  unions?: readonly TownUnion[];
};

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const allLetters = "ALL";

function normaliseLetter(letter: string) {
  return letter.trim().charAt(0).toLocaleUpperCase();
}

export function UnionDirectory({ unions = townUnions }: UnionDirectoryProps) {
  const [query, setQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState(allLetters);
  const resultsId = useId();
  const statusId = useId();
  const searchId = useId();

  const availableLetters = useMemo(
    () => new Set(unions.map((union) => normaliseLetter(union.letter))),
    [unions],
  );

  const filteredUnions = useMemo(() => {
    const searchTerm = query.trim().toLocaleLowerCase();

    return [...unions]
      .filter((union) => {
        const matchesLetter =
          selectedLetter === allLetters ||
          normaliseLetter(union.letter) === selectedLetter;
        const matchesSearch =
          searchTerm.length === 0 ||
          union.name.toLocaleLowerCase().includes(searchTerm);

        return matchesLetter && matchesSearch;
      })
      .sort((first, second) => first.name.localeCompare(second.name));
  }, [query, selectedLetter, unions]);

  const hasActiveFilters = query.length > 0 || selectedLetter !== allLetters;
  const resultCount = filteredUnions.length;
  const resultLabel = `${resultCount} ${
    resultCount === 1 ? "town union" : "town unions"
  } shown${selectedLetter === allLetters ? "" : ` under ${selectedLetter}`}${
    query.trim() ? ` for “${query.trim()}”` : ""
  }.`;

  const clearFilters = () => {
    setQuery("");
    setSelectedLetter(allLetters);
  };

  return (
    <section className="union-directory" aria-labelledby={`${resultsId}-title`}>
      <div className="union-directory-heading">
        <div className="union-directory-heading-copy">
          <p className="union-directory-eyebrow">Community directory</p>
          <h2 id={`${resultsId}-title`} className="union-directory-title">
            Find a town union
          </h2>
        </div>
        <p className="union-directory-intro">
          Search by name or browse alphabetically to find a community group.
        </p>
      </div>

      <div className="union-directory-tools">
        <div className="union-search">
          <label className="union-search-label" htmlFor={searchId}>
            Search town unions
          </label>
          <div className="union-search-control">
            <span className="union-search-icon" aria-hidden="true">
              &#8981;
            </span>
            <input
              id={searchId}
              className="union-search-input"
              type="search"
              value={query}
              placeholder="Start typing a union name"
              autoComplete="off"
              spellCheck={false}
              aria-describedby={statusId}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Escape" && query) setQuery("");
              }}
            />
            {hasActiveFilters && (
              <button
                className="union-search-clear"
                type="button"
                onClick={clearFilters}
              >
                Clear
                <span className="union-search-clear-icon" aria-hidden="true">
                  &times;
                </span>
              </button>
            )}
          </div>
        </div>

        <div className="union-letter-filter" role="group" aria-label="Filter town unions by first letter">
          <button
            className={`union-letter-chip${selectedLetter === allLetters ? " union-letter-chip-active" : ""}`}
            type="button"
            aria-pressed={selectedLetter === allLetters}
            aria-controls={resultsId}
            onClick={() => setSelectedLetter(allLetters)}
          >
            All
          </button>
          {alphabet.map((letter) => {
            const isAvailable = availableLetters.has(letter);
            const isSelected = selectedLetter === letter;

            return (
              <button
                className={`union-letter-chip${isSelected ? " union-letter-chip-active" : ""}`}
                type="button"
                key={letter}
                disabled={!isAvailable}
                aria-label={`Show town unions beginning with ${letter}`}
                aria-pressed={isSelected}
                aria-controls={resultsId}
                onClick={() => setSelectedLetter(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="union-results-heading">
        <p
          id={statusId}
          className="union-results-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {resultLabel}
        </p>
        {hasActiveFilters && (
          <button className="union-results-reset" type="button" onClick={clearFilters}>
            Reset directory
          </button>
        )}
      </div>

      {resultCount > 0 ? (
        <ul id={resultsId} className="union-results-grid" aria-label="Town union search results">
          {filteredUnions.map((union) => (
            <li className="union-results-item" key={union.name}>
              <a
                className="union-card"
                href={`/contact?union=${encodeURIComponent(union.name)}`}
                aria-label={`Contact the association about ${union.name}`}
              >
                <span className="union-card-letter" aria-hidden="true">
                  {normaliseLetter(union.letter)}
                </span>
                <span className="union-card-copy">
                  <span className="union-card-label">Town union</span>
                  <strong className="union-card-name">{union.name}</strong>
                </span>
                <span className="union-card-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div id={resultsId} className="union-results-empty" role="region" aria-label="No town unions found">
          <p className="union-results-empty-title">No town unions match those filters.</p>
          <p className="union-results-empty-copy">
            Try another spelling, choose a different letter, or clear the directory.
          </p>
          <button className="union-results-empty-action" type="button" onClick={clearFilters}>
            Show all town unions
          </button>
        </div>
      )}
    </section>
  );
}
