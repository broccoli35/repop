

import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data"

function App() {
  const cards = data.map(item=>{return(  //funcion map
    <Card                                         //funcion map
    key= {item.id}                        //funcion map
    item = {item}                     //funcion map
    />
  )})
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
