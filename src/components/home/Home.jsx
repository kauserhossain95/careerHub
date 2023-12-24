import { Jobs } from "../jobs/jobs"


export const Home = () => {
  return (
    <div className="mx-auto text-center">
        <h2 className="font-bold text-4xl capitalize my-5">Featured Jobs</h2>
        <p className="text-sm">Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div>
          <Jobs></Jobs>
        </div>
    </div>
  )
}
