export default function ImageToText() {
  return (
    <>
      <div className="p-6">
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-md border border-gray-100 p-4 shadow-md shadow-black/5">
            <div className="flex justify-center items-center">
              <div className="text-xl mb-1 text-black border-2 p-2 rounded-full cursor-pointer">
                <span className="font-bold me-2">
                  Aa
                </span>
                {' '}
                Img to Text
              </div>
              <div className="text-xl text-black font-medium ms-12 text-sky-400 cursor-pointer">
                PDF to Audio
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mx-auto w-full bg-white p-4">
            <form className="py-4" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6 pt-4">
                <label className="mb-5 block text-xl font-semibold text-[#07074D] p-4">
                  Upload File
                </label>
                <div className="mb-8">
                  <input type="file" name="file" id="file" className="sr-only" />
                  {' '}
                  <label htmlFor="file" className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                    <div>
                      <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                        Drop files here
                      </span>
                      {' '}
                      <span className="mb-2 block text-base font-medium text-[#6B7280]">
                        Or
                      </span>
                      {' '}
                      <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                        Browse
                      </span>
                    </div>
                  </label>
                </div>
                <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                  <div className="flex items-center justify-between">
                    <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                      banner-design.png
                    </span>
                    {' '}
                    <button className="text-[#07074D]">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z" fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z" fill="currentColor"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex">
                <button className="me-3 hover:bg-sky-400 w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Generate
                </button>
                {' '}
                <button className="hover:bg-sky-400 w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        <button className="btn btn-outline bg-[#6A64F1] text-white">
          Download
          {' '}
          <i className="bx bxs-download"></i>
        </button>
        <div className="mt-5">
          <h2 className="text-xl">
            Text
          </h2>
          <textarea placeholder="" className="textarea textarea-bordered textarea-lg w-full bg-white" />
        </div>
      </div>
    </>
  );
}
