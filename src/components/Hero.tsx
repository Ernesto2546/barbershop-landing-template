export default function Hero() {
  return (
    <section className="hero">

      <div className="overlay">

        <h1>
          Tu estilo comienza aquí
        </h1>

        <p>
          Cortes modernos, barbería clásica y atención premium.
        </p>

        <div className="buttons hero-buttons-container">
          <a
            href="#contact"
          >
            <button className="hero-buttons">Reservar Cita</button>
          </a>
          <a
            href="#services"
          >
            <button className="secondary hero-buttons">
              Ver Servicios
            </button>
          </a>
        </div>

      </div>

    </section>
  );
}