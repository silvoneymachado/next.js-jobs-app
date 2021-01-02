import Image from 'next/image';

export default function JobCard({ job }) {
    return (
        <section className="card" key={job.sys.id}>
            <Image src={`/images/${job.fields.language}.png`} width="200" height="200" />
            <div className="container">
                <h2>{job.fields.title}</h2>
                <p>{job.fields.company}</p>
                <p>{job.fields.location}</p>
            </div>
        </section>
    )
}
