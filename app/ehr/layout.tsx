import { MainLayout } from '@/components/layout/main-layout'

export const metadata = {
  title: 'EHR - Healthcare ERP',
  description: 'Electronic Health Records',
}

export default function EHRLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
