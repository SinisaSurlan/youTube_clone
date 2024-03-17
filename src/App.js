import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Box sx = {{backgroundColor:'#000'}}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetali />} />
            <Route path="/chanel/:id" element={<ChannelDetali />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
