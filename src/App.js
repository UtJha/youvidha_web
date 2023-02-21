import "./App.css";
import LeftCard from "./components/LeftCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
        <Navbar />
      <div className="items-stretch flex">
        <LeftCard />
        
      </div>
    </>
  );
}

export default App;
