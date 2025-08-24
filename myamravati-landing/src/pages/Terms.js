export default function Terms() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to <strong>MyAmravati Market</strong>. By using our website or
        mobile app, you agree to comply with the following Terms & Conditions:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Our platform is restricted to buyers and sellers from Amravati district.</li>
        <li>All subscription payments are final and non-refundable.</li>
        <li>We are not responsible for third-party content, items, or transactions.</li>
        <li>By subscribing, you authorize us to process payments via PhonePe.</li>
        <li>Any disputes shall be governed under the laws of India, jurisdiction Amravati.</li>
      </ul>
      <p>
        For support, email us at{" "}
        <a href="mailto:support@myamravatimarket.com" className="text-blue-500">
          support@myamravatimarket.com
        </a>
      </p>
    </div>
  );
}
