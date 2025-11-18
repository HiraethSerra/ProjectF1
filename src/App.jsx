<<<<<<< HEAD
import { Home } from "./pages/Home";
import { ResultsPage } from "./pages/ResultsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { NotFound } from "./pages/NotFound";
import Teams from "./pages/Teams";
import Drivers from "./pages/Drivers";

import './index.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/results" element={<ResultsPage />} />
            <Route path="*" element={<NotFound />}/>
            <Route path="/teams" element={<Teams />} />
            <Route path="/drivers" element={<Drivers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

=======
import { Home } from "./pages/Home";
import { ResultsPage } from "./pages/ResultsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { NotFound } from "./pages/NotFound";
import Teams from "./pages/Teams";

import './index.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/results" element={<ResultsPage />} />
            <Route path="*" element={<NotFound />}/>
            <Route path="/teams" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

>>>>>>> 1b71780ae15c83ce0bd1286dca2135bea04afa8c
export default App;