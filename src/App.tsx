import { useState } from "react";
import * as Components from "./components";

import { Home } from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Components.Header />
      <Components.SearchBar />
      <Home />
    </>
  );
}

export default App;
