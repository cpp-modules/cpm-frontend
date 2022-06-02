import { useState } from "react";
import * as Components from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Components.Header />
      <Components.SearchBar />
    </>
  );
}

export default App;
