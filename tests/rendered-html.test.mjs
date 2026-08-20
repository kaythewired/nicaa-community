import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the NICAA homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Nigerian Community in Angola/i);
  assert.match(html, /One community/i);
  assert.match(html, /Town unions/i);
  assert.match(html, /Peace.*Unity.*Progress/is);
  assert.doesNotMatch(html, /codex-preview|loading skeleton|_sites-preview/i);
});

test("keeps the starter preview removed and the community routes wired", async () => {
  const routes = ["about", "leadership", "unions", "news", "resources", "contact"];
  const [layout, home, data, packageJson, ...routeSources] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_data/community.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    ...routes.map((route) =>
      readFile(new URL(`../app/${route}/page.tsx`, import.meta.url), "utf8"),
    ),
  ]);

  assert.match(layout, /Nigerian Community in Angola/);
  assert.match(layout, /SiteHeader/);
  assert.match(layout, /SiteFooter/);
  assert.match(home, /id="main-content"/);
  assert.match(data, /export const townUnions/);
  assert.match(data, /export const leaders/);
  assert.match(data, /export const newsItems/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  for (const source of routeSources) {
    assert.match(source, /id="main-content"/);
  }

  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
});
