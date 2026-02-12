import { SpellSelectionProvider } from '@/context/SpellsSelectionContext'
import Header from '@/layouts/AuthenticatedLayout/components/Header'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
    component: () => (
        <SpellSelectionProvider>
            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </SpellSelectionProvider>
    ),
})