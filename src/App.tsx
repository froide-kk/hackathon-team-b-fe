import { Route, Routes } from "react-router-dom";
import Topic from "./pages/Topic";
import News from "./pages/News";
import Login from "./pages/Login";
import Bookmark from "./pages/Bookmark";
import Header from "./components/Header";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/news" element={<News />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </Box>
  );
}

export default App;
