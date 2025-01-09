import "./EV.css";

export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey , ${user}`);
  };

  const handleHover = () => {
    alert(`Hey Thanks for hovering me `);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("teerth")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onClick, onMouseEnter } = props;

  const handleGreeting = () => {
    console.log(`Hey User, Welcome`);
    props.onClick();
  };
  return (
    <>
      {/* <button onClick={props.onClick}> click me</button>
      <button onMouseEnter={props.onMouseEnter}>Hover me</button>

      <button onClick={handleGreeting}> Greeting</button> */}

      <button onClick={onClick}> click me</button>
      <button onMouseEnter={onMouseEnter}>Hover me</button>

      <button onClick={handleGreeting}> Greeting</button>
    </>
  );
};
