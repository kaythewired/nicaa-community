"use client";

import { useId, useMemo, useState } from "react";
import { townUnions } from "../_data/community";

type TownUnion = (typeof townUnions)[number];

type UnionDirectoryProps = {
  unions?: readonly TownUnion[];
};

type Roster = {
  officers: string[];
  members: string[];
};

type SearchableUnion = TownUnion & Roster & {
  memberCount: number;
  matchingRecords: string[];
};

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const allLetters = "ALL";
const officerLine = /^(chairman|vice chairman|secretary|secreatry|assistant secretary|treasurer|financial secretary|provost|president|pro\b)/i;

function normaliseLetter(letter: string) {
  return letter.trim().charAt(0).toLocaleUpperCase();
}

function normaliseRoster(roster: string): Roster {
  const lines = roster
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return lines.reduce<Roster>(
    (result, line) => {
      if (officerLine.test(line)) {
        result.officers.push(line);
        return result;
      }

      const member = line
        .replace(/^(?:\d+\s*[.)]|[•·])\s*/, "")
        .trim();

      if (member) result.members.push(member);
      return result;
    },
    { officers: [], members: [] },
  );
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

  const filteredUnions = useMemo<SearchableUnion[]>(() => {
    const searchTerm = query.trim().toLocaleLowerCase();

    return unions
      .map((union) => {
        const roster = normaliseRoster(union.roster);
        const matchingRecords = searchTerm
          ? [union.name, ...roster.officers, ...roster.members].filter((record) =>
              record.toLocaleLowerCase().includes(searchTerm),
            )
          : [];

        return {
          ...union,
          ...roster,
          memberCount: roster.members.length,
          matchingRecords,
        };
      })
      .filter((union) => {
        const matchesLetter =
          selectedLetter === allLetters ||
          normaliseLetter(union.letter) === selectedLetter;
        const matchesSearch =
          searchTerm.length === 0 ||
          union.name.toLocaleLowerCase().includes(searchTerm) ||
          union.roster.toLocaleLowerCase().includes(searchTerm);

        return matchesLetter && matchesSearch;
      })
      .sort((first, second) => first.name.localeCompare(second.name));
  }, [query, selectedLetter, unions]);

  const hasActiveFilters = query.length > 0 || selectedLetter !== allLetters;
  const resultCount = filteredUnions.length;
  const visibleMemberCount = filteredUnions.reduce(
    (total, union) => total + union.memberCount,
    0,
  );
  const resultLabel = `${resultCount} ${
    resultCount === 1 ? "town union" : "town unions"
  } shown${selectedLetter === allLetters ? "" : ` under ${selectedLetter}`}${
    query.trim() ? ` for "${query.trim()}"` : ""
  }.`;

  const clearFilters = () => {
    setQuery("");
    setSelectedLetter(allLetters);
  };

  return (
    <section className="union-directory" aria-labelledby={`${resultsId}-title`}>
      <div className="union-directory-heading">
        <div className="union-directory-heading-copy">
          <p className="union-directory-eyebrow">Complete community directory</p>
          <h2 id={`${resultsId}-title`} className="union-directory-title">
            Find a town union or a member
          </h2>
        </div>
        <p className="union-directory-intro">
          Every public roster from the original community directory is included.
          Search a union, officer, or member name, then open a card to view the
          complete list and the published contact details.
        </p>
      </div>

      <div className="union-directory-tools">
        <div className="union-search">
          <label className="union-search-label" htmlFor={searchId}>
            Search the full public directory
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
              placeholder="Search a union or member name"
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
        <div className="union-results-copy">
          <p
            id={statusId}
            className="union-results-status"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {resultLabel}
          </p>
          <p className="union-results-members">
            <strong>{visibleMemberCount.toLocaleString()}</strong> listed public {visibleMemberCount === 1 ? "member" : "members"} in this view
          </p>
        </div>
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
              <details className="union-card">
                <summary className="union-card-summary">
                  <span className="union-card-letter" aria-hidden="true">
                    {normaliseLetter(union.letter)}
                  </span>
                  <span className="union-card-copy">
                    <span className="union-card-label">Town union roster</span>
                    <strong className="union-card-name">{union.name}</strong>
                    <span className="union-card-count">
                      {union.memberCount} listed {union.memberCount === 1 ? "member" : "members"}
                    </span>
                    {query.trim() && union.matchingRecords.length > 0 ? (
                      <span className="union-card-match">
                        <span>Matching public record</span>
                        <strong>
                          {union.matchingRecords.slice(0, 2).join(" · ")}
                          {union.matchingRecords.length > 2
                            ? ` +${union.matchingRecords.length - 2} more`
                            : ""}
                        </strong>
                      </span>
                    ) : null}
                  </span>
                  <span className="union-card-arrow" aria-hidden="true" />
                </summary>

                <div className="union-card-roster">
                  {union.officers.length > 0 ? (
                    <section className="union-roster-officers" aria-label={`${union.name} officers and contact details`}>
                      <h3>Officers and contact details</h3>
                      <ul>
                        {union.officers.map((officer, index) => (
                          <li key={`${union.name}-officer-${index}`}>{officer}</li>
                        ))}
                      </ul>
                    </section>
                  ) : null}

                  <section className="union-roster-members" aria-label={`${union.name} member list`}>
                    <h3>Member list</h3>
                    <ol>
                      {union.members.map((member, index) => (
                        <li key={`${union.name}-member-${index}`}>
                          <span aria-hidden="true">{String(index + 1).padStart(3, "0")}</span>
                          <span>{member}</span>
                        </li>
                      ))}
                    </ol>
                  </section>
                </div>
              </details>
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
