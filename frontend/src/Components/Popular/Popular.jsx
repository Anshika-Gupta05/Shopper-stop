import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import { backend_url } from "../../App";
// const Popular = () => {
//   const [popularProducts, setPopularProducts] = useState([]);
//   useEffect(() => {
//     fetch(`${backend_url}/popularinwomen`)
//       .then((response) => response.json())
//       .then((data) => setPopularProducts(data));
//   }, []);
//   return (
//     <div className="popular">
//       <h1>POPULAR IN WOMEN</h1>
//       <hr />
//       <div className="popular-item">
//         {popularProducts.map((item, i) => {
//           return (
//             <Item
//               key={i}
//               id={item.id}
//               name={item.name}
//               image={item.image}
//               new_price={item.new_price}
//               old_price={item.old_price}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Popular;

const Popular = (props) => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {props.data.map((item, index) => {
          return (
            <Item
              id={item.id}
              key={index}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
