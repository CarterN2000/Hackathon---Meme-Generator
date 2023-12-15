import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/";
import Show from "../../pages/Show/";
import Favorites from "../../pages/Favorites/"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Show />} />
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
  );
};

export default Main