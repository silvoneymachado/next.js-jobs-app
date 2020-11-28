import { jobs } from '../../../data'

export default async (_, res) => {
  res.status(200).json(jobs)
}