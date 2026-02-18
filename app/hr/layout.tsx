import { MainLayout } from '@/components/layout/main-layout'

export const metadata = {
  title: 'HR & Staff - Healthcare ERP',
  description: 'Human resources and staff management',
}

export default function HRLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
