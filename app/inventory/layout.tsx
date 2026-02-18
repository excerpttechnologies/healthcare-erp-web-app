import { MainLayout } from '@/components/layout/main-layout'

export const metadata = {
  title: 'Inventory - Healthcare ERP',
  description: 'Inventory management system',
}

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
