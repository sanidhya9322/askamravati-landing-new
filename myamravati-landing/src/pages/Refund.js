// src/pages/Refund.js
export default function Refund() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-4">
        At <b>MyAmravati Market</b>, all subscription payments (₹50/month) are
        non-refundable once activated.
      </p>

      <p className="mb-4">Refunds will only be processed in exceptional cases:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Double payment due to technical error</li>
        <li>Payment failure but amount debited</li>
      </ul>

      <p className="mt-6">
        To request a refund, contact us within 7 days at:{" "}
        <b>support@myamravatimarket.com</b>
      </p>
    </div>
  );
}
