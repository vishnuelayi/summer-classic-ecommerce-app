import React, { Component } from "react";

class Register extends Component {
  state = {
    first: "",
    last: "",
    username: "",
    password: "",
    confirm: "",
  };

  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({ ...fields });
  };

  render() {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[30%] h-[400px]">
          <text className="text-2xl">Register</text>

          <div className="flex mt-3 h-[50px] gap-1">
            <input
              className="border-[2px] rounded-lg w-[100%] outline-[#64CCC5] focus:border-[#64CCC5] ease-linear duration-200 p-2"
              placeholder="firstname"
              name="firstname"
              value={this.state.first}
              onChange={this.handleChange}
              required
            />

            <input
              className="border-[2px] rounded-lg w-[100%] outline-[#64CCC5] focus:border-[#64CCC5] ease-linear duration-200 p-2"
              placeholder="lastname"
              name="lastname"
              value={this.state.last}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="flex mt-3 h-[50px]">
            <input
              className="border-[2px] rounded-lg w-[100%] outline-[#64CCC5] focus:border-[#64CCC5] ease-linear duration-200 p-2"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="flex mt-3 h-[50px]">
            <input
              className="border-[2px] rounded-lg w-[100%] outline-[#64CCC5] focus:border-[#64CCC5] ease-linear duration-200 p-2"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="flex mt-3 h-[50px]">
            <input
              className="border-[2px] rounded-lg w-[100%] outline-[#64CCC5] focus:border-[#64CCC5] ease-linear duration-200 p-2"
              placeholder="confirm-password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
          </div>
          <input
            type="button"
            value="Register"
            className="btn mt-7 hover:scale-[1.02]"
          />
        </div>
      </div>
    );
  }
}

export default Register;
