import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-6">
      <p>© 2025 MyAmravati Market</p>
      <div className="mt-2 space-x-4">
        <Link to="/terms" className="text-blue-500">Terms & Conditions</Link>
        <Link to="/refund" className="text-blue-500">Refund Policy</Link>
        <Link to="/privacy" className="text-blue-500">Privacy Policy</Link>
      </div>
    </footer>
  );
}
