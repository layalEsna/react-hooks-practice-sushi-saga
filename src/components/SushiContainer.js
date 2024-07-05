// import React from "react";
// import MoreButton from "./MoreButton";

// function SushiContainer(props) {
//   return (
//     <div className="belt">
//       {/* Render Sushi components here! */}
//       <MoreButton />
//     </div>
//   );
// }

// export default SushiContainer;
////////original code






import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis,  pagination, handleClick, eatenSushi}) {
  return (
    <div className="belt">
      {sushis.map(sushi => (
        <Sushi key={sushi.id}
          sushi={sushi}
          handleClick={handleClick}
          isEaten={eatenSushi.includes(sushi.id)}
        />
     ))}
      <MoreButton pagination={pagination} />
    </div>
  );
}

export default SushiContainer;

