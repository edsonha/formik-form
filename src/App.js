import React from "react";
import { withFormik } from "formik";

function App({ values, handleChange }) {
  return (
    <input
      value={values.email}
      type="email"
      name="email"
      placeholder="Email"
      onChange={handleChange}
    />
  );
}

const FormikApp = withFormik({
  mapPropsToValues({ email }) {
    return {
      email: email || "default@email.com",
    };
  },
})(App);

export default FormikApp;
