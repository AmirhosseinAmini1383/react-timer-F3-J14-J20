import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Hello from "./Hello";
import Timer from "./Timer";
import { TestContext } from "./testContext";
import TimeList from "./TimeList";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title:
//         "پر قدرت ادامه میدم: ) قراره یه فرانت کار خفن بشم: ) قول میدم به خودم",
//     };
//     // this.handleSetTitle=this.handleSetTitle.bind(this)
//   }
//   handleSetTitle = () => {
//     this.setState({
//       title: "Amirho3einAmini",
//     });
//   };

//   // handleSetTitle(){
//   //   this.setState({
//   //     title:"Amirho3einAmini"
//   //   })
//   // }

//   render() {
//     return (
//       <div className="main">
//         <Hello title={this.state.title} />
//         <Timer handleSetTitle={this.handleSetTitle} />
//       </div>
//     );
//   }
// }
const App = () => {
  const [title, setTitle] = useState(
    "پر قدرت ادامه میدم: ) قراره یه فرانت کار خفن بشم: ) قول میدم به خودم"
  );
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState([" 12 : 50 : 31 ", " 13 : 08 : 52 "]);

  useEffect(() => {
    console.log("useEffect");
    // return () => {
    //   console.log("وقتی که کامپوننت مون بسته میشه این قسمت اجرا میشه...");
    // };
  }, [isLight]);

  const handleSetTitle = () => {
    if (title == "Amirho3ein") {
      setTitle(
        "پر قدرت ادامه میدم: ) قراره یه فرانت کار خفن بشم: ) قول میدم به خودم"
      );
    } else setTitle("Amirho3ein");
  };

  const handleSetIsLight = () => {
    setIsLight(!isLight);
  };

  return (
    <TestContext.Provider value={{ timeArr, setTimeArr }}>
      <div className="main" style={{ background: isLight ? "White" : "Black" }}>
        <Hello
          title={title}
          isLight={isLight}
          handleSetIsLight={handleSetIsLight}
        />
        <Timer
          isLight={isLight}
          handleSetIsLight={handleSetIsLight}
          handleSetTitle={handleSetTitle}
        />
        <TimeList />
      </div>
    </TestContext.Provider>
  );
};

export default App;
