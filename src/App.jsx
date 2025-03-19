import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPlayers from "./Components/AllPlayers";
import NavBar from "./Components/NavBar";
import NewPlayerForm from "./Components/NewPlayerForm";
import SinglePlayer from "./Components/SinglePlayer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
