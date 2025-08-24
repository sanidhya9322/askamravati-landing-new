export default function Privacy() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        <strong>MyAmravati Market</strong> respects your privacy.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>We collect your name, phone number, and UPI ID only to process subscription payments.</li>
        <li>We do not sell or share your personal data with third parties.</li>
        <li>Data is stored securely and used only for service improvement.</li>
        <li>You may request deletion of your data by contacting us.</li>
      </ul>
      <p>
        Contact us at{" "}
        <a href="mailto:support@myamravatimarket.com" className="text-blue-500">
          support@myamravatimarket.com
        </a>
      </p>
    </div>
  );
}
