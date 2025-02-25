
***82: useNavigate Hook in React Router: Seamless Page Redirection & Back Button Setup 81 video RR7******

In this video, learn how to effectively use the useNavigate hook in React Router to create a seamless navigation experience. We’ll guide you through creating a “Go Back” button for your error pages and demonstrate how useNavigate can be used for smooth page redirection. Perfect for enhancing user experience in your React app. 💸

in React we have multiple hooks in react

01.useSatate()
02.useEffect()
03.useReducer()
04.useContext()
05.useMemo()
06.useCallback() and other

but  in react router  we have multiple hooks

01.useRoutesError ---for creating ERROR PAGE
02.useNavigate


 const navigate=useNavigate();

const handleGoBack=()=>{
  //  navigate(-1);
   navigate("/");
}



<button className="btn" onClick={handleGoBack}>
          Go Back
        </button>
