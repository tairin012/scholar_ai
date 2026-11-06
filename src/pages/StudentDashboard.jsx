export default function StudentDashboard() {
  return (
    <>
      <div className="p-6">
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-md border border-gray-100 p-3 shadow-md shadow-black/5">
            <div className="flex mb-6 items-center">
              <div className="text-2xl font-bold mb-1 text-black">
                <img src="/img/people.png" alt="" className="rounded-full" />
              </div>
              <div className="text-xl font-bold text-sky-400 ms-5">
                Welcome Back User
              </div>
            </div>
          </div>
          <div className="flex">
            <h1 className="mt-7 me-5 text-black text-2xl">
              Live Class
            </h1>
            <i className="bx bx-broadcast mt-8" style={{ color: '#eb0d0d' }}></i>
          </div>
          <div className="bg-white rounded-md border border-gray-100 p-3 shadow-md shadow-black/5 mt-3">
            <div className="flex mb-6 items-center">
              <div className="text-xl font-medium text-black ms-5">
                Discrete Mathematics
                {' '}
                <i className="bx bx-video" style={{ color: '#e71212' }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-evenly gap-6 mb-6">
          <div className="bg-white h-60 w-full">
            <div>
              <img src="/img/pngtree-abstract-light-colored-paint-texture-background-wallpaper-image_13802780.png" alt="" className="h-32 w-full" />
            </div>
            <h1 className="text-3xl text-black mt-2 p-4">
              Discrete Mathematics
            </h1>
            <h3 className="text-2xl text-black ps-4">
              Section : A
            </h3>
          </div>
          <div className="bg-white h-60 w-full">
            <div>
              <img src="/img/pngtree-abstract-light-colored-paint-texture-background-wallpaper-image_13802780.png" alt="" className="h-32 w-full" />
            </div>
            <h1 className="text-3xl text-black mt-2 p-4">
              Discrete Mathematics
            </h1>
            <h3 className="text-2xl text-black ps-4">
              Section : A
            </h3>
          </div>
          <div className="bg-white h-60 w-full">
            <div>
              <img src="/img/pngtree-abstract-light-colored-paint-texture-background-wallpaper-image_13802780.png" alt="" className="h-32 w-full" />
            </div>
            <h1 className="text-3xl text-black mt-2 p-4">
              Discrete Mathematics
            </h1>
            <h3 className="text-2xl text-black ps-4">
              Section : A
            </h3>
          </div>
          <div className="bg-white h-60 w-full">
            <div>
              <img src="/img/pngtree-abstract-light-colored-paint-texture-background-wallpaper-image_13802780.png" alt="" className="h-32 w-full" />
            </div>
            <h1 className="text-3xl text-black mt-2 p-4">
              Discrete Mathematics
            </h1>
            <h3 className="text-2xl text-black ps-4">
              Section : A
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
