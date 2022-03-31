import axios from "axios";

module.exports = {
  PostRequest: async function (link, requestData, cookie) {
    return await axios.post(link, requestData, {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Cookie: cookie,
      },
      withCredentials: true,
      httpsAgent: { rejectUnauthorized: false },
      timeout: 1000 * 60,
    });
  },
  GetRequest: async function (link, cookie) {
    return await axios.get(link, {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Cookie: cookie,
      },

      withCredentials: true,
      timeout: 1000 * 60,
    });
  },
  DeleteRequest: async function (link, requestData, cookie) {
    return await axios.get(link, requestData, {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Cookie: cookie,
      },

      withCredentials: true,
      timeout: 1000 * 60,
    });
  },
};
