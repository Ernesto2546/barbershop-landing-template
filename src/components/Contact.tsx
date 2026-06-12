import { business } from '../data/business';

export default function Contact() {
  const whatsappLink = `https://wa.me/${business.whatsapp}`;

  return (
    <section id="contact">

      <h2>Reserva tu cita</h2>

      <p>
        Contáctanos vía WhatsApp: <strong>{business.phone}</strong>
      </p>

      <a
        href={whatsappLink}
        target="_blank"
      >
        <button className="contact-buttons">
          Reservar Ahora
        </button>
      </a>

    </section>
  );
}