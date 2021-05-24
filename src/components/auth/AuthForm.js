import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  loginOperation,
  registerOperation,
} from "../../redux/auth/authOperations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import schema from "./validator/validator";
import { Button } from "@material-ui/core";

class AuthForm extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <h1>
            {this.props.location.pathname === "/register"
              ? "Registration"
              : "Login"}
          </h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={schema}
            onSubmit={(values) => {
              this.props.location.pathname === "/register"
                ? this.props.registerOperation(values)
                : this.props.loginOperation(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                Email
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                Password
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                {/* <button type="submit" disabled={isSubmitting}>
                  Submit
                </button> */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="outlined"
                  color="primary"
                >
                  {this.props.location.pathname === "/register"
                    ? "Registration"
                    : "Login"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  }
}

export default connect(null, { registerOperation, loginOperation })(
  withRouter(AuthForm)
);
