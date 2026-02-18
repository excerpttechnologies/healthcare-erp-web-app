import { MainLayout } from '@/components/layout/main-layout'

export const metadata = {
  title: 'Dashboard - Healthcare ERP',
  description: 'Hospital management system dashboard',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
