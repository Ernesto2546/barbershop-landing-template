export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c",
    "https://images.unsplash.com/photo-1517832606299-7ae9b720a186"
  ];

  return (
    <section id="gallery">

      <h2>Galería</h2>

      <div className="gallery-grid">

        {images.map((img) => (
          <img
            key={img}
            src={img}
            alt="Barber"
          />
        ))}

      </div>

    </section>
  );
}