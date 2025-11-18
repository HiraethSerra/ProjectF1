import { Navbar } from "@/components/Navbar";
import DriverCard from "@/components/DriverCard";
import { ThemeToggle } from "@/components/ThemeToggle";

// Import flags
import nlFlag from "@/assets/flags/nl.png";
import jpFlag from "@/assets/flags/jp.png";
import gbFlag from "@/assets/flags/gb.png";
import itFlag from "@/assets/flags/it.png";
import frFlag from "@/assets/flags/fr.png";
import esFlag from "@/assets/flags/es.png";
import deFlag from "@/assets/flags/de.png";
import auFlag from "@/assets/flags/au.png";
import arFlag from "@/assets/flags/ar.png";
import brFlag from "@/assets/flags/br.png";
import mcFlag from "@/assets/flags/mc.png";
import caFlag from "@/assets/flags/ca.png";
import thFlag from "@/assets/flags/th.png";
import nzFlag from "@/assets/flags/nz.png"; 

// ... import other flags as needed

export default function Drivers() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Navbar />

      <div className="container pt-32 pb-16">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight">F1 Drivers</h1>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Red Bull Racing */}
          <DriverCard
            firstName="Max"
            lastName="Verstappen"
            team="Red Bull Racing"
            number="1"
            driverKey="verstappen"
            flagImage={nlFlag}
            gradient="linear-gradient(135deg, #001F70 0%, #0045A0 100%)"
          />
          <DriverCard
            firstName="Yuki"
            lastName="Tsunoda"
            team="Red Bull Racing"
            number="22"
            driverKey="tsunoda"
            flagImage={jpFlag}
            gradient="linear-gradient(135deg, #001F70 0%, #0045A0 100%)"
          />

          {/* Mercedes */}
          <DriverCard
            firstName="George"
            lastName="Russell"
            team="Mercedes"
            number="63"
            driverKey="russell"
            flagImage={gbFlag}
            gradient="linear-gradient(135deg, #00A19B 0%, #006E6B 100%)"
          />
          <DriverCard
            firstName="Kimi"
            lastName="Antonelli"
            team="Mercedes"
            number="24"
            driverKey="antonelli"
            flagImage={itFlag}
            gradient="linear-gradient(135deg, #00A19B 0%, #006E6B 100%)"
          />

          {/* Ferrari */}
          <DriverCard
            firstName="Charles"
            lastName="Leclerc"
            team="Ferrari"
            number="16"
            driverKey="leclerc"
            flagImage={mcFlag}
            gradient="linear-gradient(135deg, #C80000 0%, #7A0000 100%)"
          />
          <DriverCard
            firstName="Lewis"
            lastName="Hamilton"
            team="Ferrari"
            number="44"
            driverKey="hamilton"
            flagImage={gbFlag}
            gradient="linear-gradient(135deg, #C80000 0%, #7A0000 100%)"
          />

          {/* McLaren */}
          <DriverCard
            firstName="Lando"
            lastName="Norris"
            team="McLaren"
            number="4"
            driverKey="norris"
            flagImage={gbFlag}
            gradient="linear-gradient(135deg, #F37224 0%, #D45A00 100%)"
          />
          <DriverCard
            firstName="Oscar"
            lastName="Piastri"
            team="McLaren"
            number="81"
            driverKey="piastri"
            flagImage={auFlag}
            gradient="linear-gradient(135deg, #F37224 0%, #D45A00 100%)"
          />

          {/* Aston Martin */}
          <DriverCard
            firstName="Fernando"
            lastName="Alonso"
            team="Aston Martin"
            number="14"
            driverKey="alonso"
            flagImage={esFlag}
            gradient="linear-gradient(135deg, #005F4A 0%, #003A2D 100%)"
          />
          <DriverCard
            firstName="Lance"
            lastName="Stroll"
            team="Aston Martin"
            number="18"
            driverKey="stroll"
            flagImage={caFlag}
            gradient="linear-gradient(135deg, #005F4A 0%, #003A2D 100%)"
          />

          {/* Alpine */}
          <DriverCard
            firstName="Pierre"
            lastName="Gasly"
            team="Alpine"
            number="10"
            driverKey="gasly"
            flagImage={frFlag}
            gradient="linear-gradient(135deg, #0021FF 0%, #0015A5 100%)"
          />
          <DriverCard
            firstName="Franco"
            lastName="Colapinto"
            team="Alpine"
            number="29"
            driverKey="colapinto"
            flagImage={arFlag}
            gradient="linear-gradient(135deg, #0021FF 0%, #0015A5 100%)"
          />

          {/* Williams */}
          <DriverCard
            firstName="Alex"
            lastName="Albon"
            team="Williams"
            number="23"
            driverKey="albon"
            flagImage={thFlag}
            gradient="linear-gradient(135deg, #005BBB 0%, #003B75 100%)"
          />
          <DriverCard
            firstName="Carlos"
            lastName="Sainz"
            team="Williams"
            number="55"
            driverKey="sainz"
            flagImage={esFlag}
            gradient="linear-gradient(135deg, #005BBB 0%, #003B75 100%)"
          />

          {/* RB (Visa Cash App RB) */}
          <DriverCard
            firstName="Isaac"
            lastName="Hadjar"
            team="RB (Visa Cash App RB)"
            number="30"
            driverKey="hadjar"
            flagImage={frFlag}
            gradient="linear-gradient(135deg, #0B1A34 0%, #12345A 100%)"
          />
          <DriverCard
            firstName="Liam"
            lastName="Lawson"
            team="RB (Visa Cash App RB)"
            number="22"
            driverKey="lawson"
            flagImage={nzFlag}
            gradient="linear-gradient(135deg, #0B1A34 0%, #12345A 100%)"
          />

          {/* Stake F1 Team (Sauber) */}
          <DriverCard
            firstName="Nico"
            lastName="Hulkenberg"
            team="Stake F1 Team (Sauber)"
            number="27"
            driverKey="hulkenberg"
            flagImage={deFlag}
            gradient="linear-gradient(135deg, #00B36B 0%, #008A53 100%)"
          />
          <DriverCard
            firstName="Gabriel"
            lastName="Bortoleto"
            team="Stake F1 Team (Sauber)"
            number="35"
            driverKey="bortoleto"
            flagImage={brFlag}
            gradient="linear-gradient(135deg, #00B36B 0%, #008A53 100%)"
          />

          {/* Haas */}
          <DriverCard
            firstName="Oliver"
            lastName="Bearman"
            team="Haas"
            number="17"
            driverKey="bearman"
            flagImage={gbFlag}
            gradient="linear-gradient(135deg, #C8C8C8 0%, #8A8A8A 100%)"
          />
          <DriverCard
            firstName="Esteban"
            lastName="Ocon"
            team="Haas"
            number="31"
            driverKey="ocon"
            flagImage={frFlag}
            gradient="linear-gradient(135deg, #C8C8C8 0%, #8A8A8A 100%)"
          />

        </div>
      </div>
    </div>
  );
}
