export const handleOpenLink = (url = "https://www.nextsolution.net/") => {
  window.open(url, "_blank", "noopener,noreferrer");
};
export const getCardData = (data) => ({
  name: data && data.name ? data.name : " Smrita Smith",
  designation: data && data.designation ? data.designation : "Marketing Expert",
  company: data && data.company ? data.company : "ABC Company",
  about:
    data && data.about
      ? data.about
      : "I'm a highly skilled marketing profession with over 7 years of industry experience.",
  phone: data && data.phone ? data.phone : "+91 7846589803",
  email: data && data.email ? data.email : "helen@nextsolution.com",
  weblink: data && data.weblink ? data.weblink : "nextsolution.com",
});
export const convertCardData = (apiResponse) => {
  return apiResponse.map((api) => ({
    name: api.name,
    designation: api.designation,
    company: api.company,
    about: api.about_me, // Mapping 'about_me' to 'about'
    phone: api.phone,
    email: api.email,
    weblink: api.weblinks, // Mapping 'weblinks' to 'weblink'
    templateId: api.template_id,
  }));
};
