import A from "./Components/A";
import B from "./Components/B";
import C from "./Components/C";

function App() {
  var name = "App";
  return <div>
    <p>Hi my name is {name}</p>
    <B/>
    <C/>
  </div>
}

export default App;
