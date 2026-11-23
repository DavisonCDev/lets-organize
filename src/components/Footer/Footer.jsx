import './Footer.css';

const foundingYear = 2026;
const currentYear = new Date().getFullYear();
const siteYears =
  currentYear > foundingYear ? `${foundingYear} - ${currentYear}` : `${foundingYear}`;

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Rodapé">
      <div className="footer-cnpj">
        Lets Organiza • CNPJ 49.310.241/0001-26
      </div>
      <div className="developer-credit">
        © {siteYears} Lets Organiza • Developed by OK Smart
      </div>
    </footer>
  );
}