import "./App.css";
import Card from "./Components/Card.jsx";
// import Home from "./Components/Hooks/ContextAPI/Home";
import { MyProvider } from "./Components/Hooks/ContextAPI/Index.jsx";
import { MyProductProvider } from "./Components/Hooks/ContextAPI/Product.jsx";
// import Profile from "./Components/Profile.jsx";

function App() {
  return (
    
      <MyProvider>
      <h1 className="text-green-300 text-3xl p-4 m-4 text-center  w-full">
        React Game Over
      </h1>
    
        {/* <Home /> */}
        {/* <Profile/> */}
        <MyProductProvider>
        <Card/>
        </MyProductProvider>
      </MyProvider>
    
  );
}

export default App;
