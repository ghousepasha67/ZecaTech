
function JionOur2() {
  return (
    <div className="relative isolate overflow-hidden flex-wrap j-o bg-[#0191BD] py-16 sm:py-24 lg:py-32 md:w-full">
      <div className=" mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="text-left max-w-xl border-content">
            <h2 className="text-4xl font-semibold tracking-tight text-white">Join Our Mailing List</h2>
            <p className="mt-4 text-lg text-gray-300">For receiving our news and updates in your inbox directly. </p>
          </div>
          <div className="mt-6   max-w-md flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="your email Address"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            <button
              type="submit"
              className="flex-none rounded-md bg-[#0191BD]  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" >
              SING UP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default JionOur2;
