import { business } from '../data/business';

export default function Testimonials() {
  return (
    <section id="testimonials">

      <h2>Lo que dicen nuestros clientes</h2>

      <div className="reviews">

        {business.reviews.map((review) => (
          <div className="review" key={review.name}>
            <p>"{review.text}"</p>
            <h4>{review.name}</h4>
          </div>
        ))}

      </div>

    </section>
  );
}