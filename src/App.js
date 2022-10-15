import React , {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import Hello from './Hello';
import Timer from './Timer';

const App=()=>{
  const [title,setTitle]=useState("پر قدرت ادامه میدم: ) قراره یه فرانت کار خفن بشم: ) قول میدم به خودم");
  const [isLight,setisLight]=useState(false);
  const [timeArray,setTimeArray]=useState(["20 : 42 : 20" , "05 : 15 : 38"]);
  //Charkhe hayat dar component haye tabey!
  //!!! [isLight] => ba har bar taghir dar isLight useEffect ejra mishe !!! 
  useEffect(()=>{
    console.log("UseEffect");
    return ()=>{
      //moghey ke component mon baste bashe in ghesmat ejra mishe!
    }
  },[isLight])

  const handleSetTitle=()=>{
    setTitle("Timer")
  }

  const handleSetisLight=()=>{
    setisLight(!isLight) //agar false bood true she! agar true bood false she!
  }
  
  return(
      <div className='main' style={{background:isLight?"#f8f9fa":"#293241"}}>
        <Hello title={title}/>
        <Timer
         isLight={isLight} 
         handleSetisLight={handleSetisLight} 
         handleSetTitle={handleSetTitle}
         timeArray={timeArray}
         setTimeArray={setTimeArray}
         />
      </div>
    )

}

export default App;



// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       title:"پر قدرت ادامه میدم: ) قراره یه فرانت کار خفن بشم: ) قول میدم به خودم"
//     }
//     // this.handleSetTitle=this.handleSetTitle.bind(this)
//   }
//   handleSetTitle=()=>{
//     this.setState({
//       title:"Amirho3einAmini"
//     })
//   }

//   // handleSetTitle(){
//   //   this.setState({
//   //     title:"Amirho3einAmini"
//   //   })
//   // }

//   render() {
//     return ( 
//     <div className = 'main' >
//       <Hello title={this.state.title} />
//       <Timer handleSetTitle={this.handleSetTitle} />
//     </div>
//     )
//   }
// }