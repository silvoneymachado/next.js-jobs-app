import { jobs } from '../../../data'

export default function jobsHandler(req, res) {
  res.status(200).json(jobs)
}