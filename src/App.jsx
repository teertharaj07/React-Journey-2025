// import { EventProps } from "./components/EventProps";
// import NetflixSeries from "./components/NetflixSeries";
// import "./components/netflix.css"
// import "./components/netflix.module.css";
// import {EventHandling} from "./components/EventHandling";
import {EventPropagation} from "./components/EventPropagation";

const App = () => {
  return (
    <section className="container">
      {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}

      <EventPropagation />
    </section>
  );
};

export default App;
