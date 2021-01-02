import JobCard from '../../components/JobCard';

const Jobs = ({ jobList }) => {
  return (    
    <div className="jobs">
      {jobList.map((job) => (
        <JobCard job={job} />
      ))}
    </div>
  )
}

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getServerSideProps = async () => {
  const allJobs = await client.getEntries();
  console.log(allJobs);
  return {
    props: {
      jobList: allJobs.items
    }
  }
}

export default Jobs;
