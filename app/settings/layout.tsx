import { MainLayout } from '@/components/layout/main-layout'

export const metadata = {
  title: 'Settings - Healthcare ERP',
  description: 'System settings and configuration',
}

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
