import React from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Checkbox } from "@material-ui/core";

function NewForm() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "bob",
          lastName: "default",
          isTall: true,
          cookies: [],
          yogurt: "",
        }}
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
            <div>isTall :</div>
            <div>
              <Field name="isTall" type="checkbox" as={Checkbox} />
            </div>
            <div>Cookies :</div>
            <Field
              name="cookies"
              type="checkbox"
              value="chocolate chip"
              as={Checkbox}
            />
            <Field
              name="cookies"
              type="checkbox"
              value="sugar chip"
              as={Checkbox}
            />
            <Field
              name="cookies"
              type="checkbox"
              value="cheese chip"
              as={Checkbox}
            />
            <div>Yogurt : </div>
            <Field name="yogurt" type="radio" value="apple" />
            <Field name="yogurt" type="radio" value="banana" />
            <Field name="yogurt" type="radio" value="cheery" />
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
