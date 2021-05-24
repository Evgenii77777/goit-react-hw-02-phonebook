import * as yup from "yup";

let schema = yup.object().shape({
  email: yup.string().email().required(),

  password: yup
    .string("Need string")
    .required("Vvedite password")
    .min(6, "min 6 ")
    .max(12, "max 12"),
  // .matches(
  //   /^(?=.*[0-9a-zA-Z!@#$%^&*]{6,})$/,
  //   "Только такие символы : 0-9a-zA-Z!@#$%^&*"
  // ),
});
export default schema;
