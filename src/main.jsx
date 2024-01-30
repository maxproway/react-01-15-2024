import ReactDOM from "react-dom/client";
// import React from "react";
// import { restaurants } from "/materials/mock";
import { App } from "./App";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// root.render(
//   <div>
//     <h1>Restaurants:</h1>

//     {/* Restaurant #1 */}
//     <div>
//       <h2>#1 Restaurant {restaurants[0].name}</h2>
//       <h3>Menu:</h3>
//       <ul>
//         <li>
//           <strong>
//             {restaurants[0].menu[0].name} ${restaurants[0].menu[0].price}
//           </strong>{" "}
//           &nbsp; (ingredients: {restaurants[0].menu[0].ingredients[0]},{restaurants[0].menu[0].ingredients[1]})
//         </li>

//         <li>
//           <strong>
//             {restaurants[0].menu[1].name} ${restaurants[0].menu[1].price}
//           </strong>{" "}
//           (ingredients: {restaurants[0].menu[1].ingredients[0]})
//         </li>

//         <li>
//           <strong>
//             {restaurants[0].menu[2].name} ${restaurants[0].menu[2].price}
//           </strong>{" "}
//           (ingredients: {restaurants[0].menu[2].ingredients[0]})
//         </li>
//       </ul>
//       <h3>Reviews:</h3>
//       <ul>
//         <li>
//           {restaurants[0].reviews[0].text} - &nbsp;
//           <strong>
//             {restaurants[0].reviews[0].user}, {restaurants[0].reviews[0].rating}*
//           </strong>
//         </li>
//         <li>
//           {restaurants[0].reviews[1].text} - &nbsp;
//           <strong>
//             {restaurants[0].reviews[1].user}, {restaurants[0].reviews[1].rating}*
//           </strong>
//         </li>
//       </ul>
//     </div>

//     {/* Restaurant #2 */}
//     <div>
//       <h2>#2 Restaurant {restaurants[1].name}</h2>
//       <h3>Menu:</h3>
//       <ul>
//         <li>
//           <strong>
//             {restaurants[1].menu[0].name} ${restaurants[1].menu[0].price}
//           </strong>{" "}
//           (ingredients: {restaurants[1].menu[0].ingredients[1]},{restaurants[1].menu[0].ingredients[1]},
//           {restaurants[1].menu[0].ingredients[2]})
//         </li>

//         <li>
//           <strong>
//             {restaurants[1].menu[1].name} ${restaurants[1].menu[1].price}
//           </strong>{" "}
//           (ingredients: {restaurants[1].menu[1].ingredients[0]},{restaurants[1].menu[`0`].ingredients[1]},
//           {restaurants[1].menu[1].ingredients[2]},{restaurants[1].menu[1].ingredients[2]})
//         </li>
//       </ul>
//       <h3>Reviews:</h3>
//       <ul>
//         <li>
//           {restaurants[1].reviews[0].text} - &nbsp;
//           <strong>
//             {restaurants[1].reviews[0].user}, {restaurants[1].reviews[0].rating}*
//           </strong>
//         </li>
//         <li>
//           {restaurants[1].reviews[1].text} - &nbsp;
//           <strong>
//             {restaurants[1].reviews[1].user}, {restaurants[1].reviews[1].rating}*
//           </strong>
//         </li>
//         <li>
//           {restaurants[1].reviews[2].text} - &nbsp;
//           <strong>
//             {restaurants[1].reviews[2].user}, {restaurants[1].reviews[2].rating}*
//           </strong>
//         </li>
//       </ul>
//     </div>

//     {/* Restaurant #3 */}
//     <div>
//       <h2>#3 Restaurant {restaurants[2].name}</h2>
//       <h3>Menu:</h3>
//       <ul>
//         <li>
//           <strong>
//             {restaurants[2].menu[0].name} ${restaurants[2].menu[0].price}
//           </strong>{" "}
//           (ingredients: {restaurants[2].menu[0].ingredients[0]})
//         </li>

//         <li>
//           <strong>
//             {restaurants[2].menu[1].name} ${restaurants[2].menu[1].price}
//           </strong>{" "}
//           (ingredients: {restaurants[2].menu[1].ingredients[0]},{restaurants[2].menu[1].ingredients[1]})
//         </li>

//         <li>
//           <strong>
//             {restaurants[2].menu[2].name} ${restaurants[2].menu[2].price}
//           </strong>{" "}
//           (ingredients: {restaurants[2].menu[2].ingredients[0]})
//         </li>
//       </ul>
//       <h3>Reviews:</h3>
//       <ul>
//         <li>
//           {restaurants[2].reviews[0].text} - &nbsp;
//           <strong>
//             {restaurants[2].reviews[0].user}, {restaurants[2].reviews[0].rating}*
//           </strong>
//         </li>
//       </ul>
//     </div>

//     {/* Restaurant #4 */}
//     <div>
//       <h2>#4 Restaurant {restaurants[3].name}</h2>
//       <h3>Menu:</h3>
//       <ul>
//         <li>
//           <strong>
//             {restaurants[3].menu[0].name} ${restaurants[3].menu[0].price}
//           </strong>{" "}
//           (ingredients: {restaurants[3].menu[0].ingredients[0]})
//         </li>

//         <li>
//           <strong>
//             {restaurants[3].menu[1].name} ${restaurants[3].menu[1].price}
//           </strong>{" "}
//           (ingredients: {restaurants[3].menu[1].ingredients[0]},{restaurants[3].menu[1].ingredients[1]})
//         </li>
//       </ul>
//       <h3>Reviews:</h3>
//       <ul>
//         <li>
//           {restaurants[3].reviews[0].text} - &nbsp;
//           <strong>
//             {restaurants[3].reviews[0].user}, {restaurants[3].reviews[0].rating}*
//           </strong>
//         </li>

//         <li>
//           {restaurants[3].reviews[1].text} - &nbsp;
//           <strong>
//             {restaurants[3].reviews[1].user}, {restaurants[3].reviews[1].rating}*
//           </strong>
//         </li>
//       </ul>
//     </div>
//   </div>
// );

// root.render(
//   React.createElement("div", {
//     children: [
//       React.createElement("button", {
//         children: React.createElement("span", {
//           children: "Booo",
//         }),
//         onClick: () => console.log("btn1"),
//         onMouseEnter: () => console.log("Hello"),
//         onMouseLeave: () => console.log("buy"),
//       }),
//       React.createElement("button", {
//         children: React.createElement("span", { children: "Booo" }),
//       }),
//       React.createElement("button", {
//         children: React.createElement("span", { children: "Booo" }),
//       }),
//     ],
//   })
// );
