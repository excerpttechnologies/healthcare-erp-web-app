import { MainLayout } from '@/components/layout/main-layout'

export const metadata = {
  title: 'Emergency - Healthcare ERP',
  description: 'Emergency management system',
}

export default function EmergencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
