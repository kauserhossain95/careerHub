import { useLoaderData, useParams } from "react-router-dom"
import { MdAttachMoney } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const JobDetails = () => {

  const loadData = useLoaderData();
  const { id } = useParams();

  const intId = parseInt(id);

  const job = loadData.find(job => job.id === intId);

  const handleToast = () => {
    toast("Applied Successfully")
  }
  return (
    <div>
      <h2 className="text-4xl text-center font-bold">Job Details</h2>
      <div className="grid grid-cols-3">
        <div className="col-span-2 mt-11">
          <p className="my-8"><span className="font-bold">Job description:</span> {job.job_responsibility}</p>
          <p className="my-8"><span className="font-bold">Job description:</span> {job.job_description}</p>

        </div>
        <div className="m-7">
          <div className="space-y-5">
            <h2 className="text-xl text-center font-bold">Job Details</h2>

            <p className="flex items-center"><MdAttachMoney /><span className="font-bold">Salary:</span> {job.salary}</p>
            <p className="flex items-center"><IoBagCheckOutline /><span className="font-bold">Job Title:</span> {job.job_title}</p>
            <div>
              <button onClick={handleToast} className="btn btn-primary w-full">Apply Now</button>
            </div>
            <ToastContainer></ToastContainer>
          </div>

        </div>


      </div>
    </div>
  )
}
