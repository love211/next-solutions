export const apiEndpoints = {
  signUp: "auth/signup",
  login: "auth/login",
  gAuth: "auth/googleUser",
  user: "user",
  createTemplate: "template/create",
  personalInfo: "/template/create_personal",
  addLink: "template/addWeblinks",
  addHeader: (id) => {
    `template/addContent/${id}`;
  },
  editHeader: (id) => `template/editContent/${id}`,
  archieve: (id) => `template/archiveStatus/${id}`,
  getTemplate: "template/user",
};
