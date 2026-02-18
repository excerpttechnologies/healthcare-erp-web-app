import { MainLayout } from '@/components/layout/main-layout'

export const metadata = {
  title: 'Laboratory - Healthcare ERP',
  description: 'Laboratory information system',
}

export default function LaboratoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
