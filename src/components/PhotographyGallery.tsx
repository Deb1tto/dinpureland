"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { photos, type PhotoEntry } from "@/data/photos";
import { SectionHeader } from "./SectionHeader";

export function PhotographyGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoEntry | null>(null);

  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  return (
    <section id="photography" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeader number="03" title="Photography" label="記憶 / Frames" />

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="border-t hairline pt-5">
            <p className="max-w-sm font-serif text-3xl font-normal leading-[1.38] tracking-[0.03em] text-[var(--color-charcoal)] md:text-5xl">
              A quiet image archive for memory, place, and small observations.
            </p>
            <p className="mt-8 max-w-xs text-sm font-light leading-8 tracking-[0.05em] text-[var(--color-muted)]">
              每次更新时，把照片放入 public/photos，再在 src/data/photos.ts 里追加一条记录即可。
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className={`quiet-hover group border hairline bg-[var(--color-paper)] p-3 text-left shadow-[var(--shadow-soft)] ${
                  photo.orientation === "portrait" ? "md:mt-16" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-[var(--color-beige)] ${
                    photo.orientation === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    sizes="(min-width: 1024px) 36vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.015] group-hover:opacity-90"
                  />
                </div>
                <div className="grid grid-cols-[3.5rem_1fr] gap-5 px-2 py-5">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--color-sage)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-normal tracking-[0.03em]">
                      {photo.title}
                    </h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[var(--color-ash)]">
                      {photo.location} / {photo.date}
                    </p>
                    <p className="photo-card-description mt-4 text-sm font-light leading-7 tracking-[0.05em] text-[var(--color-muted)]">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedPhoto ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(36,35,31,0.48)] p-4 backdrop-blur-[2px] md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="grid max-h-[92vh] w-full max-w-6xl overflow-auto border hairline bg-[var(--color-paper)] shadow-[0_30px_100px_rgba(20,18,14,0.24)] lg:grid-cols-[1.35fr_0.65fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[54vh] bg-[var(--color-charcoal)] lg:min-h-[78vh]">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                sizes="(min-width: 1024px) 68vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
            <aside className="flex flex-col justify-between p-6 md:p-8">
              <div>
                <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-[var(--color-sage)]">
                  写真 / NOTE
                </p>
                <h3 className="font-serif text-4xl font-normal tracking-[0.03em] text-[var(--color-charcoal)]">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[var(--color-ash)]">
                  {selectedPhoto.location} / {selectedPhoto.date}
                </p>
                <p className="mt-10 whitespace-pre-line break-words border-t hairline pt-5 text-sm font-light leading-8 tracking-[0.05em] text-[var(--color-muted)]">
                  {selectedPhoto.note}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="mt-10 border-t hairline pt-5 text-left text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] transition-opacity hover:opacity-55"
              >
                Close
              </button>
            </aside>
          </div>
        </div>
      ) : null}
    </section>
  );
}
