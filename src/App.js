import React from "react";
import Usestatesexample1 from "./components/Usestatesexample1";
import "./App.css";
import Uidesigncards from "./components/Uidesigncards";
import Data from "./components/Data";
import Usestateadvanced2 from "./components/Usestateadvanced2"
// import DataInform from "./components/DataInform";import Profilecard from "./components/Profilecard";
;
import Usestatewitharrexp3 from "./components/Usestatewitharrexp3";
import Usestatefinalcondrend from "./components/Usestatefinalcondrend";
import UsestateFormhandling from "./components/UsestateFormhandling";
import UsestateformHandle2 from "./components/UsestateformHandle2";
import TodoListusestate from "./components/TodoListusestate";
import UseeffectExample1 from "./components/UseeffectExample1";
import FormPasswordexp from "./components/FormPasswordexp";
import UseeffectInnwidtExp2 from "./components/UseeffectInnwidtExp2";
import UseEffectFetchapi from "./components/UseEffectFetchapi";
import UseeffectMocktail from "./components/UseeffectMocktail";
import Propsdrilling from "./components/Propsdrilling";
import Formcomponent from "./Formcomponent";
import Parentcomponent from "./components/Parentcomponent";
import Childcomponent from "./components/Childcomponent";
import ChangethemeUsememo from "./components/ChangethemeUsememo";
import { Routes,Route } from "react-router-dom";
import Contactus from "./components/Pages/Contactus";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Navpage from "./components/Navpage";
import LoginPage from "./components/Pages/LoginPage";
import Submission from "./components/Pages/Submission";
import Users from "./components/RoutesConcept/Users";
import UserDetails from "./components/RoutesConcept/UserDetails";
import Signup from "./components/Pages/Signup";
import RegistrationPage from "./components/Pages/RegistrationPage";
import DisplayData from "./components/GreenKart/DisplayData";
import Todo from "./components/ReactProjectFolder/Todo";
import IntrestProject from "./components/ReactProjectFolder/IntrestProject";




// react props concept starts......................................................
// let data = [
//   {
//     imgurl:
//       "https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABXvQ6mF2upM6koaj9Lo5uNfKEdjrG91EE7vOzDfiOkZ1u2te--0DYs7aWx3aY9jG-rhUOr_1XI4ceZ210A444r2N6GgM_bJlI8gLhKs4uq2tj4Zx7KXKIctnrfH195Gr-LQU.jpg?r=650",
//     title: "leo",
//     discription:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
//   },
//   {
//     imgurl:
//       "https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABTgLesaPujrIlI_VMXQtLWDzjo7MJTG2nGodvo6fhaxwDJrX7ceZ09f2XzqFVanrMZfu1NQGMEp2v5FhySLA58LWsFIeYy8h7QCIZMhBXfooEYH7LvSrWOELNcHx5M-88F3m.jpg?r=185",
//     title: "junglebeat",
//     discription:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
//   },

//   {
//     imgurl:
//       "https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABfCrEZerKXv6johgepcvqXsB0WvNH3ygGE-9Flgb09M9eBNq886HV6ylVOdiZjXrJd_85cVGXyx2Yr_rZanudBH3jzh9Zq8y5DJZeJNdlsV6l9d8YvHAzLAvnSHK0-UoBnp6.jpg?r=853",
//     title: "squid game",
//     discription:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
//   },
// ];

// function App() {
//   return (
//     <div className="data">
//       {data.map((eachobject,index) => {
//        const {title,imgurl,discription}=eachobject;
//         // console.log(eachobject);
//         return (
//           <Movies 
//           key={index}
//             title={title}
//             imgurl={imgurl}
//             discription={discription}
//           />
//         );
//       })}
//       {/* <Movies title={data[0].title} imageUrl={data[0].imgurl} discription={data[0].discription}/>
//     <Movies title={data[1].title} imageUrl={data[1].imgurl} discription={data[1].discription}/>
//     <Movies title={data[2].title} imageUrl={data[2].imgurl} discription={data[2].discription}/>
//     <Movies/>
//     <Movies/> */}
//     </div>
//   );
// }

// function Movies(props) {
//   const{imgurl,title,discription}=props;
//   return (
//     <div>
//       <img src={imgurl} alt="movie" />
//       <h4>{title}</h4>
//       <p>{discription}</p>
//     </div>
//   );
// }
// props concept ends..................................................................................
// function App(){
//   return(
//     <div className="containerbox">
//     {
//       DataInform.map((eachobj)=>{
//         const{thumbnailUrl,url,title,id}=eachobj;
//         return(
//           <Profilecard 
//           key={id}
//           id={id}
//           thumbnailUrl={thumbnailUrl}
//           title={title}
//           url={url}
//           />
//         )
//       })
//     }
      
      



//     </div>
//   )
// }
// second example for props concept........................................
// function App(){
//   return(
//     <div>
//       <Uidesigncards/>
//     </div>
//   )
// }
// third example for props concept with list....................................
// function App(){
//   return(
//     <div>
//       <Usestatesexample1/>
//     </div>
//   )
// }
// example1 for usestate........................................................
// function App(){
//   return(
//     <div>
//       <Usestateadvanced2/>
//     </div>
//   )
// }


// usestate example3 passing arrays and delting records............................
// function App(){
//   return(
//     <div>
//       <Usestatewitharrexp3/>
//     </div>
//   )
// }

// usestate example4 conditional rendering show and hidden......data
// function App(){
//   return(
//     <div>
//       <Usestatefinalcondrend/>
//     </div>
//   )
// }

// Usestate form handling concept example..........................
// function App(){
//   return(
//     <div>
//       <UsestateFormhandling/>
//     </div>
//   )
// }


// form handling example2.........................
// function App(){
//   return(
//     <div>
//       <UsestateformHandle2/>
//     </div>
//   )
// }



//TodoList using usestate...........................example
// function App(){
//   return(
//     <div>
//       <TodoListusestate/>
//     </div>
//   )
// }

// useeffect example1............................
// function App(){
//   return(
//     <div>
//       <UseeffectExample1/>
//     </div>
//   )
// }
// function App(){
//   return(
//     <div>
//       <FormPasswordexp/>
//     </div>
//   )
// }
// function App(){
//   return(
//     <div>
//       <UseeffectInnwidtExp2/>
//     </div>
//   )
// }

// useeffect fetch api example...................................
// function App(){
//   return(
//     <div>
//       <UseEffectFetchapi/>
//     </div>
//   )
// }


// useeffect mocktail api s example......................
// function App(){
//   return(
//     <div>
//       <UseeffectMocktail/>
//     </div>
//   )
// }


// useeffect props drilling concept
// function App(){
//   return(
//     <div>
//       <Propsdrilling/>
//     </div>
//   )
// }

// form component set interval.......................
// function App(){
//   return(
//     <div>
//       <Formcomponent/>
//     </div>
//   )
// }

// usecontext example..............................................
// function App(){
//   return(
//     <div>
//       <Parentcomponent/>
//       <Childcomponent/>
//     </div>
//   )


// }



// usememo example...................................................
// function App(){
//   return(
//     <ChangethemeUsememo/>
//   )
// }

// routes...................................starts.......from.....here
// function App(){
//   return(
//     <div>
//       <Navpage/>
// <Routes>
//   <Route path="/"  element={<Home/>}/>
//   <Route path="/about"  element={<About/>}/>
//   <Route path="/contact"  element={<Contactus/>}/>
//   <Route path="/success"  element={<Submission/>}/>
//   <Route path="/users"  element={<Users/>}/>
//   <Route path="/users/:userid" element={<UserDetails/>}></Route>
//   <Route path="/signup" element={<Signup/>}></Route>
//   <Route path="/login"  element={<LoginPage/>}/>

  
  

  
// </Routes>
//     </div>
//   )
// }
// function App(){
//   return(
//     <div>
//       <RegistrationPage/>
//     </div>
//   )
// }

function App(){
  return(
    <div>
      {/* <DisplayData/> */}
      {/* <Todo/> */}
      <IntrestProject/>
    </div>
  )
}
export default App;
