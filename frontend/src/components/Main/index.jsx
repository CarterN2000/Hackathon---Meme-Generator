import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/";
import Show from "../../pages/Show/";
import Favorites from "../../pages/Favorites/"
import Memes from "../../pages/Memes/"
import Create from "../../pages/Create";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Show />} />
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/memes" element={<Memes />}/>
        <Route path="/create" element={<Create />}/>

      </Routes>
    </main>
  );
};

export default Main