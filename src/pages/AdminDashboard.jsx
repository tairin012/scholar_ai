export default function AdminDashboard() {
  return (
    <>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
            <div className="flex justify-between mb-6">
              <div>
                <div className="text-2xl font-bold mb-1 text-black">
                  Course
                </div>
                <div className="text-xl font-medium text-gray-400">
                  1342
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
            <div className="flex justify-between mb-4">
              <div>
                <div className="flex items-center mb-1">
                  <div className="text-2xl font-bold text-black">
                    Student
                  </div>
                </div>
                <div className="text-xl font-medium text-gray-400">
                  3044
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
            <div className="flex justify-between mb-6">
              <div>
                <div className="text-2xl font-bold text-black">
                  Teachers
                </div>
                <div className="text-xl font-medium text-gray-400">
                  2045
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
            <div className="flex justify-between mb-4 items-start">
              <div className="font-medium text-black">
                StudentList
              </div>
            </div>
            <div className="flex items-center mb-4 order-tab">
              <button className="btn w-28 bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-white">
                ADD
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog" onSubmit={(e) => e.preventDefault()}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7">
                      ✕
                    </button>
                  </form>
                  <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="Add_information">
                      <h3 className="heading p-4 text-3xl flex items-center justify-center">
                        Fill Up
                      </h3>
                      <hr className="mb-3" />
                      <div className="field">
                        <label htmlFor="name">
                          Name
                        </label>
                        {' '}
                        <input type="text" id="name" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="email">
                          ID
                        </label>
                        {' '}
                        <input type="email" id="email" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="phone">
                          E-mail
                        </label>
                        {' '}
                        <input type="text" id="phone" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="address">
                          University
                        </label>
                        {' '}
                        <input type="text" id="address" className="input bg-white" />
                      </div>
                      <button className="btn btn-outline btn-info hover:text-white">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
              <button className="btn w-28 bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-white ms-3">
                Delete
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog" onSubmit={(e) => e.preventDefault()}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7">
                      ✕
                    </button>
                  </form>
                  <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="Add_information">
                      <h3 className="heading p-4 text-3xl flex items-center justify-center">
                        Fill Up
                      </h3>
                      <hr className="mb-3" />
                      <div className="field">
                        <label htmlFor="name">
                          Name
                        </label>
                        {' '}
                        <input type="text" id="name" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="email">
                          ID
                        </label>
                        {' '}
                        <input type="email" id="email" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="phone">
                          E-mail
                        </label>
                        {' '}
                        <input type="text" id="phone" className="input bg-white" />
                      </div>
                      <button className="btn btn-outline btn-info hover:text-white">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
              <button className="btn w-28 bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-white ms-3">
                Update
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog" onSubmit={(e) => e.preventDefault()}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7">
                      ✕
                    </button>
                  </form>
                  <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="Add_information">
                      <h3 className="heading p-4 text-3xl flex items-center justify-center">
                        Fill Up
                      </h3>
                      <hr className="mb-3" />
                      <div className="field">
                        <label htmlFor="name">
                          Name
                        </label>
                        {' '}
                        <input type="text" id="name" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="email">
                          E-mail
                        </label>
                        {' '}
                        <input type="email" id="email" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="phone">
                          Phone
                        </label>
                        {' '}
                        <input type="text" id="phone" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="address">
                          Address
                        </label>
                        {' '}
                        <input type="text" id="address" className="input bg-white" />
                      </div>
                      <button className="btn btn-outline btn-info hover:text-white">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[540px]" data-tab-for="order">
                <thead>
                  <tr>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                      Name
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                      Student Id
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                      Email
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                      University
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          Fahad Rahman
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        01120309
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        fahad@gmail.com
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-emerald-500/10 font-medium text-[12px] leading-none">
                        UIU
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          Fahad Rahman
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        01120309
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        fahad@gmail.com
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-emerald-500/10 font-medium text-[12px] leading-none">
                        UIU
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          Tairin Islam
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        011203012
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        tairin@gmail.com
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-emerald-500/10 font-medium text-[12px] leading-none">
                        UIU
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          Tairin Islam
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        011203012
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        tairin@gmail.com
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-emerald-500/10 font-medium text-[12px] leading-none">
                        UIU
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          Shisir
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        011203014
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        Shisir@gmail.com
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="inline-block p-1 rounded bg-emerald-500/10font-medium text-[12px] leading-none">
                        UIU
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
            <div className="flex justify-between mb-4 items-start">
              <div className="font-medium text-black">
                Teacher List
              </div>
            </div>
            <div className="flex items-center mb-4 order-tab">
              <button className="btn w-28 bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-white">
                ADD
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog" onSubmit={(e) => e.preventDefault()}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7">
                      ✕
                    </button>
                  </form>
                  <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="Add_information">
                      <h3 className="heading p-4 text-3xl flex items-center justify-center">
                        Fill Up
                      </h3>
                      <hr className="mb-3" />
                      <div className="field">
                        <label htmlFor="name">
                          Name
                        </label>
                        {' '}
                        <input type="text" id="name" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="email">
                          E-mail
                        </label>
                        {' '}
                        <input type="email" id="email" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="phone">
                          Phone
                        </label>
                        {' '}
                        <input type="text" id="phone" className="input bg-white" />
                      </div>
                      <button className="btn btn-outline btn-info hover:text-white">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
              <button className="btn w-28 bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-white ms-3">
                Delete
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog" onSubmit={(e) => e.preventDefault()}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7">
                      ✕
                    </button>
                  </form>
                  <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="Add_information">
                      <h3 className="heading p-4 text-3xl flex items-center justify-center">
                        Fill Up
                      </h3>
                      <hr className="mb-3" />
                      <div className="field">
                        <label htmlFor="name">
                          Name
                        </label>
                        {' '}
                        <input type="text" id="name" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="email">
                          E-mail
                        </label>
                        {' '}
                        <input type="email" id="email" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="phone">
                          Phone
                        </label>
                        {' '}
                        <input type="text" id="phone" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="address">
                          Address
                        </label>
                        {' '}
                        <input type="text" id="address" className="input bg-white" />
                      </div>
                      <button className="btn btn-outline btn-info hover:text-white">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
              <button className="btn w-28 bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-white ms-3">
                Update
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog" onSubmit={(e) => e.preventDefault()}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7">
                      ✕
                    </button>
                  </form>
                  <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="Add_information">
                      <h3 className="heading p-4 text-3xl flex items-center justify-center">
                        Fill Up
                      </h3>
                      <hr className="mb-3" />
                      <div className="field">
                        <label htmlFor="name">
                          Name
                        </label>
                        {' '}
                        <input type="text" id="name" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="email">
                          E-mail
                        </label>
                        {' '}
                        <input type="email" id="email" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="phone">
                          Phone
                        </label>
                        {' '}
                        <input type="text" id="phone" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="address">
                          Address
                        </label>
                        {' '}
                        <input type="text" id="address" className="input bg-white" />
                      </div>
                      <button className="btn btn-outline btn-info hover:text-white">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[540px]">
                <thead>
                  <tr>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                      Name
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                      Id
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block" />
                        {' '}
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          Shumon Ahmed
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        089734
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        shumon@gmail.com
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block" />
                        {' '}
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          Shumon Ahmed
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        089734
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        shumon@gmail.com
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block" />
                        {' '}
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          Shumon Ahmed
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        089734
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        shumon@gmail.com
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block" />
                        {' '}
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          Shumon Ahmed
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        089734
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        shumon@gmail.com
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block" />
                        {' '}
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          Shumon Ahmed
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        089734
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        shumon@gmail.com
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="gap-6 mb-6">
          <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
            <div className="flex justify-between mb-4 items-start">
              <div className="font-medium">
                course List
              </div>
            </div>
            <div className="flex items-center mb-4 order-tab">
              <button className="btn w-28 bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-white">
                ADD
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog" onSubmit={(e) => e.preventDefault()}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7">
                      ✕
                    </button>
                  </form>
                  <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="Add_information">
                      <h3 className="heading p-4 text-3xl flex items-center justify-center">
                        Fill Up
                      </h3>
                      <hr className="mb-3" />
                      <div className="field">
                        <label htmlFor="name">
                          Name
                        </label>
                        {' '}
                        <input type="text" id="name" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="email">
                          E-mail
                        </label>
                        {' '}
                        <input type="email" id="email" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="phone">
                          Phone
                        </label>
                        {' '}
                        <input type="text" id="phone" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="address">
                          Address
                        </label>
                        {' '}
                        <input type="text" id="address" className="input bg-white" />
                      </div>
                      <button className="btn btn-outline btn-info hover:text-white">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
              <button className="btn w-28 bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-white ms-3">
                Delete
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog" onSubmit={(e) => e.preventDefault()}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7">
                      ✕
                    </button>
                  </form>
                  <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="Add_information">
                      <h3 className="heading p-4 text-3xl flex items-center justify-center">
                        Fill Up
                      </h3>
                      <hr className="mb-3" />
                      <div className="field">
                        <label htmlFor="name">
                          Name
                        </label>
                        {' '}
                        <input type="text" id="name" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="email">
                          E-mail
                        </label>
                        {' '}
                        <input type="email" id="email" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="phone">
                          Phone
                        </label>
                        {' '}
                        <input type="text" id="phone" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="address">
                          Address
                        </label>
                        {' '}
                        <input type="text" id="address" className="input bg-white" />
                      </div>
                      <button className="btn btn-outline btn-info hover:text-white">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
              <button className="btn w-28 bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-white ms-3">
                Update
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog" onSubmit={(e) => e.preventDefault()}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7">
                      ✕
                    </button>
                  </form>
                  <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="Add_information">
                      <h3 className="heading p-4 text-3xl flex items-center justify-center">
                        Fill Up
                      </h3>
                      <hr className="mb-3" />
                      <div className="field">
                        <label htmlFor="name">
                          Name
                        </label>
                        {' '}
                        <input type="text" id="name" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="email">
                          E-mail
                        </label>
                        {' '}
                        <input type="email" id="email" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="phone">
                          Phone
                        </label>
                        {' '}
                        <input type="text" id="phone" className="input bg-white" />
                      </div>
                      <div className="field">
                        <label htmlFor="address">
                          Address
                        </label>
                        {' '}
                        <input type="text" id="address" className="input bg-white" />
                      </div>
                      <button className="btn btn-outline btn-info hover:text-white">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[540px]">
                <thead>
                  <tr>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                      Name
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                      Teacher
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          SAD
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        Shumon
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        10:30
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          SAD
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        Shumon
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        10:30
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          SAD
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        Shumon
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        10:30
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          SAD
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        Shumon
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        10:30
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">
                          SAD
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        Shumon
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        10:30
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
