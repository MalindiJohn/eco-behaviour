import { useEffect, useState } from "react";

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
      <h1 className="text-2xl font-bold mb-4 animate-fade-in">Challenges</h1>
      <ul className="list-disc pl-5 space-y-1">
        {challenges.map((challenge, i) => (
          <li
            key={challenge}
            className={`transition-all duration-700 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} delay-[${(i+1)*150}ms] animate-fade-in`}
            style={{ transitionDelay: `${(i+1)*150}ms` }}
          >
            {challenge}
          </li>
        ))}
      </ul>
    </div>
  );
}
