import { useQuery } from "@tanstack/react-query";
import getSpellOptions from "../queriesOptions/getSpellOptions";

const useGetSpell = (params: string) => useQuery(getSpellOptions(params));

export default useGetSpell;
