import { RegistrationForm } from '@/components/patients/registration-form'

export const metadata = {
  title: 'Register Patient - Healthcare ERP',
  description: 'Register a new patient in the system',
}

export default function NewPatientPage() {
  return <RegistrationForm />
}
