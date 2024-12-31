****8: Dynamic Values in JSX: Injecting JavaScript into HTML | React v19 Tutorial ****
---------------

==========Dynamic Value in JSX

* You can add any variables of your component in JSX using {} syntax.
* function MyComponent(){
const value = “Hey”;
return <p>{value}</p>;
}

* JSX allows you to write JavaScript expressions inside curly braces.this
includes operations, function calls, and other JavaScript exprestion that produce a value.

« return <div>The result is: {1 + 2 + 3}</div>;

---------------------------------------
summary:-Welcome, Explore the concept of dynamic values in React JS, allowing applications to adapt and respond in real-time using variables, expressions, and function calls in JSX. Understand how these elements dynamically update during program execution, enhancing flexibility and interactivity in user interfaces. Ideal for beginners interested in mastering dynamic programming within React JS environments. 

01. dynamic values using variables calls in Jsx
02. dynamic values using xpressions calls in Jsx
03. dynamic values using function calls in JSX

01. dynamic values using variables calls in Jsx:-
//* Netflix components
const NetflixSeries = () => {
// write here javascript code:-
let name="Queen of Tears";
let rating=8.2;
let summary="Baek Hyun-woo and Hong Hae-in navigate a tense relationship,both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family."

  return (
    <div>
      <div>
        <img width="50%" height="50%" src="qot.jpg" alt="qot.jpg" />
        <h2>Name:{name}</h2>
        <h3>Rating:{rating}</h3>
        <p>
          summary:{summary}
        </p>
      </div>
    </div>
  );
};

------------------------
02. dynamic values using epressions calls in Jsx;-
const NetflixSeries = () => {
// write here javascript code:-
let name="Queen of Tears";
let rating=8.2;
let summary="Baek Hyun-woo and Hong Hae-in navigate a tense relationship,both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family."

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
      </div>
    </div>
  );
};
--------------------------------
03. dynamic values using function calls in JSX
const NetflixSeries = () => {
// write here javascript code:-
let name="Queen of Tears";
let rating=8.2;
let summary="Baek Hyun-woo and Hong Hae-in navigate a tense relationship,both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family."
const returnGenver=()=>{
  return "romantic";
}
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
      </div>
    </div>
  );
};
-------------
04.codition in jsx