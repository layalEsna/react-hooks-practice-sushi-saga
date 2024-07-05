// import React from "react";
// import SushiContainer from "./SushiContainer";
// import Table from "./Table";

// const API = "http://localhost:3001/sushis";

// function App() {
//   return (
//     <div className="app">
//       <SushiContainer />
//       <Table />
//     </div>
//   );
// }


// export default App;

///original code






import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
const sushiPerPage = 4
function App() {
  const [sushis, setSushis] = useState([])
  const [page, setPage] = useState(0)
  const [eatenSushi, setEatenSushi] = useState([])
  const [plates, setPlates] = useState([])
  const [budget, setBudget] = useState(100)

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setSushis(data)
      })
      .catch(e => console.log(e))
  }, [])
  const displayFourSushi = sushis.slice(page * sushiPerPage, (page + 1) * sushiPerPage)
  function pagination() {
    setPage(prev => prev + 1)
  }
  function handleClick(sushiId) {
    sushis.forEach(sushi => {
      if (sushi.id === sushiId && sushi.price <= budget) {
        setBudget(budget - sushi.price)
        setEatenSushi([...eatenSushi, sushiId])
    setPlates([...plates, null])
      } 
    })
    sushis.forEach(sushi => {
      if (sushi.id === sushiId && sushi.price > budget) {
        alert("No free meals!")
      }
    })
    
    }
  return (
    <div className="app">
      <SushiContainer
        sushis={displayFourSushi}
        pagination={pagination}
        handleClick={handleClick}
        eatenSushi={eatenSushi}
      />
      <Table plates={plates} budget={budget} />
    </div>
  );
}


export default App;
