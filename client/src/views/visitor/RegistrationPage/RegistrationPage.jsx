import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as actions from "../../../store/actions";
import { Input } from "../../../components";
import RegistrationPageUI from "./RegistrationPageUI";

class RegistrationPage extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/agent/dashboard");
    }
  }

  componentWillUnmount() {
    this.props.clearError();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onInputChange = ({ currentTarget }) => {
    this.setState({
      [currentTarget.name]: currentTarget.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const registrationDetail = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(registrationDetail, this.props.history);
  };

  render() {
    if (Object.keys(this.props.message.msg).length > 0) {
      toast.success(this.props.message.msg);
    }

    if (this.props.errors.error) {
      toast.error(this.props.errors.error);
    }

    return (
      <RegistrationPageUI onFormSubmit={this.onFormSubmit}>
        <Input
          label="Your Name"
          placeholder="name..."
          name="name"
          onChange={this.onInputChange}
          value={this.state.value}
          error={this.props.errors.name}
        />
        <Input
          label="Your Email"
          placeholder="email..."
          name="email"
          onChange={this.onInputChange}
          value={this.state.value}
          error={this.props.errors.email}
        />

        <Input
          label="Password"
          type="password"
          placeholder="password..."
          name="password"
          onChange={this.onInputChange}
          value={this.state.value}
          error={this.props.errors.password}
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="confirm password..."
          name="password2"
          onChange={this.onInputChange}
          value={this.state.value}
          error={this.props.errors.password2}
        />
      </RegistrationPageUI>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message,
    errors: state.errors,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(RegistrationPage);
