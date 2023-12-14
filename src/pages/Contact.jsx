import React from "react";
import Helmet from "../components/Helmet/Helmet";
const Contact = () => {
  return  (
    <div>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    <form className="form" >
    <div className="form__group">
      <input
        type="text"
        placeholder="Enter your name"
        
        required
      />
    </div>

    <div className="form__group">
      <input
        type="text"
        placeholder="Enter your email"
       
        required
      />
    </div>

    <div className="form__group">
      <textarea
        rows={5}
        type="text"
        placeholder="Write your review"
        
        required
      />
    </div>

    <button type="submit" className="addTOCart__btn">
      Submit
    </button>
  </form>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  </div>
  
  )
};

export default Contact;