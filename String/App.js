
import "./Css/App.css"

//import Welcome from './welcome'

//import Math from './math'

//import Calculate from './numberCal';
//import Months from './Months';

//import Counter from './Counter';

import ShowList from './ShowList';

import Welcome1 from './Welcome1';

import Header from "./Component/Header.jsx"


// function App() {

//   let n1=10;
//   let n2=20;
//   return (
    
//     <>
//     <Welcome></Welcome>
//     <Math num1={n1} num2={n2}></Math> 

//   <Calculate num1={10} num2={20} opr={"*"}></Calculate>
//   <Calculate num1={10} num2={20} opr={"/"}></Calculate> 



//   <Calculate></Calculate> 


//  <Months></Months>

 
// <Counter></Counter>

// <ShowList></ShowList>

//       </>
//   );
// }
 

import Case from "./String/Cases.js";

function App()
{
    return(
      <>
      <Welcome1></Welcome1>
      {/* <Header></Header> */}
      <ShowList></ShowList>

      <Case></Case>

      </>
    )
}

export default App;
