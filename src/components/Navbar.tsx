export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">BARBER PRO</div>

      <ul>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#gallery">Galería</a></li>
        <li><a href="#testimonials">Opiniones</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <a
        href="https://wa.me/18090000000"
        target="_blank"
      >
        <button>Reservar</button>
      </a>
    </nav>
  );
}