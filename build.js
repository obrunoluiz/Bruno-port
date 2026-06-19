const fs = require("fs");
const path = require("path");

const root = __dirname;
const output = path.join(root, "dist");

fs.mkdirSync(output, { recursive: true });

const sourceHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const deployHtml = sourceHtml
  .replace("</head>", '<link rel="stylesheet" href="/portfolio-copy.css"></head>')
  .replace("</body>", '<script src="/portfolio-copy.js"></script></body>');

fs.writeFileSync(path.join(output, "index.html"), deployHtml, "utf8");

for (const asset of [
  "portfolio-copy.css",
  "portfolio-copy.js",
  "hero-bruno.png",
  "project-nickson.png",
  "project-mariana-links.png",
  "project-ia-de-verdade.png",
  "project-wing.png",
  "project-x32.png"
]) {
  fs.copyFileSync(path.join(root, asset), path.join(output, asset));
}

console.log("Site estático gerado em dist/");
