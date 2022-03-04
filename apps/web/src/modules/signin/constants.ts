import { CLIENT_ROUTES } from "shared/routes";

export const SignInFormInputs = [
  { type: "email", id: "email", name: "Email" },
  {
    type: "password",
    id: "password",
    name: "Password",
    additionalLink: {
      title: "Forgot password?",
      path: CLIENT_ROUTES.PASSWORD_RESET,
    },
  },
];
