import React from "react";
import { Formik, Field, Form, useField } from "formik";
import {
  TextField,
  Button,
  Checkbox,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

function NewForm() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "default",
          isTall: true,
          cookies: [],
          yogurt: "",
        }}
        validate={(values) => {
          const errors = {};
          if (values.firstName.includes("bob")) {
            errors.firstName = "no bob";
          }
          return errors;
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);

          //make async call
          console.log(data);

          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, errors }) => (
          <Form>
            <div>
              <MyTextField
                placeholder="First Name"
                name="firstName"
                type="input"
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
            <MyRadio name="yogurt" type="radio" value="apple" label="apple" />
            <MyRadio name="yogurt" type="radio" value="banana" label="banana" />
            <MyRadio name="yogurt" type="radio" value="cheery" label="cheery" />
            <div>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewForm;
