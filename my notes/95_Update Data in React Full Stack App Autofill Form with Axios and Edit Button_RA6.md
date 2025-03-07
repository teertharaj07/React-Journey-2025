****95:Update Data in React Full Stack App: Autofill Form with Axios and Edit Button RA6****
In this video, learn how to implement the first part of an update feature in a React full stack app using Axios. We'll show how to autofill form fields when a user clicks an edit button on a card, changing the form's behavior from adding new data to editing existing data. A practical tutorial for building dynamic and interactive CRUD apps. 💸

before lecture we all ready covered three type of http mathod

01.HTTP GET(READ) MATHOD
02.HTTP DELETE METHOD
03.HTTP POST (CREATE) METHOD


----HTTP PUT (UPDATE) REQUEST IN AXIOS

put mathod and
patch mathod



hindi notes--
is lecture me ham edit button ki function banayenge so aaj ka task h jab user post me edit button ko click karo to vah post edit ho paye it means user jab edit button ko click kare to post ka data matalab data like title and body input field me chal jayega and jo  so kal task task hoga ki jab post ka data input field me jaye to janha add button thi vanha edit button aaja ye. so meet you moon 

--best of luck teerth👍👍👍👍


-------------------POsts.jsx-----------------
import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "../App.css";
import { Form } from "./Form";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});
  // console.log(getPost());

  const getPostData = async () => {
    const res = await getPost();
    console.log(res);
    console.log(typeof res);
    console.log(res.data);
    console.log(typeof res.data);
    console.log(res.data);
    setData(res.data);
    // console.log(res.data[1]);
    // console.log(res.data[1].id);
  };

  useEffect(() => {
    getPostData();
  }, []);

  //  function to delete Post
  const handleDeletePost = async (id) => {
    // const res = await deletePost(id);
    // console.log(res);

    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          // return curPost.id===id;
          return curPost.id !== id;
        });
        setData(newUpdatedPosts);
      } else {
        console.log("Failed to delete the post :", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // update functionality
  const handleUpdatePost = (curElem) => {
    setUpdateDataApi(curElem);
  };

  return (
    <>
      <section className="section-form">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>

      <section className="section-post">
        <ol>
          {data.map((curElem) => {
            const { id, body, title } = curElem;
            return (
              <li key={id}>
                <p>{id}</p>
                <p>Title:{title}</p>
                <p> Body:{body}</p>
                <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeletePost(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
------------------------Form.jsx-----------------
import { useEffect, useState } from "react";
import { postData } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      // console.log(prev);
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addPostData = async () => {
    const res = await postData(addData);
    console.log("response", res);

    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  // form summision
  const handleformSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };

  return (
    <form onSubmit={handleformSubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add Title"
          value={addData.title}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoComplete="off"
          placeholder="Add Post"
          id="body"
          name="body"
          value={addData.body}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};
