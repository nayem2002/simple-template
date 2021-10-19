import React, { useState } from 'react';

const Contact = () => {
  const [inputValue, setInputValu] = useState({
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    country: '',
    zip: '',
  });

  const hendelInput = (event) => {
    const { name, value } = event.target;

    setInputValu((carent) => {
      return {
        ...carent,
        [name]: value,
      };
    });
  };

  const dataSubmit = async (e) => {
    e.preventDefault();
    
    const {email, password ,address ,address2,city ,country ,zip} = inputValue;

    if(email && password && address && address2 && city && country && zip){
    const res = await fetch('https://my-web-ac4a3-default-rtdb.firebaseio.com/userData.json',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json",

      },
      body: JSON.stringify({
        email, password ,address ,address2,city ,country ,zip
      })
    });
    
    if(res){
      alert('Data Submited')
    }else{
      alert('Somthing is rong try agin')
    }

    setInputValu({
      email: '',
      password: '',
      address: '',
      address2: '',
      city: '',
      country: '',
      zip: '',
    });
  }else{
    alert('Please fill the data')
  }}

    
  

  return (
    <>
      <div className="container contact-style" id="contact">
        <div className="row">
          <div className="col-5 collam">
            <h4> Connect With Our Sales Team.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, ea.
            </p>
            <img src="image/5.png" alt="image" className="img-fluid mt-3" />
          </div>
          <div className="col-6 ml-5 mt-3 collam input-style">
            <form onSubmit={dataSubmit}>
              <div class="form-row mb-3">
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    autoComplete="off"
                    value={inputValue.email}
                    name="email"
                    onChange={hendelInput}
                    placeholder="Email"
                  />
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="password"
                    class="form-control"
                    autoComplete="off"
                    value={inputValue.password}
                    name="password"
                    onChange={hendelInput}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="form-group pb-3">
                <input
                  type="text"
                  class="form-control"
                  autoComplete="off"
                  value={inputValue.address}
                  name="address"
                  onChange={hendelInput}
                  placeholder="Present address"
                />
              </div>
              <div class="form-group pb-3">
                <input
                  type="text"
                  class="form-control"
                  autoComplete="off"
                  value={inputValue.address2}
                  name="address2"
                  onChange={hendelInput}
                  placeholder="Parmanent address"
                />
              </div>
              <div class="form-row pb-3">
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    autoComplete="off"
                    value={inputValue.city}
                    name="city"
                    onChange={hendelInput}
                    placeholder="city"
                  />
                </div>
                <div class="form-group col-md-4">
                  <select
                    class="form-control"
                    name="country"
                    value={inputValue.country}
                    onChange={hendelInput}
                  >
                    <option selected>Your country</option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>pakistan</option>
                    <option>United State</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <input
                    type="text"
                    value={inputValue.zip}
                    name="zip"
                    onChange={hendelInput}
                    placeholder="zip"
                    autoComplete="off"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" />
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <button type="submit" class="btn simillar-button mt-1">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
