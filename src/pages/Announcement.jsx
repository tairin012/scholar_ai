import { Link } from 'react-router-dom';

export default function Announcement() {
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
              <Link to="/teacher/course">
                <button className="btn btn-sm bg-slate-200 text-black border-inherit text-sm font-light flex items-center justify-center shadow-lg">
                  Summer 2024 CSE 3412(C)
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-white border border-gray-100 p-5 shadow-md shadow-black/5 mt-3 rounded-md">
            <div className="w-full">
              <textarea id="message" rows="4" className="block p-2.5 w-full h-60 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Write your thoughts here..." />
            </div>
            <div className="flex justify-center">
              <button className="btn btn-sm w-1/6 bg-slate-200 font-thin me-4">
                Save
              </button>
              {' '}
              <button className="btn btn-sm w-1/6 bg-slate-200 font-thin">
                Cancel
              </button>
            </div>
          </div>
          <div className="h-10px"></div>
        </div>
      </div>
    </>
  );
}
