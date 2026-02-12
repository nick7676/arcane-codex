import { Popover, PopoverContent, PopoverAnchor } from "@/components/ui/8bit/popover";
import { Input } from "@/components/ui/8bit/input";
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import useGetSpells from "@/libs/services/spell/getAllSpells/queries/useGetSpells";
import { useSpellSelection } from "@/context/SpellsSelectionContext";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { data = [] } = useGetSpells();
    const { setSelectedSpellIndex } = useSpellSelection();

    const filteredSpells = useMemo(
        () =>
            query.length === 0
                ? []
                : data.filter((spell) =>
                    spell.name.toLowerCase().includes(query.toLowerCase())
                ),
        [data, query]
    );

    const limitedSpells = useMemo(
        () => filteredSpells.slice(0, 6),
        [filteredSpells]
    );
    const shouldShowPopover = isOpen && limitedSpells.length > 0;

    const handleSelectSpell = (url: string | null) => {
        setSelectedSpellIndex(url);
        setIsOpen(false);
        setQuery("")
        console.log(url)
    }

    return (
        <div className="max-w-sm w-full">
            <Popover open={shouldShowPopover} onOpenChange={setIsOpen}>
                <PopoverAnchor asChild>
                    <Input
                        value={query}
                        placeholder={t('research')}
                        onChange={(e) => {
                            const val = e.target.value;
                            setQuery(val);
                            setIsOpen(val.length > 0);
                        }}
                        onFocus={() => {
                            if (query.length > 0 && limitedSpells.length > 0) {
                                setIsOpen(true);
                            }
                        }}
                    />
                </PopoverAnchor>

                <PopoverContent
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    onInteractOutside={(e) => {
                        if (e.target instanceof Element && e.target.closest("input")) {
                            e.preventDefault();
                        }
                    }}
                >
                    <div className="space-y-1">
                        {limitedSpells.map((spell) => (
                            <div
                                key={spell.index}
                                role="button"
                                onClick={() => handleSelectSpell(spell.url)}
                                onKeyDown={(e) => e.key === "Enter" && handleSelectSpell(spell.url)}
                            >
                                <span>{spell.name}</span>
                            </div>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}