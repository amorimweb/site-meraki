type GalleryItem = { src: string; alt?: string };

interface PhotoGalleryProps {
  items: GalleryItem[];
  visibleImages?: number;
}

export default function PhotoGallery({ items, visibleImages = 8 }: PhotoGalleryProps) {
  return (
    <div className="photo-gallery">
      {items.slice(0, visibleImages).map((item) => (
        <img key={item.src} src={item.src} alt={item.alt ?? ""} loading="lazy" tabIndex={0} />
      ))}
    </div>
  );
}
