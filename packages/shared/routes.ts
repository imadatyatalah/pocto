export const CLIENT_ROUTES = {
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
  CONFIRM_SIGNUOUT: "/confirm_signout",
  PASSWORD_RESET: "/password_reset",

  CREATE_COMMUNITY: "/create_community",
  CREATE_POST: "/create_post",

  SETTINGS_PROFILE_PAGE: "/settings/profile",
  SETTINGS_ACCOUNT_PAGE: "/settings/account",
  SETTINGS_SECURITY_PAGE: "/settings/security",

  USER_PAGE: (username = ":username") => `/user/${username}`,
  COMMUNITY_PAGE: (name = ":name") => `/user/${name}`,
  POST_PAGE: (id = ":id") => `/post/${id}`,
};
