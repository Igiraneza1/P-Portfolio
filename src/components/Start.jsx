import React, { useState, useEffect } from "react";

const quotes = [
  [
  "Technology is best when it brings people together.",
  "Innovation begins with curiosity and grows through consistency.",
  "The future belongs to those who keep learning and adapting.",
  "Great things happen when creativity meets technology.",
  "Technology is not just about tools — it’s about solving real problems.",
  "Progress is built one idea, one challenge, and one solution at a time.",
  "Digital transformation starts with bold thinking.",
  "In a world driven by technology, continuous learning is the real advantage.",
  "Success comes from turning ideas into meaningful experiences.",
  "Technology creates endless opportunities for those willing to explore them.",
  "The best innovations are simple, useful, and human-centered.",
  "Growth happens outside the comfort zone and inside the learning process.",
  "Every challenge is an opportunity to create something better.",
  "Modern technology empowers people to build without limits.",
  "Small steps in learning today create big opportunities tomorrow."
];

function Start() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
      setAnimateKey((prev) => prev + 1);
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-cyan-900 h-screen flex flex-col justify-center items-center font-bold p-4 text-center">
      <h1 className="text-3xl font-sans pt-3 text-gray-300 animate-slideFromRight">
        Adeline IGIRANEZA
      </h1>
      <p className="text-4xl font-sans pt-3 text-gray-950 animate-slideFromRightSlow mb-6">
        IT Specialist | Web Developer 
      </p>

      <blockquote
        key={animateKey}
        className="max-w-xl text-gray-200 italic font-extralight text-lg animate-fadeInSlow"
      >
        "{quotes[quoteIndex]}"
      </blockquote>

      <style>{`
        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideFromRightSlow {
          0% {
            opacity: 0;
            transform: translateX(120%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInSlow {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        .animate-slideFromRight {
          animation: slideFromRight 1.5s ease-out forwards;
        }
        .animate-slideFromRightSlow {
          animation: slideFromRightSlow 2s ease-out forwards;
        }
        .animate-fadeInSlow {
          animation: fadeInSlow 6s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Start;
