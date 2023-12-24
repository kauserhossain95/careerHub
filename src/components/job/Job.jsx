import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export const Job = ({ job }) => {
    const { id, logo, job_title, location, company_name, job_type, salary, remote_or_onsite } = job

    return (
        <div className="card  bg-base-100 shadow-xl text-left p-8">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body space-y-4">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="card-actions justify-start">
                    <button className="btn outline outline-2 outline-offset-2 mr-10">{remote_or_onsite}</button>
                    <button className="btn outline outline-2 outline-offset-2">{job_type}</button>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center space-x-2"><CiLocationOn />{location}</div>
                    <div className="flex items-center space-x-2"><MdAttachMoney /> Salary: {salary}</div>
                </div>
                <Link to={`./job/${id}`}>
                    <button className="btn btn-primary">view Details</button>
                </Link>
            </div>
        </div>
    )
}
Job.propTypes = {
    job: PropTypes.obj,

};