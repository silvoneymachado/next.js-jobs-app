import { jobs } from '../../data';

const Job = ({ job }) => {
  return (
    <div>
        <p> Title: {job.title} </p>
        <p> Company: {job.company} </p>
        <p> Location: {job.location} </p>
    </div>
  );
}

export const getStaticPaths = async () => {

  const paths = jobs.map((job) => ({
    params: { id: job.id.toString() },
  }));

  return { paths, fallback: false }  
}
  
export const getStaticProps = async ({ params }) => {
  const jobList = jobs.filter( (j) => j.id.toString() === params.id );
  return {
    props: {
      job: jobList[0]
    }
  }
}
  
export default Job;
  