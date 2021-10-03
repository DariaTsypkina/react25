import React from 'react';
import './assets/styles/normalize.css';
// import CardList from './components/Cardlist/CardList';
// import Example from './components/Example/Example';
import FunctionalComponent from './components/Hooks/HooksEx';
// import Clock from './components/Clock/Clock';
// import Comments from './components/Comments/Comments';
// import useLocalStorage from './components/Cardlist/useLocalStorage';


function App() {
  // const [items, setItems] = useLocalStorage('item', [
  //   {
  //             price: 300,
  //             speed: 10,
  //             colorClass: 'blue'
  //         },
  //         {
  //             price: 450,
  //             speed: 50,
  //             colorClass: 'green'
  //         },
  //         {
  //             price: 550,
  //             speed: 100,
  //             colorClass: 'red'
  //         },
  //         {
  //             price: 1000,
  //             speed: 200,
  //             colorClass: 'black'
  //         }
  // ]);
  // console.log(items);
  return (
    // <CardList items={items} />
    <FunctionalComponent/>
  );
}

export default App;
