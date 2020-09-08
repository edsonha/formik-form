import React from "react";
import { withFormik, Form, Field } from "formik";

function App() {
  return (
    <Form>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </Form>
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
