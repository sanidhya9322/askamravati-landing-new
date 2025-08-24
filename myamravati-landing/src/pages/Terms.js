// src/pages/Terms.js
export default function Terms() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to <b>MyAmravati Market</b>. By using our website or mobile app,
        you agree to comply with the following Terms & Conditions:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Our platform is restricted to buyers and sellers from Amravati district.</li>
        <li>All subscription payments are final and non-refundable.</li>
        <li>We are not responsible for third-party content, items, or transactions.</li>
        <li>By subscribing, you authorize us to process payments via PhonePe.</li>
        <li>Any disputes shall be governed under the laws of India, jurisdiction Amravati.</li>
      </ul>

      <p className="mt-6">
        For support, email: <b>support@myamravatimarket.com</b>
      </p>
    </div>
  );
}
