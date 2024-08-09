export const apiEndpoints = {
  signUp: "auth/signup",
  login: "auth/login",
  gAuth: "auth/googleUser",
  user: "user",
  createTemplate: "template/create",
  personalInfo: "/template/create_personal",
  addLink: "template/addWeblinks",
  addHeader: "template/addContent",
  editHeader: (id) => `template/editContent/${id}`,
  getTemplate: "template/user",
};
