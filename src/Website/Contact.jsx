import React, { useState } from "react";

const Contact = () => {
  const [count, setcount] = useState({
    fname: "",
    number: "",
    email: "",
    message: "",
  });

  const ChnageFun = (event) => {
    const { name, value } = event.target;

    setcount((preval) => {
      return { ...preval, [name]: value };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name is ${count.fname},My Mobile No is ${count.number},and email ${count.email} Here is want to say ${count.message}`
    );
  };
  return (
    <>
      <div className="">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fname"
                  value={count.fname}
                  onChange={ChnageFun}
                  placeholder="Enter Name"
                />
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="number"
                    value={count.number}
                    onChange={ChnageFun}
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={count.email}
                  onChange={ChnageFun}
                  placeholder="Enter Email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={count.message}
                  onChange={ChnageFun}
                ></textarea>
              </div>
              <div class="col-12 mb-3">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
