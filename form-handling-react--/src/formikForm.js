import { Formik, Form, Feild , ErrorMessage } from "formik";
import * as Yup from "yup";


const FormikForm = () => {
    //    Define the initial form Values
     const initialValues = {
        username:"",
        email: "",
        password:""
     };
   
     //Define validation Schema using Yup


const validationSchema = Yup.object ({
    name:Yup.string().required("Username is required"),
    email:Yup.string()
    .email("Invalid email Format"),

    password: Yup.string()
   .min(6, "Password must be at least 6 characters")
   .required("Password is required"),
});


//This handles the form Submission
const handleSubmit = (values, {resetForm}) => {
    console.log("Form Submitted Succesfully:", values);
    alert("Registration succesfully!");
    resetForm(); //Clears from feilds
};


   //Build the Formik form Structure 

return (

<div style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem" }}>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* The Formik “Form” replaces our <form> tag */}
        <Form>
          {/* Username field */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Username:</label><br />
            <Feild
              type="text"
              name="username"
              placeholder="Enter username"
            />
            <div style={{ color: "red", fontSize: "0.9rem" }}>
              <ErrorMessage name="username" />
            </div>
          </div>

          {/* Email field */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Email:</label><br />
            <Field
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <div style={{ color: "red", fontSize: "0.9rem" }}>
              <ErrorMessage name="email" />
            </div>
          </div>

          {/* Password field */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Password:</label><br />
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <div style={{ color: "red", fontSize: "0.9rem" }}>
              <ErrorMessage name="password" />
            </div>
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>

);

};

export default FormikForm;