import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  

var button = {
  color: "black",
  background: "white",
  padding: '20px 50px',
  boxShadow: "5px 5px 10px lightgray",
  fontSize: '20px',
}

const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman', 'Bappi', 'Sakib'];
const products = [
  {name: 'photo shop', price: '$90.99'},
  {name: 'illustrator', price: '$60.99'},
  {name: 'PDF Reader', price: '$6.99'},
  {name: 'Adobe In design', price: '$18.99'},
  {name: 'Jowlt Junaid', price: '$130.99'}
]


const nayokNames = nayoks.map(nayok => nayok)
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayokNames.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        {
          products.map(product => <Product name={product.name} price={product.price}></Product>)
        }
        <Person name={nayoks[0]} naika="Moushumi"></Person>
        <Person name="Jashim" naika="Shabana"></Person>
        <Person name="Bapparaj" naika="cheka"></Person>
        <Person name="Elias K" naika="Bobita"></Person>
        <Person name={nayoks[2]} naika="Bobita"></Person>
        <Person name={nayoks[3]} naika="Bobita"></Person>
        <button style={button}>Submit Now</button>
      </header>
    </div>
  );
}


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic User{users.length}</h3>
     <ul>
       {
         users.map(user=> <li>{user.email}</li>)
       }
     </ul>
    </div>
  )
}


function Product(props){
  const productStyle = {
    boeder: '1px solid gray',
    borderRadius: '5px',
    background: 'lightgray',
    height: '300px',
    width: '400px',
    float: 'left',
    margin: '25px'
  }

  const button = {
    color: "black",
    background: "white",
    padding: '10px 38px',
    boxShadow: "5px 5px 10px ",
    fontSize: '20px',
    border: 'none',
    borderRadius: '5px'
  }
  return (
  <div style={productStyle}>
    <h2>{props.name}</h2>
    <h1>{props.price}</h1>
    <button style={button}>Buy Now</button>
  </div>
  )
}


function Person(props){
  const personStyle = {
    border: '2px solid yellow',
    padding: '20px',
    margin: '10px',
    width: '400px'
  }
 
  return (
  <div style={personStyle}>
  <h1>Name: {props.name}</h1>
  <h3>Hero of {props.naika}</h3>
  </div>)
}



function Counter(){
    const [count, setCount] = useState(0)
    

  return (<div>
    <h1>Counter: {count}</h1>
    <button onClick={()=> setCount(count-1)}>Decrease</button>
    <button onClick={() => setCount(count +1)}>increase</button>
    <h1>Hello jwolt</h1>
  </div>)
}

export default App;
