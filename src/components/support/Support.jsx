import React from "react";
import "./support-fonts.css";
import "./support.css";

const Support = () => {
  const faqData = [
    {
      question: "Can I get more information about a product?",
      answer:
        "Absolutely! Each product page includes detailed descriptions, specifications, and customer reviews to help you make an informed decision.",
    },
    {
      question: "Are your products covered by a warranty?",
      answer:
        "Yes, most of our products come with a manufacturer's warranty. Warranty details are typically included in the product's packaging or on our website.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, once your order is shipped, you'll receive a tracking number via email that you can use to track your package.",
    },
    {
      question: "What are your shipping options?",
      answer:
        "We offer standard and expedited shipping options. Standard shipping takes 3-5 business days, while expedited shipping delivers within 1-2 business days.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary based on your location and the chosen shipping method. Standard shipping typically takes 3-5 business days.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, and online payment gateways for secure and convenient transactions.",
    },
  ];

  return (
    <section className="support-section">
      <div className="support-container">
        <div className="support-header-block">
          <h2 className="support-main-title fonts-header-sub">
            Our Frequently Asked Questions
          </h2>
          <p className="support-text fonts-body">
            Quick answers to help you understand our reforestation and tracking ecosystem.
          </p>
        </div>

        <div className="support-cards-list">
          {faqData.map((item, index) => (
            <div className="support-card" key={index}>
              <h3 className="support-card-question fonts-header-sub">
                {item.question}
              </h3>
              <p className="support-card-answer fonts-body">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
