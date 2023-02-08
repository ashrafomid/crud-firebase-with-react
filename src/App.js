import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ThemeSelector from "./Components/ThemeSelector";
import Create from "./create/Create";
import Home from "./home/Home";
import Recipe from "./recipes/Recipe";
import Search from "./search/Search";
import "./App.css";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
