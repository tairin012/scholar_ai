import { Link } from 'react-router-dom';

export default function CourseDetailsStudent() {
  return (
    <>
      <div className="p-6">
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-md border border-gray-100 p-3 shadow-md shadow-black/5">
            <div className="flex mb-2 items-center">
              <div className="text-xl font-bold text-sky-400 ms-5">
                Summer 2024 CSE 3412 (C) :System Analysis and Design Laboratory
              </div>
            </div>
            <div className="flex items-center">
              <button className="btn btn-sm w-2/12 bg-slate-200 me-2 text-black border-inherit text-sm font-light flex items-center justify-center shadow-lg">
                Dashboard
              </button>
              {' '}
              <button className="btn btn-sm w-2/12 bg-slate-200 me-2 text-black border-inherit text-sm font-light flex items-center justify-center shadow-lg">
                My Courses
              </button>
              {' '}
              <button className="btn btn-sm w-3/12 bg-slate-200 text-black border-inherit text-sm font-light flex items-center justify-center shadow-lg">
                Summer 2024 CSE 3412(C)
              </button>
            </div>
          </div>
          <div className="bg-white border border-gray-100 p-5 shadow-md shadow-black/5 mt-3 rounded-md">
            <div className="flex mb-6 items-center">
              <ul className="list w-full">
                <li className="mb-3 flex justify-between items-center">
                  <a href="#" className="text-sky-600 hover:text-slate-500">
                    Announcement
                  </a>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" defaultChecked className="checkbox" />
                    </label>
                  </div>
                </li>
                <li className="mb-3 flex justify-between items-center">
                  <a href="" className="text-sky-600 hover:text-slate-500">
                    Participate
                  </a>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" defaultChecked className="checkbox" />
                    </label>
                  </div>
                </li>
                <li className="mb-3 flex justify-between items-center">
                  <a href="" className="text-sky-600 hover:text-slate-500">
                    Course Resource
                  </a>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" defaultChecked className="checkbox" />
                    </label>
                  </div>
                </li>
                <li className="mb-3 flex justify-between items-center">
                  <Link to="/student/assignments" className="text-sky-600 hover:text-slate-500">
                    Assignment
                  </Link>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" defaultChecked className="checkbox" />
                    </label>
                  </div>
                </li>
                <li className="mb-3 flex justify-between items-center">
                  <a href="" className="text-sky-600 hover:text-slate-500">
                    Exam
                  </a>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" defaultChecked className="checkbox" />
                    </label>
                  </div>
                </li>
                <li className="mb-3 flex justify-between items-center">
                  <a href="" className="text-sky-600 hover:text-slate-500">
                    Online Exam
                  </a>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" defaultChecked className="checkbox" />
                    </label>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <a href="" className="text-sky-600 hover:text-slate-500">
                    AI Evaluation
                  </a>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" defaultChecked className="checkbox" />
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
