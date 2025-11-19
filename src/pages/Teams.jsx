import {Navbar} from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";

export default function Teams() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      
      <Navbar />

      <div className="container pt-32 pb-16">

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight">F1 Teams</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <TeamCard
            name="Red Bull Racing"
            gradient="linear-gradient(135deg, #001F70 0%, #0045A0 100%)"
            drivers={["Max Verstappen", "Yuki Tsunoda"]}
            carImage="src/assets/cars/redbull.jpg"
            logoImage="src/assets/team-logo/redbull-logo.jpg"
          />

          <TeamCard
            name="Mercedes"
            gradient="linear-gradient(135deg, #00A19B 0%, #006E6B 100%)"
            drivers={["George Russell", "Kimi Antonelli"]}
            carImage="src/assets/cars/mercedes.jpg"
            logoImage="src/assets/team-logo/mercedes-logo.jpg"
          />

          <TeamCard
            name="Ferrari"
            gradient="linear-gradient(135deg, #C80000 0%, #7A0000 100%)"
            drivers={["Charles Leclerc", "Lewis Hamilton"]}
            carImage="src/assets/cars/ferrari.jpg"
            logoImage="src/assets/team-logo/ferrari-logo.jpg"
          />

          <TeamCard
            name="McLaren"
            gradient="linear-gradient(135deg, #F37224 0%, #D45A00 100%)"
            drivers={["Lando Norris", "Oscar Piastri"]}
            carImage="src/assets/cars/mclaren.jpg"
            logoImage="src/assets/team-logo/mclaren-logo.jpg"
          />

          <TeamCard
            name="Aston Martin"
            gradient="linear-gradient(135deg, #005F4A 0%, #003A2D 100%)"
            drivers={["Fernando Alonso", "Lance Stroll"]}
            carImage="src/assets/cars/astonmartin.jpg"
            logoImage="src/assets/team-logo/astonmartin-logo.jpg"
          />

          <TeamCard
            name="Alpine"
            gradient="linear-gradient(135deg, #0021FF 0%, #0015A5 100%)"
            drivers={["Pierre Gasly", "Franco Colapinto"]}
            carImage="src/assets/cars/alpine.jpg"
            logoImage="src/assets/team-logo/alpine-logo.jpg"
          />

          <TeamCard
            name="Williams"
            gradient="linear-gradient(135deg, #005BBB 0%, #003B75 100%)"
            drivers={["Alex Albon", "Carlos Sainz"]}
            carImage="src/assets/cars/williams.jpg"
            logoImage="src/assets/team-logo/williams-logo.jpg"
          />

          <TeamCard
            name="RB (Visa Cash App RB)"
            gradient="linear-gradient(135deg, #0B1A34 0%, #12345A 100%)"
            drivers={["Isaac Hadjar", "Liam Lawson"]}
            carImage="src/assets/cars/vcarb.jpg"
            logoImage="src/assets/team-logo/vcarb-logo.jpg"
          />

          <TeamCard
            name="Stake F1 Team (Sauber)"
            gradient="linear-gradient(135deg, #00B36B 0%, #008A53 100%)"
            drivers={["Nico Hulkenberg", "Gabriel Bortoleto"]}
            carImage="src/assets/cars/sauber.jpg"
            logoImage="src/assets/team-logo/sauber-logo.jpg"
          />

          <TeamCard
            name="Haas"
            gradient="linear-gradient(135deg, #C8C8C8 0%, #8A8A8A 100%)"
            drivers={["Oliver Bearman", "Esteban Ocon"]}
            carImage="src/assets/cars/haas.jpg"
            logoImage="src/assets/team-logo/haas-logo.jpg"
          />

        </div>
      </div>
    </div>
  );
}
