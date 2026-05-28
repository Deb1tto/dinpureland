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

export const photos: PhotoEntry[] = [
  {
    id: "kinkakuji-2025-12-17",
    title: "Photo Study 01",
    date: "2025.12.17",
    location: "Kyoto / Placeholder",
    image: "/photos/kinkakuji-2025-12-17.jpg",
    orientation: "portrait",
    description: "Short photo description placeholder.",
    note: "Personal note placeholder. Write the memory, atmosphere, or reason this frame stayed with you.",
  },
  {
    id: "lanterns-2025-12-16",
    title: "Photo Study 02",
    date: "2025.12.16",
    location: "Kyoto / Placeholder",
    image: "/photos/lanterns-2025-12-16.jpg",
    orientation: "landscape",
    description: "Short photo description placeholder.",
    note: "Personal note placeholder. Add a quiet reflection, travel context, or visual observation here.",
  },
];
