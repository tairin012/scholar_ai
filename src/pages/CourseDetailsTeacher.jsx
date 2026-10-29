import { Link } from 'react-router-dom';

export default function CourseDetailsTeacher() {
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
                <div>
                  <li className="mb-3 flex justify-between items-center">
                    <a href="#" className="text-sky-600 hover:text-slate-500">
                      Announcement
                    </a>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center me-3">
                        <Link to="/teacher/announcement">
                          <button className="mt-0 btn hover:bg-slate-300 btn-sm test-xl font-thin bg-transparent border-inherit border border-gray-400">
                            Edit
                            {' '}
                            <i className="bx bxs-down-arrow" style={{ color: '#12a1ea' }}></i>
                          </button>
                        </Link>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <input type="checkbox" defaultChecked className="checkbox" />
                        </label>
                      </div>
                    </div>
                  </li>
                  <div>
                    <ul>
                      <li className="text-black">
                        <i className="bx bxs-right-arrow"></i>
                        SRS_report.pdf
                      </li>
                      <li className="text-black">
                        <i className="bx bxs-right-arrow"></i>
                        Document.pdf
                      </li>
                      <li className="text-black">
                        <i className="bx bxs-right-arrow"></i>
                        Report.pdf
                      </li>
                    </ul>
                  </div>
                </div>
                <div></div>
                <li className="mb-3 flex justify-between items-center">
                  <a href="" className="text-sky-600 hover:text-slate-500">
                    Participate
                  </a>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center me-3">
                      <Link to="/teacher/participants">
                        <button className="mt-0 btn hover:bg-slate-300 btn-sm test-xl font-thin bg-transparent border-inherit border border-gray-400">
                          Edit
                          {' '}
                          <i className="bx bxs-down-arrow" style={{ color: '#12a1ea' }}></i>
                        </button>
                      </Link>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox" />
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <li className="mb-3 flex justify-between items-center">
                <a href="" className="text-sky-600 hover:text-slate-500">
                  Course Resource
                </a>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center me-3">
                    <Link to="/teacher/announcement">
                      <button className="mt-0 btn hover:bg-slate-300 btn-sm test-xl font-thin bg-transparent border-inherit border border-gray-400">
                        Edit
                        {' '}
                        <i className="bx bxs-down-arrow" style={{ color: '#12a1ea' }}></i>
                      </button>
                    </Link>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" defaultChecked className="checkbox" />
                    </label>
                  </div>
                </div>
              </li>
              <div>
                <ul>
                  <li className="text-black">
                    <i className="bx bxs-right-arrow"></i>
                    SRS_report.pdf
                  </li>
                  <li className="text-black">
                    <i className="bx bxs-right-arrow"></i>
                    Document.pdf
                  </li>
                  <li className="text-black">
                    <i className="bx bxs-right-arrow"></i>
                    Report.pdf
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <li className="mb-3 flex justify-between items-center">
                <a href="" className="text-sky-600 hover:text-slate-500">
                  Assignment
                </a>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center me-3">
                    <Link to="/teacher/assignments">
                      <button className="mt-0 btn hover:bg-slate-300 btn-sm test-xl font-thin bg-transparent border-inherit border border-gray-400">
                        Edit
                        {' '}
                        <i className="bx bxs-down-arrow" style={{ color: '#12a1ea' }}></i>
                      </button>
                    </Link>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" defaultChecked className="checkbox" />
                    </label>
                  </div>
                </div>
              </li>
              <div>
                <ul>
                  <li className="text-black">
                    <i className="bx bxs-right-arrow"></i>
                    SRS_report.pdf
                  </li>
                  <li className="text-black">
                    <i className="bx bxs-right-arrow"></i>
                    Document.pdf
                  </li>
                  <li className="text-black">
                    <i className="bx bxs-right-arrow"></i>
                    Report.pdf
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <li className="mb-3 flex justify-between items-center">
                <a href="" className="text-sky-600 hover:text-slate-500">
                  Exam
                </a>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center me-3">
                    <Link to="/teacher/assignments">
                      <button className="mt-0 btn hover:bg-slate-300 btn-sm test-xl font-thin bg-transparent border-inherit border border-gray-400">
                        Edit
                        {' '}
                        <i className="bx bxs-down-arrow" style={{ color: '#12a1ea' }}></i>
                      </button>
                    </Link>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" defaultChecked className="checkbox" />
                    </label>
                  </div>
                </div>
              </li>
            </div>
            <li className="mb-3 flex justify-between items-center">
              <a href="" className="text-sky-600 hover:text-slate-500">
                Online Class
              </a>
              <div className="flex items-center justify-between">
                <button className="mt-0 me-2 btn hover:bg-slate-300 btn-sm test-xl font-thin bg-transparent border-inherit border border-gray-400 w-[118px]">
                  Host Class
                </button>
                <div className="flex items-center justify-center me-3">
                  <button className="mt-0 btn hover:bg-slate-300 btn-sm test-xl font-thin bg-transparent border-inherit border border-gray-400">
                    Edit
                    {' '}
                    <i className="bx bxs-down-arrow" style={{ color: '#12a1ea' }}></i>
                  </button>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input type="checkbox" defaultChecked className="checkbox" />
                  </label>
                </div>
              </div>
            </li>
            <li className="mb-3 flex justify-between items-center">
              <a href="" className="text-sky-600 hover:text-slate-500">
                AI Evaluation
              </a>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center me-3">
                  <button className="mt-0 btn hover:bg-slate-300 btn-sm test-xl font-thin bg-transparent border-inherit border border-gray-400">
                    Edit
                    {' '}
                    <i className="bx bxs-down-arrow" style={{ color: '#12a1ea' }}></i>
                  </button>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input type="checkbox" defaultChecked className="checkbox" />
                  </label>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
