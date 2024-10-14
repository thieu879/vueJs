import axios from "axios";

export const getCart = async () => {
  const res = await axios.get("http://localhost:3000/cart");
  return res.data;
};
