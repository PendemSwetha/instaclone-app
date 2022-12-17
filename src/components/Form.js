import React from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css"
import Postview from "./postview";
const Form = () => {
  const navigate = useNavigate()
  const formSub = (e) => {
    e.preventDefault()
    const data = e.target
    const formData = new FormData(data);
    console.log(formData)
    try {
      fetch("https://insta-back-end.onrender.com/generatePost", { method: "POST", body: formData })
        .then((res) => {
          return res.json()
        }).then((data) => {
          console.log("Success");
          console.log(data);
        }).catch((err) => {
          console.log(err);
        })
        .finally(() => {
          navigate("/post")
        })
    }
    catch (e) {
      alert(e.message);
    }
  }

  return (
    <div>
      <Postview />
      <div className="form-holder">
        <form onSubmit={(e) => formSub(e)}>
          <div className='file-desc'>
            <input type="file" id="file" name="file" />
          </div>
          <div className="author-location">
            <input type="text" id="Author" placeholder="Author" name="Author" />
            <input type="text" id="Location" name="Location" placeholder="Location" />
          </div>
          <div className='file-desc'>
            <input type="text" id="description" placeholder="Description" name="description" />
          </div>
          <button type="submit" className="postButton">Post</button>
        </form>
      </div>
    </div>
  )
}
export default Form;