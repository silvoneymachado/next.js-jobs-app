import { jobs } from '../../../data'

export default async (req, res) => {
  const { query: { jobId }, body: { title, company, location }, method } = req;
  const filtered = jobs.filter((job) => job.id === parseInt(jobId))

  switch (method) {
    case 'GET':
      // Get data
      // Job with id exists
      if (filtered.length > 0) {
           res.status(200).json(filtered[0])
      } else {
           res.status(404).json({ message: `Job with id: ${jobId} not found.` })
      }
      break
    case 'PUT':
      // Update data (TODO)
      // Return Updated resource
      res.status(200).json({
          id: jobId, 
          title: title, 
          company: company, 
          location: location
        });
      break
    case 'DELETE':
        // Delete data (TODO)
        // Return deleted resource
        res.status(200).json(filtered[0]);
        break      
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
