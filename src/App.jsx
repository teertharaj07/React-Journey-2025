
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
let userAge=18;
const canWatch=()=>{
  if(userAge>=18){
    return "Available for Adult"
  }
  else{
    return " not Available for child"

  }
}
// let userAge=17;

// let userAge=19;

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
        <button>{canWatch()}</button>
      </div>
    </div>
  );
 
}




