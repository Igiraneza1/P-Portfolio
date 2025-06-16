import React, { useState, useEffect } from "react";

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "The key is not to prioritize what’s on your schedule, but to schedule your priorities. – Stephen Covey",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Confidence comes not from always being right but from not fearing to be wrong. – Peter T. Mcintyre",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Time is what we want most, but what we use worst. – William Penn",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "It’s not about ideas. It’s about making ideas happen. – Scott Belsky",
];

function Start() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
      setAnimateKey((prev) => prev + 1);
    }, 6000); // slower 6-second interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-cyan-900 h-screen flex flex-col justify-center items-center font-bold p-4 text-center">
      <h1 className="text-3xl font-sans pt-3 text-gray-300 animate-slideFromRight">
        Adeline IGIRANEZA
      </h1>
      <p className="text-4xl font-sans pt-3 text-gray-950 animate-slideFromRightSlow mb-6">
        Front-End Developer
      </p>

      <blockquote
        key={animateKey}
        className="max-w-xl text-gray-200 italic text-lg animate-fadeInSlow"
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
