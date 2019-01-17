import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";

class Dashboard extends React.Component {
  state = {
    name: "",
    about: "",
    email: "",
    mobile: "",
    skype: "",
    website: "",
    address: "",
    country: "",
    facebook: "",
    twitter: "",
    linkedin: ""
  };

  // componentDidMount() {
  //   if (!this.props.auth.isAuthenticated) {
  //     this.props.history.push("/");
  //   }
  // }

  onInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* left section */}
          <div className="col-lg-2 col-md-2 col-sm-12 border-right pt-3">
            <div className="list-group">
              <NavLink
                to="/agent/dashboard"
                className="list-group-item list-group-item-action"
              >
                Profile
              </NavLink>
              <Link
                to="/agent/properties"
                className="list-group-item list-group-item-action"
              >
                Properties
              </Link>
              <Link
                to="/agent/add-property"
                className="list-group-item list-group-item-action"
              >
                Add New
              </Link>
            </div>
          </div>

          {/* right section */}
          <div className="m-auto col-lg-8 col-md-8 col-sm-12 pb-5  ">
            <div className="">
              <Link
                to="/agent/properties"
                className="btn btn-primary float-right"
              >
                <i className="fa fa-building" /> Total Properties 52
              </Link>
              <div className="display-4 my-5 text-center">Agent Profile</div>

              <form action="#">
                <div className="row mt-5">
                  {/* <!-- form left --> */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    {/* <!-- Basic info --> */}
                    <div className="basic-info border border-dark p-3">
                      <strong className="text-muted">Basic info</strong>
                      <div className="form-group">
                        <label htmlFor="name">Name :</label>
                        <input
                          type="text"
                          className="form-control is-valid"
                          placeholder="Agent title..."
                          name="name"
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputState">Country</label>
                        <select className="form-control">
                          <option defaultValue>Choose...</option>
                          <option>India</option>
                          <option>USA</option>
                          <option>UK</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Address :</label>
                        <textarea
                          className="form-control is-valid"
                          placeholder="address..."
                          name="address"
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="about">About :</label>
                        <textarea
                          className="form-control is-valid"
                          placeholder="about..."
                          name="about"
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                    </div>

                    {/* <!-- Contact info --> */}
                    <div className="contact-info border border-dark p-3 mt-3">
                      <strong className="text-muted">Contact info</strong>

                      <div className="form-group">
                        <label htmlFor="email">Email :</label>
                        <input
                          type="email"
                          className="form-control is-valid"
                          name="email"
                          placeholder="address..."
                        />
                        <div className="valid-feedback">Password incorrect</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="mobile">Mobile:</label>
                        <input
                          type="text"
                          className="form-control is-valid"
                          placeholder="full name..."
                          name="mobile"
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="skype">Skype:</label>
                        <input
                          type="text"
                          className="form-control is-valid"
                          placeholder="full name..."
                          name="skype"
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="website">Website :</label>
                        <input
                          type="text"
                          className="form-control is-valid"
                          name="website"
                          placeholder="website..."
                        />
                        <div className="valid-feedback">Password incorrect</div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- form right --> */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    {/* <!-- Social media --> */}
                    <div className="contact-info border border-dark p-3">
                      <strong className="text-muted">Social accounts :</strong>

                      <div className="form-group">
                        <label htmlFor="faebook">Facebook :</label>
                        <input
                          type="text"
                          className="form-control is-valid"
                          placeholder="facebook profile url..."
                          name="faebook"
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="twitter">Twitter :</label>
                        <input
                          type="text"
                          className="form-control is-valid"
                          placeholder="twitter profile link..."
                          name="twitter"
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="linkedin">LinkedIn :</label>
                        <input
                          type="text"
                          className="form-control is-valid"
                          placeholder="linkedin profile link..."
                          name="linkedin"
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                    </div>
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mx-3 mt-5"
                    value="Update"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Dashboard);
