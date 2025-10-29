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
    // ... you can add more rows or DNF rows if you like
  ];

  return (
    <>
      <ThemeToggle />
      <StarBackground />

      <Navbar />

      <div className="container mx-auto px-4 py-8 pt-20"> {/* pt-20 to allow for fixed navbar */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label htmlFor="raceFilter" className="block mb-1 font-medium">Race</label>
            <select
              id="raceFilter"
              value={selectedRace}
              onChange={e => setSelectedRace(e.target.value)}
              className="border rounded px-3 py-2"
            >
              <option>Australian Grand Prix</option>
              <option>Bahrain Grand Prix</option>
              <option>Saudi Arabian Grand Prix</option>
              {/* add more races here when backend supports */}
            </select>
          </div>

          <div>
            <label htmlFor="yearFilter" className="block mb-1 font-medium">Year</label>
            <select
              id="yearFilter"
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              className="border rounded px-3 py-2"
            >
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
              {/* add more years as needed */}
            </select>
          </div>
        </div>

        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">POS.</th>
              <th className="px-4 py-2 text-left">NO.</th>
              <th className="px-4 py-2 text-left">DRIVER</th>
              <th className="px-4 py-2 text-left">TEAM</th>
              <th className="px-4 py-2 text-left">LAPS</th>
              <th className="px-4 py-2 text-left">TIME / RETIRED</th>
              <th className="px-4 py-2 text-left">PTS</th>
            </tr>
          </thead>
          <tbody>
            {raceData.map(row => (
              <tr key={row.pos} className="border-t">
                <td className="px-4 py-2">{row.pos}</td>
                <td className="px-4 py-2">{row.no}</td>
                <td className="px-4 py-2">{row.driver}</td>
                <td className="px-4 py-2">{row.team}</td>
                <td className="px-4 py-2">{row.laps}</td>
                <td className="px-4 py-2">{row.time}</td>
                <td className="px-4 py-2">{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};