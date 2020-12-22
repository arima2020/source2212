const covertToBase64 = (str) => {
  let base64String = "";
  try {
    base64String = atob((str || "").toString().replace(/["]/g, ""));
  } catch (e) {}
  return base64String;
};

const isJson = (jsonStr) => {
  try {
    JSON.parse(jsonStr);
  } catch (e) {
    return false;
  }
  return true;
};

export { covertToBase64, isJson };
