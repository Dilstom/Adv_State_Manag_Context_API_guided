import React, { useState, useContext, createContext } from 'react';
import './App.css';

const familyData = {
 grandpa: 'Grandpa Abe',
 father: 'Homer Simpson',
 mother: 'Marj Simpson',
 son: 'Bart Simpson',
};

const SimpsonContext = createContext();
console.log(SimpsonContext); // Provider, Consumer

function App() {
 const [family, setFamily] = useState(familyData);

 return (
  <SimpsonContext.Provider value={family}>
   <div className="App">
    <h1>Family Tree</h1>
    <Grandpa family={family} />
   </div>
  </SimpsonContext.Provider>
 );
}

const Grandpa = props => {
 console.log(props);
 return (
  <div>
   <h3>{props.family.grandpa}</h3>
   <Father family={props.family} />
   <Mother family={props.family} />
  </div>
 );
};

// useContext hook
const Father = () => {
 const familyContxt = useContext(SimpsonContext);

 return (
  <div>
   <h3>{familyContxt.father}</h3>
  </div>
 );
};

const Mother = () => {
 const familyContxt = useContext(SimpsonContext);
 return (
  <div>
   <h3>{familyContxt.mother}</h3>
   <Son />
  </div>
 );
};
const Son = () => {
 const familyContxt = useContext(SimpsonContext);
 return (
  <div>
   <h3>{familyContxt.son}</h3>
  </div>
 );
};

export default App;
