import { jobs } from '../../../data'

export default async({ query: { jobId } }, res) => {
  const filtered = jobs.filter((job) => job.id === parseInt(jobId))

  // Job with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Job with id: ${jobId} not found.` })
  }
}