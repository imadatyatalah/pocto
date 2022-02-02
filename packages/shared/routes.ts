export const CLIENT_ROUTES = {
  // Auth
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
  CONFIRM_SIGNUOUT: "/confirm_signout",
  PASSWORD_RESET: "/password_reset",

  // Users
  USER_PAGE: (username = ":username") => `/user/${username}`,

  // Posts
  POST_PAGE: (id = ":id") => `/post/${id}`,

  // Communities
  CREATE_COMMUNITY: "/create_community",
  COMMUNITY_PAGE: (name = ":name") => `/community/${name}`,

  // Settings
  SETTINGS_PROFILE_PAGE: "/settings/profile",
  SETTINGS_ACCOUNT_PAGE: "/settings/account",
  SETTINGS_SECURITY_PAGE: "/settings/security",
};

/**
 * GET__:    GET Request
 *
 * CREATE__: POST Request
 *
 * DELETE__: DELETE Request
 *
 * UPDATE__: PUT Request
 */
export const SERVER_ROUTES = {
  // Auth
  SIGN_IN_ROUTE: "/auth/signin",
  SIGN_UP_ROUTE: "/auth/signup",

  // Users
  GET__USER_ROUTE: (username = ":username") => `/users/${username}`,

  // Posts
  GET__POSTS_ROUTE: "/posts",
  GET__POST_ROUTE: (postId = ":postId") => `/posts/${postId}`,
  CREATE__POST_ROUTE: "/posts",
  CREATE__POST_LIKE_ROUTE: (postId = ":postId") => `/posts/${postId}/likes`,
  DELETE__POST_ROUTE: (postId = ":postId") => `/posts/${postId}`,

  // Comments
  CREATE__COMMENT_ROUTE: (postId = ":postId") => `/comments/${postId}`,
  CREATE__COMMENT_LIKE_ROUTE: (commentId = ":commentId") =>
    `/comments/${commentId}/likes`,
  DELETE__COMMENT_ROUTE: (commentId = ":commentId") => `/comments/${commentId}`,

  // Communities
  GET__COMMUNITY_ROUTE: (communityName = ":communityName") =>
    `/communities/${communityName}`,
  CREATE__COMMUNITY_ROUTE: "/communities",

  // Settings
  DELETE__ACCOUNT_ROUTE: "/current_user/delete_account",
  UPDATE__PASSWORD_ROUTE: "/current_user/change_password",
  UPDATE__PROFILE_ROUTE: "/current_user/update_profile",
};

export const BLOG_ROUTES = {
  AUTHOR_PAGE: (authorname = ":authorname") => `/author/${authorname}`,
  POST_PAGE: (slug = ":slug") => `/blog/${slug}`,
};
