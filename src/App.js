import { useState } from "react";
import "./App.css";
import Card from "./Components/UI/Card";
import Weather from "./Components/Weather/Weather";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Card open={isOpen}>
        <Weather />
      </Card>
    </div>
  );
}

export default App;
