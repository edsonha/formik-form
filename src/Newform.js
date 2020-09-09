import React from "react";
import { Formik, Field, Form } from "formik";
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
        {({ values, isSubmitting }) => (
          <Form>
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
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewForm;
