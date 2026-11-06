export default function VideoCallStudent() {
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
          <div className="bg-white border border-gray-100 p-12 shadow-md shadow-black/5 mt-3 rounded-md">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6 items-center">
                <div className="flex items-center border border-b-slate-400 w-1/3 rounded p-2">
                  <i className="fa-solid fa-user-group me-3" style={{ color: 'black' }}></i>
                  <h1 className="text-2xl text-black me-3">
                    Participate
                  </h1>
                  <h3 className="text-xl text-black">
                    83
                  </h3>
                </div>
                <div className="h-96 border-black border mt-4"></div>
                <div className="flex mt-5">
                  <button className="me-3 hover:bg-sky-400 w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Join
                    {' '}
                    <i className="fa-solid fa-video" style={{ color: 'white' }}></i>
                  </button>
                  {' '}
                  <button className="hover:bg-sky-400 w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    End
                    {' '}
                    <i className="bx bxs-video-off" style={{ color: '#ffffff' }}></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
