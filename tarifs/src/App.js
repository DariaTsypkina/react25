import React, { useEffect, useState } from 'react';
import './assets/styles/normalize.css';
// import CardList from './components/Cardlist/CardList';
// import Example from './components/Example/Example';
// import FunctionalComponent from './components/Hooks/HooksEx';
// import Clock from './components/Clock/Clock';
// import Comments from './components/Comments/Comments';
// import useLocalStorage from './components/Cardlist/useLocalStorage';


// function App() {
//   // const [items, setItems] = useLocalStorage('item', [
//   //   {
//   //             price: 300,
//   //             speed: 10,
//   //             colorClass: 'blue'
//   //         },
//   //         {
//   //             price: 450,
//   //             speed: 50,
//   //             colorClass: 'green'
//   //         },
//   //         {
//   //             price: 550,
//   //             speed: 100,
//   //             colorClass: 'red'
//   //         },
//   //         {
//   //             price: 1000,
//   //             speed: 200,
//   //             colorClass: 'black'
//   //         }
//   // ]);
//   // console.log(items);
//   return (
//     // <CardList items={items} />
//     <FunctionalComponent/>
//   );
// }

import { observer, inject } from 'mobx-react';

// @inject("booksStore")
// @observer
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newBook: ''
//     }
//   };

//   addNewBook = () => {
//     const {newBook} = this.state;
//     const {booksStore} = this.props;
//     if (!newBook) return;
//     booksStore.addBook(newBook);
//     this.setState({
//       newBook: ''
//     });
//   }

//   deleteBook = (index) => {
//     const {booksStore} = this.props;
//     booksStore.removeBook(index);
//   }
//   setNewBook = (e) => {
//     this.setState({
//       newBook: e.target.value
//     })
//   }
  
//   render() {
//     const {booksStore} = this.props;
//     const {newBook} = this.state;

//     return (
//       <div>
//         <ol>
//           {booksStore.books.map((book, index) => {
//             return <li key={index}>
//               {book}
//               <button onClick={() => this.deleteBook(index)}>delete</button>
//             </li>
//           })}
//         </ol>
//         <input 
//         type="text"
//         value={newBook}
//         onChange={this.setNewBook}/>
//         <button onClick={this.addNewBook}>add</button>
//       </div>
//     )
//   }
// }

const App = inject(['booksStore'])(observer(({booksStore}) => {
  const [newBook, setNewBook] = useState('');
  const [books, setBooks] = useState(booksStore.books);

  const addNewBook = () => {
    if (!newBook) return;
    booksStore.addBook(newBook);
    setNewBook('');
  }

  const deleteBook = (index) => {
    booksStore.removeBook(index);
    setBooks(booksStore.books);
  }

  return (
    <div>
      <ol>
        {books.map((book, index) => (
          <li key={index}>
            {book}
            <button onClick={() => deleteBook(index)}>delete</button>
          </li>
        ))}
      </ol>
      <input type="text" value={newBook} onChange={(e) => setNewBook(e.target.value)}/>
      <button onClick={addNewBook}>add</button>
    </div>
  )
}))

export default App;