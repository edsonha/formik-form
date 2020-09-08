import React from "react";
import { withFormik } from "formik";

function App({ values, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.email}
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        value={values.password}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "default@email.com",
      password: password || "defaultPassword",
    };
  },
  handleSubmit(values) {
    console.log(values);
  },
})(App);

export default FormikApp;
