import { MainLayout } from '@/components/layout/main-layout'

export const metadata = {
  title: 'Billing - Healthcare ERP',
  description: 'Billing and invoice management',
}

export default function BillingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}
