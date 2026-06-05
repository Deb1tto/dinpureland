import photoData from "./photos.json";

export type PhotoEntry = {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  orientation: "portrait" | "landscape";
  description: string;
  note: string;
};

function normalizePhoto(photo: Partial<PhotoEntry>, index: number): PhotoEntry {
  return {
    id: photo.id || `photo-${String(index + 1).padStart(3, "0")}`,
    title: photo.title || `Photo Study ${String(index + 1).padStart(2, "0")}`,
    date: photo.date || "Undated",
    location: photo.location || "Location placeholder",
    image: photo.image || "/photos/placeholder.jpg",
    orientation: photo.orientation === "landscape" ? "landscape" : "portrait",
    description: photo.description || "Short photo description placeholder.",
    note:
      photo.note ||
      "Personal note placeholder. Write the memory, atmosphere, or reason this frame stayed with you.",
  };
}

export const photos: PhotoEntry[] = (photoData as Partial<PhotoEntry>[]).map(normalizePhoto);
