import { useQuery } from "@tanstack/react-query";
import getSpellsOptions from "../queriesOptions/getSpellsOptions";

const useGetSpells = () => useQuery(getSpellsOptions());

export default useGetSpells;
