import Cookies from "js-cookie";

export const transformResponse = (response: any) => {
    console.log(`transformResponse: ` + response?.message);
    return response;
};

export const transformErrorResponse = (response: any) => {
    if (response.status === 403 || response.status === 500) {
        Cookies.remove("token");
    } else {
        console.log("RTK transformErrorResponse: " + response?.data.message);
        return response;
    }
};
