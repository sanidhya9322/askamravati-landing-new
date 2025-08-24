// src/pages/Privacy.js
export default function Privacy() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        <b>MyAmravati Market</b> respects your privacy and is committed to
        protecting your data.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          We collect your name, phone number, and UPI ID only to process
          subscription payments.
        </li>
        <li>We do not sell or share your personal data with third parties.</li>
        <li>
          Data is stored securely and used only for service improvement.
        </li>
        <li>
          You may request deletion of your data by contacting us at the email
          below.
        </li>
      </ul>

      <p className="mt-6">
        Contact: <b>support@myamravatimarket.com</b>
      </p>
    </div>
  );
}
