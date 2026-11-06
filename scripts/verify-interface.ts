import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });
try {
  const { default: Home } = await vite.ssrLoadModule("/src/pages/Home.tsx");
  const html = renderToStaticMarkup(React.createElement(Home));
  const destination = 'href="https://bcareksa.bcareksa.workers.dev/"';
  assert.equal(html.split(destination).length - 1, 2);
  for (const text of [
    "تأمين سيارتك يبدأ من هنا",
    "اختر نوع التأمين",
    "حدد التغطية المناسبة لك للمتابعة",
    "التأمين ضد الغير",
    "تغطية مسؤوليتك تجاه الطرف الآخر",
    "التأمين الشامل",
    "حماية أوسع لك ولسيارتك",
  ]) {
    assert.ok(html.includes(text), text);
  }
  assert.ok(html.includes('dir="rtl"'));
  assert.equal((html.match(/aria-labelledby="(?:third-party|comprehensive)-title"/g) || []).length, 2);
  console.log("PASS: all Arabic text, RTL, two exact destination links, accessible labels.");

  const origin = "http://127.0.0.1:3000";
  const page = await fetch(origin);
  assert.equal(page.status, 200);
  assert.ok((await page.text()).includes('lang="ar" dir="rtl"'));
  const routes = await fetch(`${origin}/manus-routes.json`);
  assert.equal(routes.status, 200);
  assert.deepEqual(await routes.json(), { routes: [{ path: "/", title: "اختر نوع التأمين" }] });
  for (const asset of ["/fonts/Cairo-Arabic-wght.woff2", "/fonts/Cairo-Latin-wght.woff2", "/icon.svg"]) {
    const response = await fetch(origin + asset);
    assert.equal(response.status, 200, asset);
  }
  console.log("PASS: preview HTTP 200, complete route manifest, fonts and icon available.");
} finally {
  await vite.close();
}
