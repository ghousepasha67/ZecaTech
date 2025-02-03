import CustomButton from '../../components/common/CustomButton';
import { FiUser, FiMessageSquare, FiPhone, FiFolder, FiFileText } from 'react-icons/fi';
function Contact(params) {

  return (
    <div>
      <div class="md:grid grid-cols-2 items-center bg-contact">
        <div class="text-left sm:p-12 p-4">
          <h4 class="text-[#ffffff] underline lg: text-2xl font-bold color lg:!leading-[56px]">Let's Get Started</h4>
          <h2 class="text-[#ffffff] lg:text-5xl text-3xl font-bold color  lg:!leading-[56px]">Ready To Make a Real Change?</h2>
          <p class="text-[#ffffff] mt-6 text-base  t.c leading-relaxed">At Zeca Technologies, our mission is solely focused on helping our clients leverage their technology investments to improve business performance.</p>
          <p class="text-[#ffffff] mt-6 text-base t.c leading-relaxed">Contact us and set up an exploratory call to see how our technology consulting services can help YOU meet your business needs.</p>
          <div>
            <h4 class="text-[#ffffff]  lg: text-3xl font-bold color lg:!leading-[56px]">Want to get in touch?</h4>
            <p class="text-[#ffffff] mt-6 text-base t.c leading-relaxed">We'd love to hear from you.</p>
          </div>
        </div>

        <div className='w-full p-c px-4 md:flex items-center'>
          <div class="px-4">
            <div class="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-md">
              <h2 class="text-xl text-white-800  font-bold">Want to get in touch</h2>
              <h2 class="text-xl text-gray-800  font-bold">We'd love to hear from you</h2>

              <form class="mt-8 grid sm:grid-cols-2 gap-6">
              <div>
                <label class="text-gray-800 text-sm text-left block mb-2">Your Name</label>
                <div class="mt-2">
                  <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <input type="text" name="price" id="price" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Enter your Name"/>
                    <div class="grid shrink-0 grid-cols-1 focus-within:relative pr-3">
                      <div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                        <FiUser className='p-2 contact-form-icon'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label class="text-gray-800 text-sm text-left block mb-2">Your Email</label>
                <div class="mt-2">
                  <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <input type="email" name="email" id="email" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Enter your Email"/>
                    <div class="grid shrink-0 grid-cols-1 focus-within:relative pr-3">
                      <div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                        <FiMessageSquare className='p-2 contact-form-icon'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label class="text-gray-800 text-sm text-left block mb-2">Your Number</label>
                <div class="mt-2">
                  <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <input type="number" name="number" id="number" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Enter your Number"/>
                    <div class="grid shrink-0 grid-cols-1 focus-within:relative pr-3">
                      <div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                        <FiPhone className='p-2 contact-form-icon'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label class="text-gray-800 text-sm text-left block mb-2">Your Subject</label>
                <div class="mt-2">
                  <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <input type="text" name="subject" id="subject" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Enter your Subject"/>
                    <div class="grid shrink-0 grid-cols-1 focus-within:relative pr-3">
                      <div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                        <FiFolder className='p-2 contact-form-icon'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label class="text-gray-800 text-sm text-left block mb-2">Your message (optional)</label>
                <div class="mt-2">
                  <div class="flex rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <textarea rows="6" name="subject" id="subject" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder='Enter Your Message'/>
                    <div class="grid shrink-0 grid-cols-1 focus-within:relative pr-3">
                      <div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                        <FiFileText className='p-2 contact-form-icon'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                <div class="col-span-full">
                  <CustomButton className='Custombtn theme-btn-one btn-bg-theme' name='Submit' ></CustomButton>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;