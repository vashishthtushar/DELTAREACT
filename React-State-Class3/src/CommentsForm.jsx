import { useState } from "react";
import { useFormik } from 'formik';


const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'username cannot be empty!';
  } 

  return errors;
};

export default function CommentsForm({addNewComment}) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: '',
      remarks: '',
      rating: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   console.log(formData);
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>&nbsp;&nbsp;
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null}
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>&nbsp;&nbsp;
        <textarea
          name="remarks"
          id="remarks"
          placeholder="Add few remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>&nbsp;&nbsp;
        <input
          type="number"
          id="rating"
          name="rating"
          placeholder="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
          min={1}
          max={5}
        />
        <br />
        <br />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
