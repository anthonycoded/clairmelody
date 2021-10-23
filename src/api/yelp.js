import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer OsMWDYqNZgc4rNIzaBuQwMEt8OhsKziNRav7-dli7JKKPtyu6pp1Xxo_MNbvwoH6xGoBGrMqlW4tLe_7HLdjweVWKRZ5FcGOMYOA-RzT1blZaLyy10s-Vi89guuZX3Yx",
    "x-requested-with": "xmlhttprequest",
    "Access-Control-Allow-Origin": "*",
  },
});
