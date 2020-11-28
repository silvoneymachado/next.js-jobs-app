import { jobs } from '../../../data'

export default (req, res) => {
  const { body: { title, company, location }, method } = req;

  switch(method) {
    case 'GET':
      // Get List of Jobs
      res.status(200).json(jobs)        
      break
    case 'POST':
      // Add new data (TODO)
      // Return new resource  
      res.status(200).json({
        title: title, 
        company: company, 
        location: location
      });
      break
    case 'OPTIONS':
      res.setHeader('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'])
      res.setHeader('Access-Control-Allow-Headers', ['Content-Type'])
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(200).end()
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }  
}