import "./App.css";
import Login from "./components/auth/Login.jsx";
import List from "./components/pages/List.jsx";
import Navbar from "./components/Navbar.jsx";
import Item from "./components/pages/Item.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemEdit from "./components/pages/item-edit";
import ItemNew from "./components/pages/item-new";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<List />} />
          <Route path="/:id" element={<Item />} />
          <Route path="/:id/edit" element={<ItemEdit />} />
          <Route path="/new" element={<ItemNew />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
