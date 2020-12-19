import { PrismaClient } from '@prisma/client';

const Jobs = ({ jobList }) => {
  return (

    <table className="jobs">
      <tr>
      <th>Title</th> <th>Company</th> <th>Location</th>
      </tr>
      {jobList.map((job) => (
        <tr key={job.id}>
          <td>{job.title}</td>
          <td>{job.company}</td>
          <td>{job.location}</td>
        </tr>
      ))}
    </table>
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
