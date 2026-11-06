import { useState } from 'react';

export default function TeacherDashboard() {
  // Course dropdown (was Alpine.js x-data; starts open like the original)
  const [open, setOpen] = useState(true);

  return (
    <>
      <section className="h-20 rounded-3xl bg-blue-500">
        <h1 className="px-10 pt-5 text-white font-black text-2xl">
          Welcome Back User
        </h1>
      </section>
      <div className="flex items-center w-80 bg-blue-500 mt-2 rounded-3xl">
        <h1 className="mr-7 p-6 text-white">
          All the Course : Fall 2024
        </h1>
        <div className="relative">
          <button type="button" onClick={() => setOpen((o) => !o)} className="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
            <svg className="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
          {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-10"></div>}
          {open && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                Discrete Mathematics
              </a>
              {' '}
              <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                Structured programming Language
              </a>
              {' '}
              <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                Data Mining
              </a>
              {' '}
              <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                HCI
              </a>
              {' '}
              <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                Compiler
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="flex mt-8">
        <h1 className="text-2xl text-blue-500">
          Live Class
        </h1>
        <i className="bx bx-station text-2xl ps-4 text-red-500"></i>
      </div>
      <section className="h-20 rounded-3xl bg-blue-500 mt-6 flex text-5xl">
        <h1 className="px-10 pt-5 text-white font-black text-2xl">
          Discrete Mathematics
        </h1>
        <i className="bx bxl-zoom mt-4 text-white"></i>
      </section>
      <div className="grid grid-cols-2 justify-evenly gap-6 mb-6">
        <div className="bg-white h-60 w-full mt-6">
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
        <div className="bg-white h-60 w-full mt-6">
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
    </>
  );
}
