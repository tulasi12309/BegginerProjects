import React, { useState } from "react";
import "./PasswordGenerator.css";
import { getPasswordObj,generatePassword } from "./PasswordService";
function PasswordGenerator() {
  const [state, setState] = useState({
    generatedpassword: "",
    passwordLength: 20,
    symbol: false,
    number: false,
    lower: false,
    upper: false,
  });
  const updateInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const updateCheck = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const submit = (event) =>{
    event.preventDefault();
    let passwordObj = getPasswordObj(state);
    let thePassword=generatePassword(passwordObj,state.passwordLength)
    // console.log(thePassword);
    setState({...state, generatedpassword : thePassword})
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-header bg-warning p-3">
              <p className="h4">Password Generator</p>
            </div>
            <div className="card-body bg-warning">
              <form onSubmit={submit}>
                <div className="mb-2">
                  <div className="input-group">
                    <span className="input-group-text">Password</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Generated Password..."
                      value={state.generatedpassword}
                      onChange={updateInput}
                      name="generatedpassword"
                    />
                    <span className="input-group-text">
                      <i className="fa fa-clipboard"></i>
                    </span>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Password Length"
                      value={state.passwordLength}
                      onChange={updateInput}
                      name="passwordLength"
                      required={true}
                    />
                    <span className="input-group-text">Password Length</span>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <input type="checkbox" onChange={updateCheck} name="symbol"/>
                    </span>
                    <input
                      type="text"
                      placeholder="Symbols"
                      className="form-control"
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <input type="checkbox" onChange={updateCheck} name="number"/>
                    </span>
                    <input
                      type="text"
                      placeholder="Numbers"
                      className="form-control"
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <input type="checkbox" onChange={updateCheck} name="lower"/>
                    </span>
                    <input
                      type="text"
                      placeholder="Lower Case Letters"
                      className="form-control"
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <input type="checkbox" onChange={updateCheck} name="upper"/>
                    </span>
                    <input
                      type="text"
                      placeholder="Upper Case Letters"
                      className="form-control"
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    value="Generate"
                    className="btn btn-outline-dark"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
