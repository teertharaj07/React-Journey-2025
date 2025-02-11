export const ParentComponet = () => {
  //   return <h1>Hello ParentComponent</h1>;

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-white-900 text-white`}
>
      <h1>Component A</h1>
      <ChildComponent data="React JS" />
    </section>
  );
};

const ChildComponent = (props) => {
  return (
    <>
      <h1>Hello , I am Component B</h1>
      <GrandChildComponent data={props.data} />
    </>
  );
};

const GrandChildComponent = (prop) => {
  return (
    <>
      <h1>Hello , I am Component C</h1>
      <GrandGrandChildComponent data={prop.data} />
    </>
  );
};

const GrandGrandChildComponent = (prop) => {
  return (
    <>
      <h1>Hello , I love {prop.data}</h1>
    </>
  );
};
