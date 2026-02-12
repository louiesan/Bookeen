import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainPage from "./pages/main/MainPage";
import Dashboard from "./pages/dashboard/Dashboard";
import Discover from "./pages/dashsection/Discover";
import Category from "./pages/dashsection/Category";
import Favorites from "./pages/dashsection/Favorites";
import Downloads from "./pages/dashsection/Downloads";
import Settings from "./pages/dashsection/Settings";
import Detail from "./pages/dashsection/detailpage/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />|
        <Route path="/mydashboard" element={<Dashboard />}>
          <Route index path="discover" element={<Discover />} />
          <Route path="category" element={<Category />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="settings" element={<Settings />} />
          <Route path="bookno/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
