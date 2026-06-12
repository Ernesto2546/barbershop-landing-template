import { business } from '../data/business';

export default function Services() {
  return (
    <section id="services" className="services">

      <h2>Servicios</h2>

      <div className="services-grid">
        {business.services.map((service) => (
          <div className="card" key={service.name}>
            <h3>{service.name}</h3>
            <p>{service.price}</p>
          </div>
        ))}
      </div>

    </section>
  );
}