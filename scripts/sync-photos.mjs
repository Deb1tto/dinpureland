import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join, parse } from "node:path";

const projectRoot = process.cwd();
const photosDir = join(projectRoot, "public", "photos");
const dataFile = join(projectRoot, "src", "data", "photos.json");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

if (!existsSync(photosDir)) {
  throw new Error("Missing public/photos directory.");
}

const existingPhotos = existsSync(dataFile)
  ? JSON.parse(readFileSync(dataFile, "utf8"))
  : [];

const existingByImage = new Set(existingPhotos.map((photo) => photo.image));
const imageFiles = readdirSync(photosDir)
  .filter((file) => imageExtensions.has(extname(file).toLowerCase()))
  .sort((a, b) => a.localeCompare(b));

const additions = imageFiles
  .filter((file) => !existingByImage.has(`/photos/${file}`))
  .map((file, index) => {
    const id = parse(file).name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    return {
      id,
      title: `Photo Study ${String(existingPhotos.length + index + 1).padStart(2, "0")}`,
      date: "Undated",
      location: "Location placeholder",
      image: `/photos/${file}`,
      orientation: "landscape",
      description: "Short photo description placeholder.",
      note: "Personal note placeholder. Replace this with your memory, observation, or mood.",
    };
  });

const nextPhotos = [...existingPhotos, ...additions];
writeFileSync(dataFile, `${JSON.stringify(nextPhotos, null, 2)}\n`);

console.log(
  additions.length
    ? `Added ${additions.length} new photo record(s) to src/data/photos.json.`
    : "No new photos found. src/data/photos.json is already up to date.",
);
