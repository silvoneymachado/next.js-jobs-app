import { PrismaClient } from '@prisma/client';
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

const prisma = new PrismaClient();

export const getServerSideProps = async () => {
  const allJobs = await prisma.job.findMany();
  console.log(allJobs);
  return {
    props: {
      jobList: allJobs
    }
  }
}

export default Jobs;
