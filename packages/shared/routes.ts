export const CLIENT_ROUTES = {
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
  CONFIRM_SIGNUOUT: "/confirm_signout",
  CREATE_COMMUNITY: "/create_community",
  CREATE_POST: "/create_post",
  PASSWORD_RESET: "/password_reset",
  SETTINGS_PROFILE_PAGE: "/settings/profile",

  USER_PAGE: (username = ":username") => `/user/${username}`,
  POST_PAGE: (id = ":id") => `/post/${id}`,
};
