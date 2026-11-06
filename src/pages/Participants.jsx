export default function Participants() {
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
          <div className="mx-auto">
            <div className="">
              <div className="mt-5 text-center">
                <h1 className="font-bold text-3xl text-black">
                  Course Teacher : Azizul Islam Anik
                </h1>
                <h3 className="font-semibold text-black">
                  Course Name : SAD
                </h3>
              </div>
              <div className="w-full flex justify-between items-center mb-3 mt-3">
                <div className="">
                  <div className="w-full max-w-sm min-w-[200px] relative">
                    <div className="relative">
                      <input className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md" placeholder="Search ..." />
                      {' '}
                      <button className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-8 h-8 text-slate-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                  <thead>
                    <tr>
                      <th className="p-4 border-b border-slate-200 bg-slate-50">
                        <p className="text-sm font-extrabold leading-none text-slate-500">
                          Student Name
                        </p>
                      </th>
                      <th className="p-4 border-b border-slate-200 bg-slate-50">
                        <p className="text-sm font-extrabold leading-none text-slate-500">
                          Student ID
                        </p>
                      </th>
                      <th className="p-4 border-b border-slate-200 bg-slate-50">
                        <p className="text-sm font-extrabold leading-none text-slate-500">
                          Submit
                        </p>
                      </th>
                      <th className="p-4 border-b border-slate-200 bg-slate-50">
                        <p className="text-sm font-extrabold leading-none text-slate-500">
                          Date
                        </p>
                      </th>
                      <th className="p-4 border-b border-slate-200 bg-slate-50">
                        <p className="text-sm font-extrabold leading-none text-slate-500">
                          Grade
                        </p>
                      </th>
                      <th className="p-4 border-b border-slate-200 bg-slate-50">
                        <p className="text-sm font-extrabold leading-none text-slate-500">
                          AI Evaluation
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-slate-50 border-b border-slate-200">
                      <td className="p-4 py-5">
                        <p className="block font-semibold text-sm text-slate-800">
                          Fahad Rahman
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          011203011
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          Assignment
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          2024-08-01
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          3.79
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <button className="btn-sm btn btn-info mt-0 w-30 text-white p-0">
                          Evaluation
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 border-b border-slate-200">
                      <td className="p-4 py-5">
                        <p className="block font-semibold text-sm text-slate-800">
                          Tairin Islam
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          011203012
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          Assignment
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          2024-08-05
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          3.00
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <button className="btn-sm btn btn-info mt-0 w-30 text-white p-0">
                          Evaluation
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 border-b border-slate-200">
                      <td className="p-4 py-5">
                        <p className="block font-semibold text-sm text-slate-800">
                          shishir
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          01120334
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          $2,500.00
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          2024-08-07
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          3.00
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <button className="btn-sm btn btn-info mt-0 w-30 text-white p-0">
                          Evaluation
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 border-b border-slate-200">
                      <td className="p-4 py-5">
                        <p className="block font-semibold text-sm text-slate-800">
                          Fakhrul Islam
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          01120334
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          Assignment
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          2024-08-10
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <p className="text-sm text-slate-500">
                          3.00
                        </p>
                      </td>
                      <td className="p-4 py-5">
                        <button className="btn-sm btn btn-info mt-0 w-30 text-white p-0">
                          Evaluation
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-between items-center px-4 py-3">
                  <div className="text-sm text-slate-500">
                    Showing
                    {' '}
                    <b>
                      1-5
                    </b>
                    {' '}
                    of 30
                  </div>
                  <div className="flex space-x-1">
                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                      Prev
                    </button>
                    {' '}
                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
                      1
                    </button>
                    {' '}
                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                      2
                    </button>
                    {' '}
                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                      3
                    </button>
                    {' '}
                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
