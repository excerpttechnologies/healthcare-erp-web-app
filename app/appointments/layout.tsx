import { MainLayout } from '@/components/layout/main-layout'

export const metadata = {
  title: 'Appointments - Healthcare ERP',
  description: 'Appointment scheduling and management',
}

export default function AppointmentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
