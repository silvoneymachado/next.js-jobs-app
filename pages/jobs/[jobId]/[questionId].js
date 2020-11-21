import { useRouter } from 'next/router'

const Question = () => {
  const router = useRouter()
  const { jobId, questionId } = router.query

return <p>Job: {jobId} - Question: {questionId}</p>
}

export default Question