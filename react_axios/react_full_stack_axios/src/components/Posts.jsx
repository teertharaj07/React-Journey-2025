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
