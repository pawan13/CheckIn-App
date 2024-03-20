import axios from "axios";

const Base_URL = "http://localhost:3000/api/v1";

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
//VisitorType
export const apiGetVisitors = () => {
  return axiosProcessor({
    method: "get",
    url: `${Base_URL}/visitor`,
  });
};
export const apiCreateVisitor = (data) => {
  return axiosProcessor({
    method: "post",
    body: data,
    url: `${Base_URL}/visitor`,
  });
};
export const apiUpdateVisitor = (id, data) => {
  return axiosProcessor({
    method: "put",
    body: data,
    url: `${Base_URL}/visitor/${id}`,
  });
};


//ClientInfo

export const apiGetClientInfo = () =>{
  return axiosProcessor({
    method: "get",
    url:`${Base_URL}/client`
  })
}