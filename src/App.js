import Board from "./components/board";
import "./components/style.css";
import React from "react";

function App() {
  return (
    <div className="App" id="main">
      <Board></Board>
    </div>
  );
}

// class App extends React.Component {
//   componentDidMount() {
//     showFirstFiveTeams();
//   }

//   render() {
//     return (
//       <div className="App" id="main">
//         <Board></Board>
//       </div>
//     );
//   }
// }

export default App;
