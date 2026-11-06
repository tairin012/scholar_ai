import { Link } from 'react-router-dom';
import useHideScrollbar from '../hooks/useHideScrollbar.js';

export default function Landing() {
  useHideScrollbar();

  return (
    <>
      <section className="object-cover w-full h-screen overflow-hidden" style={{ fontFamily: "'Montserrat', sans-serif", backgroundImage: "url('/img/Cool%20Sky.jpg')" }}>
        <div className="w-full h-fit flex justify-center">
          <nav className="flex justify-between w-2/3 mt-10 rounded-lg bg-white/10 backdrop-blur-xl text-white pl-10 pt-4 pb-4">
            <div className="text-2xl font-bold uppercase">
              Logo
            </div>
            <button className="mr-10 md:hidden lg:hidden xl:hidden 2xl:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path>
              </svg>
            </button>
            <ul className="flex space-x-8 mr-10 text-xs items-center">
              <li>
                <Link to="/login">
                  SCAN
                </Link>
              </li>
              <li>
                <Link to="/login">
                  Prepmate
                </Link>
              </li>
              <li className="">
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="object-cover w-full h-full overflow-y-scroll">
          <div style={{ fontFamily: "'Hedvig Letters Serif', serif" }} className="w-full flex justify-center text-white">
            <div className="text-center mt-72">
              <h1 className="text-7xl font-light tracking-wider">
                Learn Smartly , Achieve More
              </h1>
              <h1 className="mt-1 uppercase text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}></h1>
            </div>
          </div>
          <div className="bg-stone-950 text-white w-full h-1/2 p-5 mt-40 grid items-center">
            <div className="ml-72 space-y-10">
              <h1 className="text-4xl" style={{ fontFamily: "'Hedvig Letters Serif', serif" }}>
                Scholar AI
              </h1>
              <h1 className="w-2/3"></h1>
            </div>
          </div>
          <div className="bg-slate-100 w-full h-fit items-center mb-20">
            <div className="grid p-6 justify-center w-full space-y-20">
              <h1 className="text-4xl" style={{ fontFamily: "'Hedvig Letters Serif', serif" }}>
                User Analysis
              </h1>
              <div className="flex items-center space-x-20">
                <div className="grid justify-center items-center">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-28 h-28 aspect-square object-cover bg-white shadow-2xl p-5 rounded-full text-purple-900">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center">
                    <h1 className="text-xl uppercase">
                      Total Users
                    </h1>
                    <h1>
                      240
                    </h1>
                  </div>
                </div>
                <div className="grid justify-center items-center">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-28 h-28 aspect-square object-cover bg-white shadow-2xl p-5 rounded-full text-purple-900">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center">
                    <h1 className="text-xl uppercase">
                      Active Users
                    </h1>
                    <h1>
                      240
                    </h1>
                  </div>
                </div>
                <div className="grid justify-center items-center">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-28 h-28 aspect-square object-cover bg-white shadow-2xl p-5 rounded-full text-purple-900">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center">
                    <h1 className="text-xl uppercase">
                      Active Users
                    </h1>
                    <h1>
                      240
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black h-fit p-5 grid justify-center">
              <h1 className="text-slate-800 text-center">
                All Right Reserved
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
