const reviews = [
  {
    name: "Carlos M.",
    text: "Excelente servicio y ambiente."
  },
  {
    name: "Juan P.",
    text: "Los mejores fades de la zona."
  },
  {
    name: "Miguel R.",
    text: "Atención rápida y profesional."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials">

      <h2>Lo que dicen nuestros clientes</h2>

      <div className="reviews">

        {reviews.map((review) => (
          <div className="review" key={review.name}>
            <p>"{review.text}"</p>
            <h4>{review.name}</h4>
          </div>
        ))}

      </div>

    </section>
  );
}