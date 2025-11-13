import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { useState } from "react";

export const ResultsPage = () => {
  const [selectedRace, setSelectedRace] = useState("Australian Grand Prix");
  const [selectedYear, setSelectedYear] = useState("2025");

  const raceData = [
    { pos: 1, no: 4, driver: "Lando Norris", team: "McLaren", laps: 57, time: "1:42:06.304", points: 25 },
    { pos: 2, no: 1, driver: "Max Verstappen", team: "Red Bull Racing", laps: "57", time: "+0.895s", points: 18 },
    { pos: 3, no: 63, driver: "George Russell", team: "Mercedes", laps: "57", time: "+8.481s", points: 15 },
    { pos: 4, no: 12, driver: "Kimi Antonelli", team: "Mercedes", laps: "57", time: "+10.135s", points: 12 },
    { pos: 5, no: 23, driver: "Alexander Albon", team: "Williams", laps: "57", time: "+12.773s", points: 10 },
    { pos: 6, no: 18, driver: "Lance Stroll", team: "Aston Martin", laps: "57", time: "+17.413s", points: 8 },
    { pos: 7, no: 27, driver: "Nico Hülkenberg", team: "Kick Sauber", laps: "57", time: "+18.423s", points: 6 },
    { pos: 8, no: 16, driver: "Charles Leclerc", team: "Ferrari", laps: "57", time: "+19.826s", points: 4 },
    { pos: 9, no: 81, driver: "Oscar Piastri", team: "McLaren", laps: "57", time: "+20.448s", points: 2 },
    { pos: 10, no: 44, driver: "Lewis Hamilton", team: "Ferrari", laps: "57", time: "+22.473s", points: 1 },
  ];

  return (
    <>
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <div className="container mx-auto px-4 py-8 pt-20">
        
        {/* F1-style rounded dropdowns */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select
            id="raceFilter"
            value={selectedRace}
            onChange={e => setSelectedRace(e.target.value)}
            className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 shadow-sm hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all cursor-pointer"
          >
            <option>Australian Grand Prix</option>
            <option>Bahrain Grand Prix</option>
            <option>Saudi Arabian Grand Prix</option>
          </select>

          <select
            id="yearFilter"
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
            className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 shadow-sm hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all cursor-pointer"
          >
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>

        {/* Results Table */}
        <div className="overflow-hidden rounded-2xl shadow-lg bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
          <table className="w-full table-auto border-collapse">
            {/* 🔴 Red header */}
            <thead className="bg-red-600 dark:bg-red-700 text-white">
              <tr>
                <th className="px-4 py-4">POS.</th>
                <th className="px-4 py-4 ">NO.</th>
                <th className="px-4 py-4 ">DRIVER</th>
                <th className="px-4 py-4 ">TEAM</th>
                <th className="px-4 py-4 ">LAPS</th>
                <th className="px-4 py-4 ">TIME / RETIRED</th>
                <th className="px-4 py-4 ">PTS</th>
              </tr>
            </thead>
            <tbody>
              {raceData.map(row => (
                <tr
                  key={row.pos}
                  className="border-t border-gray-300/30 dark:border-gray-700/50 hover:bg-red-50 dark:hover:bg-red-900/40 transition-colors"
                >
                  <td className="px-4 py-4">{row.pos}</td>
                  <td className="px-4 py-4">{row.no}</td>
                  <td className="px-4 py-4">{row.driver}</td>
                  <td className="px-4 py-4">{row.team}</td>
                  <td className="px-4 py-4">{row.laps}</td>
                  <td className="px-4 py-4">{row.time}</td>
                  <td className="px-4 py-4">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
