***** #9: React Conditional rendering in JSX : React v19 Tutorial in Hindi ***
-------------------------
****Conditionals in JSX****

* You can either return a JSX early or you can use ternary operators for
conditionals in JSX.

* return <p>{ age >= 18 ? “Adult” : “Minor” }</p>

* return <p>{ age >= 18 && “You can vote” }</p> y

* return <p>{ username || “Guest” }</p>


example:-
const App = () => {
  return (
         <>
     <NetflixSeries />
     <NetflixSeries />
          </>
    );
};

export default App;

//* Netflix components
const NetflixSeries = () => {
// write here javascript code:-
let name="Queen of Tears";
let rating=8.2;
let summary="Baek Hyun-woo and Hong Hae-in navigate a tense relationship,both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family."
const returnGenver=()=>{
  return "romantic";
}

// let userAge=23;
// let userAge=17;
let userAge=18;
  return (
    <div>
      <div>
        <img width="50%" height="50%" src="qot.jpg" alt="qot.jpg" />
        <h2>Name:{name}</h2>
        <h3>Rating:{rating}</h3>
        <p>
          summary:{summary}
        </p>
        <p>view:-{234+67}K</p>
        <p>Genre:{returnGenver()}</p>
        <button>{userAge>=18?"watch Now":"You can't watch"}</button>
      </div>
    </div>
  );
};
--------------------------------
