import axios from "axios";

const Base_URL = "http://localhost:3001/api/v1";

const axiosProcessor = async ({ method, url = {}, body }) => {
  try {
    const { data } = await axios({
      method: method,
      url,
      data: body,
    });
    return data;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
  }
};

export const apiGetVisitors = () => {
  return axiosProcessor({
    method: "get",
    url: `${Base_URL}/visitor`,
  });
};

export const apiCreateVisitorInfo = (data) => {
  return axiosProcessor({
    method: "post",
    body: data,
    url: `${Base_URL}/client`,
  });
};
