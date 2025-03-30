import React from 'react'
import { useForm } from 'react-hook-form'
import axios from "axios";


export default function Form() {

  const { register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm()

  const onsubmit = (data) => {
    console.log(data)
    const { email, name, position } = data;
    // Create a new post object
    const newPost = {
      email: email,
      name: name,
      post: position
    };
    // Send a POST request to the API endpoint
    axios.post('http://localhost:8081/post', newPost)
      .then(response => {
        console.log('Post created:', response.data);
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
    // Reset the form after submission
  }

  return (
    <>
      <div className='container mt-5 p-5 mx-auto border border-2 rounded-3 shadow-lg'>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email"
            {...register("email", { required: true })}
             className="form-control"
              id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Enter Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              {...register("name", { required: true })}
               />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <select className="form-select" aria-label="Default select example"
              {...register("position", { required: true })} >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}
