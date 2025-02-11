import React, { Component } from 'react';
import './form.css';

class SimpleForm extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  

  handleSave = () => {
    const { name, email, password } = this.state;
    alert(`Saved...!!
    Name: ${name}
    Email: ${email}
    Password: ${password}`);
  }

  cancelCourse = () => {
    this.setState({
      name: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Simple Form</h2>
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
            />
          </div>
          <br/>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
            
            />
          </div>
          <br/>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={(e) =>{
    
                this.setState({"password":e.target.value});
              }}
            />
          </div>
          <br/>
          <button type="button" onClick={this.handleSave}>Save</button>
          <button type="button" name="cancelCourse" value="cancel" onClick={this.cancelCourse}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default SimpleForm;
