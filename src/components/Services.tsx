const services = [
  {
    name: "Corte Clásico",
    price: "$300"
  },
  {
    name: "Fade Premium",
    price: "$500"
  },
  {
    name: "Barba",
    price: "$250"
  },
  {
    name: "Corte + Barba",
    price: "$700"
  }
];

export default function Services() {
  return (
    <section id="services" className="services">

      <h2>Servicios</h2>

      <div className="services-grid">
        {services.map((service) => (
          <div className="card" key={service.name}>
            <h3>{service.name}</h3>
            <p>{service.price}</p>
          </div>
        ))}
      </div>

    </section>
  );
}