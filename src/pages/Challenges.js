import { useEffect, useState } from "react";
import { FaTrophy, FaFlag } from "react-icons/fa6";

export default function Challenges() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);
  const challenges = [
    "Use no plastic for a day",
    "Bike to work all week",
    "Go meatless on Mondays",
    "Plant a tree"
  ];
  return (
    <div className={`max-w-2xl mx-auto p-6 bg-white rounded shadow transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2 animate-fade-in">
        <span className="inline-block animate-bounce-slow text-yellow-500">
          <FaTrophy size={26} />
        </span>
        Challenges
      </h1>

      {/* Tailwind custom animation for subtle bounce */}
      <style>{`
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
      <ul className="list-disc pl-5 space-y-1">
        {challenges.map((challenge, i) => (
          <li
            key={challenge}
            className={`transition-all duration-700 flex items-center gap-2 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} delay-[${(i+1)*150}ms] animate-fade-in`}
            style={{ transitionDelay: `${(i+1)*150}ms` }}
          >
            <span className="inline-block animate-bounce-slow text-green-500">
              <FaFlag size={18} />
            </span>
            {challenge}
          </li>
        ))}
      </ul>
    </div>
  );
}
