import {State} from "./components/hooks/State.jsx";
import "./components/EV.css";

const App = () => {
  return (
    <section className="container">
      <State />
      <SiblingComponent />
    </section>
  );
};

export default App;

function SiblingComponent() {
  console.log("sibiling Components renderd");
  return <div>Sibling Componets</div>
  
}