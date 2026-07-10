import PastVisitRow from './PastVisitRow'
import EmptyState from '../shared/EmptyState'
import { FolderOpen } from 'lucide-react'

export default function PastVisitList({ appointments = [] }) {
  if (appointments.length === 0) {
    return <EmptyState icon={<FolderOpen size={40} />} title="No past visits" description="Your visit history will appear here." />
  }
  return <div>{appointments.map(a => <PastVisitRow key={a.id} appointment={a} />)}</div>
}
