import React from "react";
import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core";

function NewForm() {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "bob" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);

          //make async call
          console.log(data);

          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
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
