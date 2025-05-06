import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const infoItems = [
  {
    title: "Account Safety",
    description:
      "Never share your password or OTP with anyone. Our staff will never ask for them.",
  },
  {
    title: "Transaction Limits",
    description:
      "Daily transaction limits apply for certain services. Check your dashboard for details.",
  },
  {
    title: "Service Hours",
    description:
      "Mobile banking is available 24/7. For in-branch services, please visit between 10 AM - 4 PM.",
  },
  {
    title: "Dispute Resolution",
    description:
      "Report unauthorized transactions within 24 hours to avoid liability.",
  },
];

const ImportantInfo = () => {
  return (
    <section className="bg-warning/10 rounded-2xl py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <FaInfoCircle className="mx-auto text-4xl text-warning mb-2" />
          <h2 className="text-3xl font-bold text-warning">
            Important Information
          </h2>
          <p className="text-gray-600 mt-2">
            Please read these points carefully to ensure safe and smooth
            service.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-base-100 border border-warning/30 rounded-xl p-6 shadow-sm"
            >
              <h4 className="text-lg font-semibold text-warning mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantInfo;
