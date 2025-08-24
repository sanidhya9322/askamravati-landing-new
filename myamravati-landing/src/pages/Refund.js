export default function Refund() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
      <p className="mb-4">
        At <strong>MyAmravati Market</strong>, all subscription payments
        (₹50/month) are non-refundable once activated.
      </p>
      <p className="mb-4">Refunds will only be processed in exceptional cases:</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Double payment due to technical error</li>
        <li>Payment failure but amount debited</li>
      </ul>
      <p>
        To request a refund, contact us within 7 days at{" "}
        <a href="mailto:support@myamravatimarket.com" className="text-blue-500">
          support@myamravatimarket.com
        </a>
      </p>
    </div>
  );
}
