import { useState } from "react";

const data = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is JSX?",
    answer: "JSX lets you write HTML inside JavaScript.",
  },
  {
    question: "What is useState?",
    answer: "useState is a React Hook used to manage state.",
  },
];

const AccordionTab = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[700px] bg-white rounded-xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-center mb-6">
          Accordion
        </h1>

        {data.map((item, index) => (
          <div key={index} className="border rounded-lg mb-3">

            <div
              onClick={() => handleClick(index)}
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
            >
              <h2 className="font-semibold">
                {item.question}
              </h2>

              <span className="text-2xl">
                {activeIndex === index ? "➖" : "➕"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="p-4">
                {item.answer}
              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
};

export default AccordionTab;