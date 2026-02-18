import { MainLayout } from '@/components/layout/main-layout'

export const metadata = {
  title: 'Pharmacy - Healthcare ERP',
  description: 'Pharmacy management system',
}

export default function PharmacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
