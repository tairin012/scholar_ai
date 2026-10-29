import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ROLES = [
  { value: 'student', label: 'Student' },
  { value: 'teacher', label: 'Teacher' },
  { value: 'admin', label: 'Admin' },
];

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');

  // No backend yet: any submit signs in as the chosen role.
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${role}`);
  };

  const inputClass =
    'bg-indigo-300 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400';

  return (
    <div className="bg-[#b6d6e6] overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center min-h-screen lg:h-screen">
      <div className="login-container container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
        <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-[#6096B4] flex relative order-2 lg:order-1">
          <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
            <span className="transform block whitespace-nowrap h-full -rotate-90 text-[55px] 2xl:text-[70px] font-black uppercase text-white opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">
              Scholar-Ai
            </span>
          </div>

          <div className="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
            <img
              src="/img/yellowboy-removebg-preview.png"
              alt="product"
              className="-mb-5 lg:mb-0 -ml-12 lg:ml-0 product h-[100px] xl:h-[100px] 2xl:h-[50px] w-auto object-cover transform group-hover:translate-x-26 2xl:group-hover:translate-x-48 transition-all duration-1000 lg:duration-700 ease-in-out"
            />
            <div className="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>
          </div>

          <div className="hidden lg:block w-1/3 bg-white ml-auto"></div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <form onSubmit={handleSubmit} className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
            <div className="w-full space-y-5">
              <div className="form-caption flex items-end justify-center text-center space-x-3 mb-20">
                <span className="text-3xl font-bold text-[#6096B4]">Login</span>
              </div>

              <div className="form-element">
                <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                  <span className="block text-lg text-gray-800 tracking-wide">Email</span>
                  <span className="block">
                    <input type="text" name="email" className={inputClass} />
                  </span>
                </label>
              </div>

              <div className="form-element">
                <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                  <span className="block text-lg text-gray-800 tracking-wide">Password</span>
                  <span className="block">
                    <input type="password" name="password" className={inputClass} />
                  </span>
                </label>
              </div>

              <div className="form-element">
                <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                  <span className="block text-lg text-gray-800 tracking-wide">Sign in as</span>
                  <span className="block">
                    <select value={role} onChange={(e) => setRole(e.target.value)} className={inputClass}>
                      {ROLES.map((r) => (
                        <option key={r.value} value={r.value}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </span>
                </label>
              </div>

              <div className="form-element">
                <div className="w-full lg:w-4/5 mx-auto flex items-center justify-between">
                  <label className="block text-gray-800 tracking-wide flex items-center space-x-2 select-none">
                    <input type="checkbox" name="remember" />
                    <span className="block text-gray-800 tracking-wide">Remember me</span>
                  </label>
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-indigo-600 tracking-wide inline-block border-b border-gray-300">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className="form-element">
                <span className="w-full lg:w-4/5 block mx-auto">
                  <input
                    type="submit"
                    value="Login"
                    className="cursor-pointer border-2 border-[#507e95] w-full p-3 focus:outline-none active:outline-none focus:bg-[#446576] active:bg-[#3388b3] hover:bg-[#6a7e89] transition-all"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
