import { useState, useContext } from "react";
import { contextTheme } from "../../App";
export default function Counter(props) {
  const [count, setCount] = useState(props.intialCount);
  const style = useContext(contextTheme);
  return (
    <div style={style} className="container">
      <h2 className="display">{count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
// import React, { Component } from "react";
// import { contextTheme } from "../../App";
// class Counter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: props.intialCount,
//     };
//   }

//   handleControls = (value) => {
//     // this.setState({ count: this.state.count + value });
//     this.setState((prevState) => {
//       return { count: prevState.count + value };
//     });
//   };

//   render() {
//     return (
//       <contextTheme.Consumer>
//         {(style) => (
//           <div style={style} className="container">
//             <h2 className="display">{this.state.count}</h2>
//             <div className="controls">
//               <button onClick={() => this.handleControls(-1)} data-role="dec">
//                 -
//               </button>
//               <button
//                 onClick={() => {
//                   this.setState({ count: 0 });
//                 }}
//                 data-role="reset"
//               >
//                 reset
//               </button>
//               <button onClick={() => this.handleControls(1)} data-role="inc">
//                 +
//               </button>
//             </div>
//           </div>
//         )}
//       </contextTheme.Consumer>
//     );
//   }
// }

// export default Counter;
