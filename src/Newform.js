import React from "react";
import { Formik, Field } from "formik";
import { TextField, Button } from "@material-ui/core";

function NewForm() {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "bob", lastName: "default" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);

          //make async call
          console.log(data);

          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                placeholder="First Name"
                name="firstName"
                type="input"
                as={TextField}
              />
            </div>
            <div>
              <Field
                placeholder="Last Name"
                name="lastName"
                type="input"
                as={TextField}
              />
            </div>
            <div>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default NewForm;
