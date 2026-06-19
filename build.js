const fs = require("fs");
const path = require("path");

const root = __dirname;
const output = path.join(root, "dist");

fs.mkdirSync(output, { recursive: true });

const sourceHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const deployHtml = sourceHtml
  .replace(
    '<link rel="canonical" href="https://designagora.onlineaprender.com/webdesign/" />',
    '<link rel="canonical" href="https://bruno-port.vercel.app/" />'
  )
  .replace(
    '<meta property="og:url" content="https://designagora.onlineaprender.com/webdesign/" />',
    '<meta property="og:url" content="https://bruno-port.vercel.app/" />'
  )
  .replace("</head>", '<link rel="stylesheet" href="/portfolio-copy.css"></head>')
  .replace("</body>", '<script src="/portfolio-copy.js"></script></body>');

fs.writeFileSync(path.join(output, "index.html"), deployHtml, "utf8");

for (const asset of [
  "portfolio-copy.css",
  "portfolio-copy.js",
  "hero-bruno.png",
  "bruno-expert.png",
  "logo-de-cria.png",
  "offer-logo-bruno.png",
  "no-code-pages-saturn.png",
  "card1.png",
  "card2.png",
  "card3.png",
  "card4.png",
  "card5.png",
  "project-nickson.png",
  "project-mariana-links.png",
  "project-ia-de-verdade.png",
  "project-wing.png",
  "project-x32.png",
  ...Array.from({ length: 9 }, (_, index) => `carousel-${String(index + 1).padStart(2, "0")}.gif`),
  ...Array.from({ length: 9 }, (_, index) => `carousel-${String(index + 10).padStart(2, "0")}.png`)
]) {
  fs.copyFileSync(path.join(root, asset), path.join(output, asset));
}

console.log("Site estático gerado em dist/");
