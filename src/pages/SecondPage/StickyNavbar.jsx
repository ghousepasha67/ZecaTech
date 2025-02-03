import logo from '../../assets/img/Zeca-Tech-Final-Logo.png';
import { FiUser, FiMessageSquare, FiPhone, FiFolder, FiFileText } from 'react-icons/fi';
import ArrowDown from '../../components/common/ArrowDown';
import { useCallback, useState } from 'react';
import { Menu} from '@headlessui/react';
import CustomButton from '../../components/common/CustomButton';
import logo1 from '../../assets/img/Zeca-Tech-Final-Logo-Dark-BG.png';
import TitleComponent from '../../components/common/TitleComponent';
import ContentComponent from '../../components/common/ContentComponent';
import DescriptionComponent from '../../components/common/DescriptionComponent';

const getServersData = {
  title: '-About:',
  content: 'Our Services',
  description: 'Our service portfolio covers an entire software development life cycle and meets varied business needs.'
}
function StickyNavbar() {
  const [expand, setExpand] = useState(false);

  const handleClick = useCallback(() => {
    setExpand(true);
  }, [expand]);

  const closeNav = useCallback(() => {
    setExpand(false);
  }, [expand]);
  return (
    <div>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <header class=" sm:px-4 sm:px-10 relative z-50">
          <div class='max-w-7xl w-full mx-auto flex flex-wrap items-center gap-4'>
            <a href="javascript:void(0)"><img src={logo} alt="logo" class='w-40' /></a>
            <div id="collapseMenu"
              className={"max-lg:before:fixed max-lg:before:bg-black ml-12 max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50 " + (expand ? '' : 'max-lg:hidden lg:!block')}>
              <button id="toggleClose" onClick={closeNav} class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
                  <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"></path>
                  <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"></path>
                </svg>
              </button>
              <ul class='lg:flex lg:ml-12 lg:gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                <li class='group gap-7 m-r-2 m-l-3 max-lg:border-b max-lg:py-3 relative'>
                  <a href='javascript:void(0)'
                    class='hover:text-[#62360F] text-gray-600 text-[19px] font-bold lg:hover:fill-[#62360F] block'>Home</a> </li>
                <li class='group gap-7 m-r-2 max-lg:border-b max-lg:py-3 relative'>
                  <a href='javascript:void(0)'
                    class='hover:text-[#62360F] text-gray-600 text-[19px] font-bold lg:hover:fill-[#62360F] block'>About Us</a></li>
                <li class='group gap-7 m-r-2 max-lg:border-b max-lg:py-3 relative'>
                  <a href='javascript:void(0)'
                    class='hover:text-[#62360F] text-gray-600 text-[19px] font-bold lg:hover:fill-[#62360F] block'>Services <ArrowDown /></a>
                  <div class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-14 min-w-[905px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                    <div class="grid grid-cols-3 gap-4">
                      <div class="...">
                        <div class="p-5 mt-1   py-1.25 px-0.75  items-center text-left sm:w-1/2 md:w-full">
                          <span class="mt-0.5 block font-medium text-sm items-center text-left leading-[1.125rem]">
                            <TitleComponent data={getServersData}></TitleComponent>
                            <ContentComponent data={getServersData}></ContentComponent>
                            <DescriptionComponent data={getServersData}></DescriptionComponent>
                          </span>
                          <button className='border'>Can't find what you need?</button>
                          <br />
                          <br />
                          <CustomButton className='Custombtn theme-btn-one transparent-btn1' name='Ask Us' ></CustomButton>
                        </div>
                      </div>
                      <div class="text-left">
                        <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='Application Services' ></CustomButton>
                        <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='Digital Transformation' ></CustomButton>
                        <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='IT Consulting' ></CustomButton>
                        <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='Management and Support' ></CustomButton>
                      </div>
                      <div class="text-left">
                          <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='Software Develoment' ></CustomButton>
                          <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='Staffing and Recruitment' ></CustomButton>
                          <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='Testing And QA' ></CustomButton>
                          <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='UX/UI Design' ></CustomButton>
                      </div>
                    </div>
                  </div>
                </li>
                <li class='group gap-7 m-r-2 max-lg:border-b max-lg:py-3 relative'>
                  <a href='javascript:void(0)' class='hover:text-[#62360F] text-gray-600 text-[19px] font-bold lg:hover:fill-[#62360F] block'>Careers</a>
                </li>
              </ul>
            </div>
            <div class='flex ml-auto'>
              <button type="submit" class="mr-4 inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium rounded-lg">
                <svg class="w-4 h-4 me-2" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>
              <CustomButton className='Custombtn theme-btn-one btn-bg-theme mt-4 hw' name='Get In Touch'></CustomButton>
              <button onClick={handleClick} id="toggleOpen" class='lg:hidden ml-7'>
                <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
              </button>

            </div>
            <Menu as="div" className="relative ml-3 ">
              <div>
                <button class='ccc p-2 relative border rounded-full flex items-center transition-all font-bold' className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  <div>
                    <dialog id="my_modal_3" className="modal max-w-4xl">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className='flex '>
                          <div className='w-full p-c px-4 items-center'>
          <div class="px-4">
            <div class="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-md">
              <form class="mt-8 grid gap-6">
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
                    <textarea rows="3" name="subject" id="subject" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder='Enter Your Message'/>
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
                          <div className='w-full bg-gray-50 max-w-4xl p-4 text-left'>
                            <img src={logo1} alt="" class='w-40 mb-8' />
                            <p class=" leading-relaxed b f-z-16 text-sm">Zeca Technologies is a provider of IT consulting and software development services. Having started as a small AI product company, we switched to IT services and since we have helped IT organizations and software product companies improve business performance and quickly win new customers.</p>                                          {/* <button className='theme-btn-one text-5xl font-bold text-white mb-8'>{caseStudies[activeIndex].button}</button> */}
                            <button className='theme-btn-one text-5xl font-bold text-black mb-8'>Read more</button>
                            <p class='text-gray-600 text-sm b md:ml-auto'>© 2024 Zeca Technologies. All Rights Reserved.</p>

                          </div>
                        </div>

                      </div>
                    </dialog>
                  </div> 
                  </button>
                  </div>
            </Menu>
          </div>
        </header>
      </nav>

    </div>
  )
}
export default StickyNavbar;