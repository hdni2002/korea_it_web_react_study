// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import BasicJsx from "./components/Basic.jsx/Basicjsx";
import BasicProps from "./components/BasicProps/BasicProps";
import BasicReact from "./components/BasicReact/BasicReact";
import Countstate from "./components/BasicState/CountState/Countstate";
import InputState1 from "./components/BasicState/InputState1/InputState1";
import InputState2 from "./components/BasicState/InputState2/InputState2";
import InputState3 from "./components/BasicState/InputState3/InputState3";
import InputState4 from "./components/BasicState/InputState4/InputState4";
import Calculator from "./components/Calculator/Calculator";
import DomRef from "./components/DomRef/DomRef";
import Effect1 from "./components/Effect1/Effect1";
import Effect2 from "./components/Effect1/Effect2/Effect2";
import Emtion1 from "./components/Emtion/Emotion1/Emotion1";
import Emotion2 from "./components/Emtion/Emotion2/Emotion2";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import LifeCycleApp from "./components/LifeCycle/LifeCycleApp";
import Render from "./components/LifeCycle/Render";
import FruitsFilter from "./components/Practice/FruitsFilter/FruitsFilter";
import FruitsFilter1 from "./components/Practice/FruitsFilter/FruitsFilter1";
import SignupForm from "./components/Practice/SignupForm/SignupForm";
import UserProfile from "./components/Practice/UserProfile/UserProfile";
import Router1 from "./components/RouterStudy/Router1/Router1";
import Index from "./components/TodoList/pages/Index";
import Router2 from "./components/RouterStudy/Router2/Router2";
import Router3 from "./components/RouterStudy/Router3/Router3";
import Router4 from "./components/RouterStudy/Router4/Router4";

function App() {
  return (
    <BrowserRouter>
      {/* <BasicReact /> */}
      {/* <BasicJsx/> */}
      {/* <BasicProps/> */}
      {/* <Countstate /> */}
      {/* <Calculator/>  */}
      {/* <InputState1/> */}
      {/* <InputState2/> */}
      {/* <InputState3 /> */}
      {/* <InputState4 /> */}
      {/* <DomRef/> */}
      {/* <Render /> */}
      {/* <LifeCycle/> */}
      {/* <LifeCycleApp/> */}
      {/* <Effect1/> */}
      {/* <Effect2/> */}
      {/* <FruitsFilter/> */}
      {/* <FruitsFilter1/> */}
      {/* <UserProfile/> */}
      {/* <SignupForm/> */}
      {/* <Emtion1/> */}
      {/* <Emotion2/> */}
      {/* <Index /> */}
      {/* <Router1/> */}
      {/* <Router2/> */}
      {/* <Router3/> */}
      <Router4/>
      
      </BrowserRouter>
      /**
       * BrowserRouter로 감싸진 내부에 있는 컴포넌트들만 Routes, Route, Link, useNavigation같은 
       * 라우터 기능을 사용할 수 있다 
       */
  );
}

export default App;
