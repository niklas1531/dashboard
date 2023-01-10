import { HashRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import Friends from "./pages/Friends";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/events' element={<Events />} />
        <Route path='/friends' element={<Friends />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
