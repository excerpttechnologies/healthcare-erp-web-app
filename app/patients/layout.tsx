import { MainLayout } from '@/components/layout/main-layout'

export const metadata = {
  title: 'Patients - Healthcare ERP',
  description: 'Patient management system',
}

export default function PatientsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
