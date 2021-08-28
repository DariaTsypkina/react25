// import { Pie } from 'react-chartjs-2';

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [15, 18, 36, 5, 7, 12],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 2
//     }
//   ]
// };

// const PieChart = () => (
//   <>
//     <div className='header'>
//       <h1 className='title'>Pie Chart</h1>
//     </div>
//     <div>
//       <Pie data={data} width={750} height={750} options={{ maintainAspectRatio: false }}/>
//     </div>
//   </>
// );

// export default PieChart;

// import React from 'react';

// class Welcome extends React.Component {
//   render() {
//     return React.createElement('h1', {}, 'Привет мир!');
//   }
// }

// export default Welcome;

// class Card extends React.Component {
//   render() {
//     return (
//       React.createElement(
//         'div',
//         {
//           classname: 'card'
//         },
//         React.createElement(
//           'div',
//           {
//             classname: 'card-body'
//           },
//           React.createElement('img', {
//             src: "https://images.theconversation.com/files/405715/original/file-20210610-18-hsj9av.jpeg?ixlib=rb-1.1.0&rect=0%2C154%2C1840%2C1074&q=45&auto=format&w=496&fit=clip",
//             alt: "Базовые туфли"
//           }),
//           React.createElement(
//             'h4',
//             {
//               classname: 'card-title'
//             },
//             "Базовые туфли"
//           ),
//           React.createElement(
//             'p',
//             {
//               classname: 'card-text'
//             },
//             "Эклектичное сочетание винтажного"
//           )
//         ),
//         React.createElement(
//           'span',
//           {
//             classname: 'card-price'
//           },
//           '$23.80'
//         ),
//         React.createElement(
//           'button',
//           {
//             classname: 'card-add'
//           },
//           'Заказать'
//         )
//       )
//     );
//   }
// }

// перепишем
// class Card extends React.Component {
//   render() {
//     //здесь мы берем конкретные свойства, которые будут задаваться при вызове этого компонента
//       const {title, price, description, imgLink} = this.props;
//       return (
//           <div className="card">
//               <div className="card-body">
//                   <img src="https://images.theconversation.com/files/405715/original/file-20210610-18-hsj9av.jpeg?ixlib=rb-1.1.0&rect=0%2C154%2C1840%2C1074&q=45&auto=format&w=496&fit=clip" alt="Базовые туфли"/>
//                   <h4 className="card-title">Базовые туфли</h4>
//                   <p className="card-text">Эклектичное сочетание ...</p>
//               </div>
//               <div className="card-footer">
//                   <span className="card-price">$23.90</span>
//                   <button className="card-add">Заказать</button>
//               </div>
//           </div>
//       );
//   }
// }

// export default Card;


// import CardList from './components/CardList';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <CardList></CardList>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import Button from './components/button';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button/>
      </div>
    );
  }
}

export default App;
