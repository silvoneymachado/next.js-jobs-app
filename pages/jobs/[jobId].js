import { useRouter } from 'next/router'

const Job = () => {
  const router = useRouter()
  const { jobId, location } = router.query

  return <p>Job: {jobId} - Location: { location ? location : 'None' }</p>
}

export default Job