export const CLIENT_ROUTES = {
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
  CONFIRM_SIGNUOUT: "/confirm_signout",
  CREATE_COMMUNITY: "/create_community",
  PASSWORD_RESET: "/password_reset",

  USER_PAGE: (username = ":username") => `/user/${username}`,
};
