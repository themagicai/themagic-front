import Cookies from "js-cookie";

export const Response = (response: any) => {
  console.log("RTK Response: " + response?.message);
  return response;
};

export const ErrorResponse = (response: any) => {
  if (response.status === 403 || response.status === 500) {
    Cookies.remove("token");
  } else {
    console.log("RTK ErrorResponse: " + response?.data.message);
    return response;
  }
};
