import { Route, Routes } from "react-router-dom";
// import Topic from "./pages/Topic";
import News from "./pages/News";
import Login from "./pages/Login";
import Bookmark from "./pages/Bookmark";
import Header from "./components/Header";
import { Box } from "@mui/material";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        {/* トピック画面は一時コメントアウト */}
        {/* <Route
          path="/topic"
          element={
            <PrivateRoute>
              <Topic />
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/news"
          element={
            <PrivateRoute>
              <News />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmark"
          element={
            <PrivateRoute>
              <Bookmark />
            </PrivateRoute>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
