import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function Oldform({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Join our newsletter
      </label>
      <Field component="select" name="plan">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
        <option value="special">Special</option>
      </Field>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
}

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "default@email.com",
      password: password || "defaultPassword",
      newsletter: newsletter || true,
      plan: plan || "premium",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid custom")
      .required("Email is required custom"),
    password: Yup.string()
      .min(9, "Password not long custom")
      .required("Password is required custom"),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === "database@email.com") {
        setErrors({ email: "That email is already taken" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 3000);
  },
})(Oldform);

export default FormikApp;
