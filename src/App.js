import "./App.css";
import LeftCard from "./components/LeftCard";
import Navbar from "./components/Navbar";
import RightBox from "./components/RightBox";

function App() {
  return (
    <>
        <Navbar />
      <div className="items-stretch flex">
        <LeftCard />
        <RightBox/>
        
      </div>
    </>
  );
}

export default App;
