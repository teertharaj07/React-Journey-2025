**** Componets in react *****
-----------------------------------------------

In React, a component is essentially a JavaScriptfunction or class that returns JSX (JavaScript XML), a
syntax{extension that allows you to write HTML-like code inside JavaScript.JComponents arg the
building Blocks of any React application, allowing for the creation of complex and interactive user
interfaces through the assembly of isolated, reusable piece

* You can also use .js extension with React.js components but it's recommended to use .jsx to
differentiate between regular JavaScript Files and React.js components.

* There are two ways to create components in React.js:
  01. class Bassed Components
+ This is how components were created before functional components. 
   02.Functions Components:
   * this is modern and recommended way of writing react.js components.

   example 01.Class Baased Componets
     -------------------------------
     import React,{Componet}  from 'react;
      export class Welcome extents Componets{
        render(){
            return <h1>Hello,{this.props.name}!</h1>
        }
      }
      -------------------------------------
         example 02.Functional Baased Componets
     -------------------------------
     export function Welcome({name}){
        return  <h1>Hello,{name}!</h1>
     }
    -------------------------------------
    ***  Writting Our First React.js Component ***

*After that open App.jsx then import our newly created component and use it.

* If you save the file, you will immediately see the changes on the website.

* This is possible due to HMR or Hot Module Replacement which is given by Vite.
---vite v5.0.12 ready in 828 ms

  --> Local  https://localhost:5173/



  ===========React Componets===============
  const App = () => {
  return (
    <div>
      <img width="50%" height="50%" src="qot.jpg" alt="qot.jpg" />
      <h2>Name:Queen of Tears</h2>;<h3>Rating:8.2</h3>
      <p>
        summary:Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
        both at home and at work. But upon deciding his future, Hyun-woo pays a
        visit to his family.
      </p>
    </div>
  );
};

export default App;

------------------------  before using components in react  APP.jsx------
const App = () => {
    return (
        <div>

            <div>
                <img width="50%" height="50%" src="qot.jpg" alt="qot.jpg" />
                <h2>Name:Queen of Tears</h2>;<h3>Rating:8.2</h3>
                <p>
                    summary:Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
                    both at home and at work. But upon deciding his future, Hyun-woo pays a
                    visit to his family.
                </p>
            </div>


            <div>
                <img width="50%" height="50%" src="qot.jpg" alt="qot.jpg" />
                <h2>Name:Queen of Tears</h2>;<h3>Rating:8.2</h3>
                <p>
                    summary:Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
                    both at home and at work. But upon deciding his future, Hyun-woo pays a
                    visit to his family.
                </p>
            </div>

            <div>
                <img width="50%" height="50%" src="qot.jpg" alt="qot.jpg" />
                <h2>Name:Queen of Tears</h2>;<h3>Rating:8.2</h3>
                <p>
                    summary:Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
                    both at home and at work. But upon deciding his future, Hyun-woo pays a
                    visit to his family.
                </p>
            </div>

            <NetflixSeries/>

        </div>
    );
};

export default App;

const NetflixSeries=()=>{
    return(
        <div>

            <div>
                <img width="50%" height="50%" src="qot.jpg" alt="qot.jpg" />
                <h2>Name:Queen of Tears</h2>;<h3>Rating:8.2</h3>
                <p>
                    summary:Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
                    both at home and at work. But upon deciding his future, Hyun-woo pays a
                    visit to his family.
                </p>
            </div>

        </div>
    )
}
----------------------------------------------------





------------------------  after using components in react  APP.jsx------
const App = () => {
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
};

export default App;

//* Netflix components
const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img width="50%" height="50%" src="qot.jpg" alt="qot.jpg" />
        <h2>Name:Queen of Tears</h2>;<h3>Rating:8.2</h3>
        <p>
          summary:Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
          both at home and at work. But upon deciding his future, Hyun-woo pays
          a visit to his family.
        </p>
      </div>
    </div>
  );
};
-------------------------------------------------------------
