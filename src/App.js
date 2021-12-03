import './App.css';
import React from 'react';
// import { useForm } from 'react-hook-form';

class Title extends React.Component{
  render(){
    return(
      <h1>Cybersecurity</h1>
    )
  }
}

function App() {
  // const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>
      </header>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <Title></Title>
    //     <form>
    //       <input type="text" placeholder="Student Number"></input>
    //       <input type="text" placeholder="First Name"></input>
    //       <input type="text" placeholder="Last Name"></input>
    //     </form>
    //   </header>
    // </div>
  );
}

export default App;
