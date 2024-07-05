// import React from "react";

// function Sushi(props) {
//   return (
//     <div className="sushi">
//       <div className="plate" onClick={/* Give me a callback! */ null}>
//         {/* Tell me if this sushi has been eaten! */}
//         {false ? null : (
//           <img
//             src={/* Give me an image source! */ null}
//             alt={/* Give me a name! */ "Sushi"}
//             width="100%"
//           />
//         )}
//       </div>
//       <h4 className="sushi-details">
//         {/* Give me a name! */} - ${/* Give me a price! */}
//       </h4>
//     </div>
//   );
// }

// export default Sushi;
//////original code



import React from "react";

function Sushi({sushi, handleClick, isEaten}) {
  return (
    <div className="sushi">
      <div className="plate" onClick={()=>handleClick(sushi.id)}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;