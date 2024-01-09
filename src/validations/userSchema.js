import { object, string } from "yup";

export const registerSchema = object().shape({
  name: string()
    .min(1, "Name should be greater than 1 characters!")
    .max(16, "Name should be less than 17 characters!")
    .required("Name field is required!"),
  email: string().required("Email field is required!"),
  password: string()
    .min(8, "Password should be minimum 8 character")
    .max(16, "Password should be max 16 character!")
    .required("Password field is required!"),
});
