import JobCard from '../../components/JobCard';
import StrapiClient  from '../../lib/strapi-client';

const Jobs = ({ jobList }) => {
  return (    
    <div className="jobs">
      {jobList.map((job) => (
        <JobCard job={job} key={job._id} />
      ))}
    </div>
  )
}

const strapiClient = new StrapiClient();

export const getStaticProps = async () => {
  const allJobs = await strapiClient.fetchData(`/jobs`);
  return {
    props: {
      jobList: allJobs
    }
  }
}

export default Jobs;
