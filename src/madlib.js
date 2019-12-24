import React from "react";

//import CustomInput from "./input.js"
import "./styles/style.scss";

class MadLibs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        field01: "",
        field02: "",
        field03: "",
        field04: "",
        field05: "",
        field06: "",
        field07: ""
      }
    };
  }

  // handle set in nested objects
  handleChange = e => {
    e.preventDefault();
    const newState = Object.assign({}, this.state);
    newState.form[e.target.name] = e.target.value;
    this.setState(newState);
  };

  // clear state in nested object
  handleClear = e => {
    e.preventDefault();

    let form = Object.assign({}, this.state.form);
    Object.keys(form).map((key, index) => {
      form[key] = "";
      return index;
    });

    this.setState({ form });
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group col-md-6">
            <label>Adjective:</label>
            <input
              class="form-control"
              type="text"
              name="field01"
              value={this.state.form["field01"]}
              onChange={this.handleChange.bind(this)}
            />

            <label>Noun01</label>
            <input
              class="form-control"
              type="text"
              name="field02"
              value={this.state.form["field02"]}
              onChange={this.handleChange.bind(this)}
            />

            <label>Relative</label>
            <input
              class="form-control"
              type="text"
              name="field03"
              value={this.state.form["field03"]}
              onChange={this.handleChange.bind(this)}
            />

            <label>Noun02:</label>
            <input
              class="form-control"
              type="text"
              name="field04"
              value={this.state.form["field04"]}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Verb:</label>
            <input
              class="form-control"
              type="text"
              name="field05"
              value={this.state.form["field05"]}
              onChange={this.handleChange.bind(this)}
            />

            <label>Noun03:</label>
            <input
              class="form-control"
              type="text"
              name="field06"
              value={this.state.form["field06"]}
              onChange={this.handleChange.bind(this)}
            />

            <label>Noun04:</label>
            <input
              class="form-control"
              type="text"
              name="field07"
              value={this.state.form["field07"]}
              onChange={this.handleChange.bind(this)}
            />
          </div>
        </form>

        <button
          type="submit"
          className="btn btn-primary mb-2 "
          onClick={this.handleClear.bind(this)}
        >
          Click Me to ClearAll
        </button>

        <div class="display">
          <p>
            I HAVE BEEN A VERY _ {this.state.form.field01} _
            {this.state.form.field02} THIS YEAR! ALWAYS HELP MY _
            {this.state.form.field03} WITH CHORES AROUND THE_
            {this.state.form.field04} IT'S MY JOB TO
            {this.state.form.field05} THE _{this.state.form.field06}
            AND TAKE OUT THE _ {this.state.form.field07} EVERY DAY.
          </p>
        </div>
      </div>
    );
  }
}

export default MadLibs;
