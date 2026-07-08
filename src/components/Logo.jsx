import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpeg'; // Adjust the path if needed

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary-500">
        <img
          src={logo}
          alt="Logo"
          className="h-5 w-5 object-contain"
        />
      </span>

      <span
        className={`font-display text-lg font-bold ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        folio.
      </span>
    </Link>
  );
}