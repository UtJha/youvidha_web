import "./App.css";
import Home from "./components/Home";
import LeftCard from "./components/LeftCard";
import Navbar from "./components/Navbar";
import RightBox from "./components/RightBox";

function App() {
  return (
    <>
        <Navbar />
      <div className="items-stretch flex justify-between">
        <LeftCard />
        <Home/>
        <RightBox/>
        
      </div>
    </>
  );
}

export default App;
