import Home from "./pages/home";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import PassChallange from "./pages/passChallange";
import AddPlayer from "./pages/addPlayer";
function App() {
  return (
    <>
      <div
        className="main"
        style={{
          // minHeight: " 100dvh",
          // backgroundImage:
          //   "url(/images/background.jpg)",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      >
        <div style={{
          width:"500px",
          maxWidth:"100%",
          margin:"auto"
        }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pass-challange" element={<PassChallange/>}/>
            <Route path="/add-player" element={<AddPlayer/>}/>
          </Routes>
        </Router>
        </div>
        
      </div>
    </>
  );
}

export default App;
