import { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa6";

export default function HomeLiveTips() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);
  return (
    <div
      className={`max-w-2xl mx-auto p-6 bg-white rounded shadow transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2 animate-fade-in">
        <span className="inline-block animate-bounce-slow text-green-600">
          <FaLeaf size={28} />
        </span>
        Welcome to EcoBehavior!
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
      <p className="mb-2 animate-fade-in delay-150">
        Here are some live eco-friendly tips to help you live more sustainably:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        {[
          "Turn off lights when not in use",
          "Take shorter showers",
          "Use reusable bags and bottles",
          "Recycle and compost waste",
          "Walk, bike, or use public transport",
        ].map((tip, i) => (
          <li
            key={tip}
            className={`transition-all duration-700 ${
              show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            } delay-[${(i + 1) * 150}ms] animate-fade-in`}
            style={{ transitionDelay: `${(i + 1) * 150}ms` }}
          >
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
