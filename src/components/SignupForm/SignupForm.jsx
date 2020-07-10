import React, {Component} from 'react';

class SignupForm extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      email: '',
      password: ''
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddUser(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };


  render() {
    return (
      <>
        <h1>Add User Name</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>User's Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>User's Email (required)</label>
            <input
              className="form-control"
              name="email"
              value={this.state.formData.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>User's password (required)</label>
            <input
              className="form-control"
              name="password"
              value={this.state.formData.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD User
          </button>
        </form>
      </>
    );
  }
}

export default SignupForm;
