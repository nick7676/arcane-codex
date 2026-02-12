import { queryOptions } from "@tanstack/react-query";
import type { Spell } from "../spell";
import getSpell from "../apis/getSpell";

const getSpellOptions = (params: string) =>
  queryOptions<Spell>({
    queryKey: ["spell", "getSpell", params],
    queryFn: () => getSpell(params),
  });

export default getSpellOptions;
