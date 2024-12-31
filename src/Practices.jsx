export const Practices=()=>{
    // const students=[];
    // const students=[1];
    // const students=[15,6];
    const students=[];
    console.log(Boolean(students.length));
    
return (
    <>
    {/* <p>{students.length && "no students found"}</p> */}

    {/* 1st */}
    {/* <p>{students.length===0 && "no students found"}</p> */}

    {/* 2nd  */}

    {/* <p>{!students.length && "no students found"}</p> */}

    
    {/* 3nd  */}
    <p>{Boolean(students.length) && "no students found"}</p>
    <p>Number of students:{students.length}</p>
    </>
);
}