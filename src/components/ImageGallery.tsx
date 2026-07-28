import { useCallback, useEffect, useId, useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
  columns?: "2" | "3";
  thumbClassName?: string;
  objectFit?: "cover" | "contain";
};

export function ImageGallery({
  images,
  columns = "2",
  thumbClassName,
  objectFit = "cover",
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const titleId = useId();
  const open = activeIndex !== null;
  const current = open ? images[activeIndex] : null;

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((i) => {
      if (i === null || images.length === 0) return i;
      return (i - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((i) => {
      if (i === null || images.length === 0) return i;
      return (i + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, showPrev, showNext]);

  const gridClass =
    columns === "3" ? "grid grid-cols-2 sm:grid-cols-3 gap-3" : "grid grid-cols-2 gap-3";

  const fitClass = objectFit === "contain" ? "object-contain bg-slate-100" : "object-cover";

  return (
    <>
      <div className={gridClass}>
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative block w-full overflow-hidden rounded-sm text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003366] focus-visible:ring-offset-2"
            aria-label={`Ampliar: ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`${thumbClassName ?? "w-full h-40 sm:h-56"} ${fitClass} transition duration-300 group-hover:scale-[1.02]`}
            />
            <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      {open && current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={close}
        >
          <p id={titleId} className="sr-only">
            {current.alt}
          </p>

          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white text-xl hover:bg-white/20"
            aria-label="Fechar visualizador"
          >
            ✕
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-2 sm:left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-2xl hover:bg-white/20"
                aria-label="Foto anterior"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-2 sm:right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-2xl hover:bg-white/20"
                aria-label="Próxima foto"
              >
                ›
              </button>
            </>
          )}

          <figure
            className="relative flex max-h-full max-w-5xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[75vh] w-auto max-w-full object-contain"
            />
            <figcaption className="text-center text-sm text-white/90">
              <span>{current.alt}</span>
              {images.length > 1 && (
                <span className="ml-2 text-white/60">
                  {activeIndex! + 1} / {images.length}
                </span>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
