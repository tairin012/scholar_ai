export default function StudentAssignments() {
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
          <div className="bg-white rounded-md border border-gray-100 p-5 shadow-md shadow-black/5 mt-3 rounded-md">
            <div className="mb-6 items-center">
              <p className="text-3xl text-center text-blue-500">
                Final Assessment
              </p>
              <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <h1 className="text-2xl font-bold mb-4">
                      Submission Status
                    </h1>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium">
                        Submission Status
                      </label>
                      <p className="text-gray-500">
                        No attempt
                      </p>
                    </div>
                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium">
                        Grading Status
                      </label>
                      <p className="text-gray-500">
                        Not graded
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium">
                        Due Date
                      </label>
                      <p className="text-gray-500">
                        Wednesday, 23 October 2024, 12:00 AM
                      </p>
                    </div>
                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium">
                        Time Remaining
                      </label>
                      <p className="text-gray-500">
                        11 days 10 hours
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium">
                        Grade
                      </label>
                      <p className="text-gray-500">
                        -
                      </p>
                    </div>
                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium">
                        Submission Comments
                      </label>
                      {' '}
                      <a href="#" className="text-blue-500">
                        Comments (0)
                      </a>
                    </div>
                  </div>
                  <label className="block mb-2 text-sm font-medium text-white-900 dark:text-white" htmlFor="file_input">
                    Upload file
                  </label>
                  {' '}
                  <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white-50 dark:text-gray-400 focus:outline-none bg-white border-gray-600 placeholder-white-400" aria-describedby="file_input_help" id="file_input" type="file" />
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                    SVG, PNG, JPG or PDF (MAX. 800x400px).
                  </p>
                  <div className="flex">
                    <button className="me-3 hover:bg-sky-400 w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      Submit
                    </button>
                    {' '}
                    <button className="hover:bg-sky-400 w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      Cancel
                    </button>
                  </div>
                  <p className="text-center text-gray-500 mt-4">
                    You have not made a submission yet.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
