import axiosInstance from "@/libs/axios/axiosInstance";
import type { Spell } from "../spell";

const getSpell = async (endpoint: string) => {
  const res = await axiosInstance.get<Spell>(endpoint);
  return res.data;
};

export default getSpell;
