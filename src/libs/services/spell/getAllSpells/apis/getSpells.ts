import axiosInstance from "@/libs/axios/axiosInstance";
import type { SpellsResults } from "../spellList";
import apiEndpoints from "@/constants/apiEndpoints";

const getSpells = async () => {
  const res = await axiosInstance.get<SpellsResults>(apiEndpoints.spells.getSpells)
  return res.data.results
}
export default getSpells;
