import "./style/App.scss";
import AuctionHouse from "./components/AuctionHouse";
import NewAuction from "./components/NewAuction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AuctionHouse />} />
          <Route path="/auction/new" element={<NewAuction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
