****80:Active Links in React Navigation: Enhance User Experience with Clear Page Indicators 78 video RR5*****

In this video, we'll explore how to implement an active class in the navigation bar of your React app, enhancing user experience by visually indicating the current page. You'll learn three different methods to add active link styles using React Router, including the use of className, style props, and custom functions. By the end of this tutorial, you'll know how to create a more intuitive navigation system in your React projects. 💸

-------------------------




    -----Active Link In Rract App----
01. using default active
      .active {
    color: #535bf2;
  }



--02. using function manupulate the class
before

  <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>


after
<li className="nav-item">
<NavLink to="/" className={({isActive})=> isActive ? "nav-link active":"navlink"
                  
}>
 Home
</NavLink>
</li>

------


03.using style attribute 
               <li className="nav-item">
                <NavLink to="/About" style={({isActive})=>{
                  return {
                    color:isActive?"blue":"black",
                  };
                }}>
                  about
                </NavLink>
              </li>


              
----------

summary :-  so in this section we covered the how to handle active link it means when user click the any navbar link then what do you to do with this active link and we completed the three way to handle active link in react router 01. is using active classes when user click the any link so react router by default return on agrument as any link active or not if link is activated than its return true but not activated it return false so bassed that functionality we can add on the active class there defined in the App.css .02. using function ans conditional styling .03 using inline css and style attribute and  ternory operator