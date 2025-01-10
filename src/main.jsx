import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
// import NftAiTool from "./components/NftAiTool";
// import NftCustomTool from "./components/NftCustomTool";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/nft-ai-tool" element={<NftAiTool />} />
        <Route path="/nft-custom-tool" element={<NftCustomTool />} />  */}
      </Routes>
    </Router>
  </React.StrictMode>
);
