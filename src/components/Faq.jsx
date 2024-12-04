import React, { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
const faqData = [
  {
    id: 1,
    question: "What is Hackamandufest?",
    answer:
      "Hackamandufest is an annual hackathon event where participants collaborate to create innovative solutions to real-world problems.",
  },
  {
    id: 2,
    question: "Who can participate?",
    answer:
      "Anyone with an interest in technology and innovation can participate, including students, professionals, and hobbyists.",
  },
  {
    id: 3,
    question: "How do I register?",
    answer:
      "You can register for Hackamandufest by visiting our official website and filling out the registration form.",
  },
  {
    id: 4,
    question: "What should I bring?",
    answer:
      "Participants should bring their own laptops, chargers, and any other equipment they might need for their projects.",
  },
  {
    id: 5,
    question: "Is there a participation fee?",
    answer: "No, participation in Hackamandufest is completely free.",
  },
];
const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };
  return (
    <div className="mx-auto mb-14 max-w-4xl px-4 py-8">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="select-none overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out"
          >
            <div
              onClick={() => toggleFaq(faq.id)}
              className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>

              <BiCaretDown
                className={`transform text-gray-600 transition-transform duration-300 ${activeFaq === faq.id ? "rotate-180" : ""} `}
                size={24}
              />
            </div>

            {activeFaq === faq.id && (
              <div className="animate-fade-in px-6 pb-6 text-gray-600">
                <div className="border-t border-gray-200 pt-4">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
