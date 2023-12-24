import { useEffect, useState } from "react"
import { Job } from "../job/Job";




export const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    const [displayData, setDisplayData] = useState(4)

    return (

        <>
            <h1 className="text-3xl my-6">Total job: {jobs.length}</h1>
            <div className="grid grid-cols-2 gap-5">
                {
                    jobs.slice(0, displayData).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div>
                <button onClick={() => setDisplayData(jobs.length)} className="btn btn-primary my-10">See All</button>
            </div>
        </>

    )
}
