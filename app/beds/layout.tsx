import { MainLayout } from '@/components/layout/main-layout'

export const metadata = {
  title: 'Beds & Wards - Healthcare ERP',
  description: 'Bed and ward management',
}

export default function BedsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
