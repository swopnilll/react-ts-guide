import ReactDOM from "react-dom/client";
import Parent from "./props/Parent";
 
// Get a reference to the div with ID root
const el = document.getElementById("root");
 
// Tell React to take control of that element
const root = ReactDOM.createRoot(el!);
 
// Create a component
const App = () => {
  return (
    <div>
     <Parent />
    </div>
  );
};
 
//Show the component on the screen
root.render(<App />);