import { queryOptions } from "@tanstack/react-query";
import getSpells from "../apis/getSpells";
import type { Result } from "../spellList";

const getSpellsOptions = () =>
  queryOptions<Result[]>({
    queryKey: ["spells", "getSpells"],
    queryFn: getSpells,
  });

export default getSpellsOptions;
