
import  Navbar  from "./component/Navbar";
import Hero from "./component/Hero";
import Plans from "./component/Plans"
import Footer from "./component/Footer";

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Plans title="OFFICES" place="ROOM"/>
     <Footer/>
    </div>
  );
}

export default App;
