import "./App.css";
import Card from "./Components/Card.jsx";
// import Home from "./Components/Hooks/ContextAPI/Home";
import { MyProvider } from "./Components/Hooks/ContextAPI/Index.jsx";
import { MyProductProvider } from "./Components/Hooks/ContextAPI/Product.jsx"
import Profile from "./Components/Hooks/userContext/Profile.jsx";
import ReactMemo from "./Components/Hooks/Memo/ReactMemo.jsx";
import UserLogin from "./Components/Hooks/userContext/UserLogin.jsx";
// import Profile from "./Components/Profile.jsx";
import { UserContextProvider } from "./Components/Hooks/userContext/UserProvider.jsx";
import UseMemo from "./Components/Hooks/Memo/UseMemo.jsx";
import UseCallBack from "./Components/Hooks/Memo/UseCallBack.jsx";
import TrafficLight from "./Components/TrafficLight.jsx";


function App() {
  return (
    
     <>
      {/* <MyProvider> */}
      <h1 className="text-green-300 text-3xl p-4 m-4 text-center  w-full">
        React Game Over
      </h1>
    
        {/* <Home /> */}
        {/* <Profile/> */}
        {/* <MyProductProvider> */}
        {/* <Card/> */}
        {/* </MyProductProvider> */}
        {/* <UserContextProvider> */}
          {/* <UserLogin /> */}
          {/* <Profile/> */}
        {/* </UserContextProvider> */}
      
      {/* </MyProvider> */}
      {/* <ReactMemo/> */}
       {/* <UseMemo/> */}
       {/* <UseCallBack/> */}
       <TrafficLight/>
     </>
    
  );
}


export default App;
