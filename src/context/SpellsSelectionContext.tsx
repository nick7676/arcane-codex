import { createContext, useContext, useState } from "react"

type SpellSelectionContextType = {
    selectedSpellIndex: string | null
    setSelectedSpellIndex: (index: string | null) => void
}

const SpellSelectionContext = createContext<SpellSelectionContextType | undefined>(undefined)

export function SpellSelectionProvider({ children }: { children: React.ReactNode }) {
    const [selectedSpellIndex, setSelectedSpellIndex] = useState<string | null>(null)
    return (
        <SpellSelectionContext.Provider value={{ selectedSpellIndex, setSelectedSpellIndex }}>
            {children}
        </SpellSelectionContext.Provider>
    )
}

export function useSpellSelection() {
    const ctx = useContext(SpellSelectionContext)
    if (ctx === undefined) throw new Error('useSpellSelection must be used within SpellSelectionProvider')
    return ctx
}