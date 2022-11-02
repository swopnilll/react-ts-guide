import ReactDOM from "react-dom/client";

import FindUser from "./state/find-user/FindUser";
 
// Get a reference to the div with ID root
const el = document.getElementById("root");
 
// Tell React to take control of that element
const root = ReactDOM.createRoot(el!);
 
// Create a component
const App = () => {
  return (
    <div>
    <FindUser />
    </div>
  );
};
 
//Show the component on the screen
root.render(<App />);