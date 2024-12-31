****7: React Fragments: Remove unwanted Nodes & Speed Up Rendering | React v19 Tutorial in Hindi ******
------------------------------------
why React Fragments?
because react components return only one jsx element do not return multiple elements that proble resolve the fragments

React Fragments help streamline component structures by grouping children without extra DOM nodes, enhancing performance. There are two main ways to use them: React.Fragment which allows key assignments for dynamic lists, and the concise syntax for simpler cases. Both methods prevent unnecessary DOM elements, leading to cleaner, faster React applications.
--------------------------------------------
======== React Fragments================
* In React.js, a component can't return multiple elements without a wrapper div.
exapmle:- <div> componets code </div>
* You can do this to imitate it: Using an Array of Elements with Keys
« return [<p>Ram</p>, <strong>20</strong>];
+ But it's tedious, to fix this React 16 introduced Fragments, which allow
cpmponents to return multiple elements without adding extra nodes to the DOM

* import { Fragment } from “react”;
return <Fragment> // </Fragment>
*I Alternatively, you can also use its shorthand syntax:
<> componets code</>


-------------------------------------------------------
Why can’t we return multiple elements at the
same time?
* As after JSX is compiled it is converted
to normal JavaScript object, you can't
return multiple JavaScript object at the
same time.
* return ( jsx(...), jsx(...) );
------------------------------------implimatation of fragmetion---------
there are three way:
01 Array with keys:-
const App = () => {
  return ([<NetflixSeries key="1" />,<NetflixSeries key="2" />,<NetflixSeries key="3" />]
    
    );
};

export default App;

02 React.Fragment:-
// import React from "react";
import { Fragment } from "react";
const App = () => {
  return (
          // <React.Fragment>
          // <NetflixSeries />
          // <NetflixSeries />
          // </React.Fragment> 
   
          <Fragment>
     <NetflixSeries />
     <NetflixSeries />
          </Fragment>
    );
};

-------
const App = () => {
  return (
          // <React.Fragment>
          // <NetflixSeries />
          // <NetflixSeries />
          // </React.Fragment> 
   
          <>
     <NetflixSeries />
     <NetflixSeries />
          </>
    );
};

export default App;

