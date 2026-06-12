import { business } from '../data/business';

export default function Gallery() {
  return (
    <section id="gallery">

      <h2>Galería</h2>

      <div className="gallery-grid">

        {business.gallery.map((img) => (
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