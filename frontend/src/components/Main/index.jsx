import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/";
import Show from "../../pages/Show/";
import Favorites from "../../pages/Favorites/"
import Memes from "../../pages/Memes/"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Show />} />
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/memes" element={<Memes />}/>

      </Routes>
    </main>
  );
};

export default Main