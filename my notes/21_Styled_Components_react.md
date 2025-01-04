****21: Styled Components in React JS for Clean and Dynamic UI****

Welcome, we will see What are Styled Components in React JS? Styled Components is a library for React and React Native that allows you to use component-level styles in your application. It leverages tagged template literals to style your components, integrating CSS directly into your JavaScript code. This approach maintains the modularity and reusability of your styles, ensuring a cleaner and more organized codebase. 


.......npm ----package---styled-components


👍👍👍👍👍👍todo you can watch styled components seires


step 01. download styled components from npm:-
npm i styled-components

pacakage .json --depency
  "styled-components"::"^6.1.11"

  // import styled from "styled-components";



  ===================ppt.1==============

=======how many way to use styled components in the project==========

     --- 01--Using Template Literals--------------

 
  const Button = styled.button`    ----button(tagname)

 color: grey;`

1: This is a styled component, which is a React component created using styled-components. It is both a React component and a styled component. As a React component, it can be used in JSX. As a styled component, it has styles directly attached to it.

2: styled is an object provided by the library, and button is a method on that object.


----break 4.38======




  ===================ppt.2==============
 ----02------Using Styled objects-------

 const Button =styled.button({
color:gray,
 });

 
1: This is a styled component, which is a React component created using styled-components. It is both a React component and a styled component. As a React component, it can be used in JSX. As a styled component, it has styles directly attached to it.

2: styled is an object provided by the library, and button is a method on that object.



-------------using object-------------------

define:-const ButtonTeerth = styled.button(
      
      {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${ rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var( --bg-color)",
        fontWeight: "bold",
        cursor: "pointer",
        // backgroundColor:"blue",
      }

    );




          
          
  use:- <ButtonTeerth>watch now</ButtonTeerth>


-------------------------------------------------------


  css madule========styled components two way


  -0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0----------00--00--0


  -----------------using temple literlas------

  //***** to write javascript logic in template literal(css):-In styled-components,you can pass a function within the template literal to dynamically set CSS praperties based on props or state;
   

   define:-  //*using template literls
  const ButtonTeerth = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    fontsize: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: "var( --bg-color)";
    fontweight: "bold";
    cursor: "pointer";
  `;


          
  use:- <ButtonTeerth rating={ratingClass}>watch now</ButtonTeerth>
//----------------------------------------------------------------

defination:-  // template literal
  const Rating=styled.h3`
    font-size:1.6rem;
    color:#7dcea0;
    text-transform:capitalize;
  `;





  use:-    <Rating>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>