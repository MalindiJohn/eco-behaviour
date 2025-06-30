import { useEffect, useState } from "react";

const users = [
  { name: "Alice", points: 120, level: "Bronze" },
  { name: "Bob", points: 250, level: "Silver" },
  { name: "Charlie", points: 400, level: "Gold" },
  { name: "Diana", points: 90, level: "Bronze" },
];
const levelColors = {
  Bronze: "bg-yellow-700 text-yellow-100",
  Silver: "bg-gray-400 text-gray-800",
  Gold: "bg-yellow-400 text-yellow-900",
};

export default function Leaderboard() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);
  return (
    <div className={`max-w-2xl mx-auto p-6 bg-white rounded shadow transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h1 className="text-2xl font-bold mb-4 animate-fade-in">Leaderboard</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-2">User</th>
            <th className="p-2">Points</th>
            <th className="p-2">Level</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr
              key={user.name}
              className={`transition-all duration-700 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} delay-[${(i+1)*150}ms`}
              style={{ transitionDelay: `${(i+1)*150}ms` }}
            >
              <td className="p-2 font-semibold">{user.name}</td>
              <td className="p-2">{user.points}</td>
              <td className={`p-2 rounded ${levelColors[user.level]} font-bold`}>{user.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
