import { useCallback, useState } from "react";
import testing from '../../assets/img/testing.jpg';
import ui from '../../assets/img/ui.jpg';
import it from '../../assets/img/It Consulting.jpg';
import Application from '../../assets/img/ApplicationServices.jpg';
import Management from '../../assets/img/management.jpg';
import Staffing from '../../assets/img/view.jpg';
import Digital from '../../assets/img/digital.jpg';
import Software from '../../assets/img/software.jpg';
import Icon from '../../assets/Icon/icon-image-nike.png';
import bg from '../../assets/img/service-sidebar-contact-bg.jpg';
import CustomButton from "../../components/common/CustomButton";


function Servicepage() {
    const [tab, setTab] = useState('Testing and QA');
    const tabClick = useCallback((value) => {
        setTab(value.target.id);
    }, [])
    return (
        <div class="relative  elementor-widget-container flex-wrap mt-2">
            <div class="md:flex mx-auto font-[sans-serif]">
                <div className="border-x-2 md:col-lg-4">
                <div className="widget-title">
                            <h1 className="text-color">OurServices</h1>
                        </div>
                    <ul class="min-w-[330px] inline-block  md:py-1-25 border-left-width: 2px; .mb-10 li-a ml5">
                       
                        <li onClick={tabClick} id="Testing and QA" class="border-b-2 tab flex py-1-25 cursor-pointer transition-all">
                            Testing and QA
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="arrowIcon w-3 fill-current -rotate-90 ml-auto transition-all duration-500"
                                viewBox="0 0 451.847 451.847">
                                <path
                                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                                    data-original="#000000" />
                            </svg>
                        </li>
                        <li onClick={tabClick} id="UI/UX Design Services" class="border-b-2  tab flex py-1-25 cursor-pointer transition-all">
                            UX/UI Design
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="arrowIcon w-3 fill-current -rotate-90 ml-auto transition-all duration-500"
                                viewBox="0 0 451.847 451.847">
                                <path
                                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                                    data-original="#000000" />
                            </svg>
                        </li>
                        <li onClick={tabClick} id="IT Consulting Services" class="border-b-2 tab flex py-1-25  cursor-pointer transition-all">
                            IT Consuting
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="arrowIcon w-3 fill-current -rotate-90 ml-auto transition-all duration-500"
                                viewBox="0 0 451.847 451.847">
                                <path
                                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                                    data-original="#000000" />
                            </svg>
                        </li>
                        <li onClick={tabClick} id="Application Services" class="border-b-2  tab flex py-1-25 cursor-pointer transition-all">
                            Application Services
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="arrowIcon w-3 fill-current -rotate-90 ml-auto transition-all duration-500"
                                viewBox="0 0 451.847 451.847">
                                <path
                                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                                    data-original="#000000" />
                            </svg>
                        </li>
                        <li onClick={tabClick} id="Management and Support Services" class="border-b-2 tab flex py-1-25 cursor-pointer transition-all">
                            Manegement and Support
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="arrowIcon w-3 fill-current -rotate-90 ml-auto transition-all duration-500"
                                viewBox="0 0 451.847 451.847">
                                <path
                                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                                    data-original="#000000" />
                            </svg>
                        </li>
                        <li onClick={tabClick} id="Staffing and Recruitment Services" class="border-b-2 tab flex py-1-25 cursor-pointer transition-all">
                            Staffing and Recruitment
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="arrowIcon w-3 fill-current -rotate-90 ml-auto transition-all duration-500"
                                viewBox="0 0 451.847 451.847">
                                <path
                                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                                    data-original="#000000" />
                            </svg>
                        </li>
                        <li onClick={tabClick} id="Digital Transformation Services" class="border-b-2 tab flex py-1-25 cursor-pointer transition-all">
                            Digital Transfoamation
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="arrowIcon w-3 fill-current -rotate-90 ml-auto transition-all duration-500"
                                viewBox="0 0 451.847 451.847">
                                <path
                                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                                    data-original="#000000" />
                            </svg>
                        </li>
                        <li onClick={tabClick} id="Software Development Services" class="border-b-2 tab flex py-1-25 cursor-pointer transition-all">
                            Software Development
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="arrowIcon w-3 fill-current -rotate-90 ml-auto transition-all duration-500"
                                viewBox="0 0 451.847 451.847">
                                <path
                                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                                    data-original="#000000" />
                            </svg>
                        </li>
                    </ul>
                    <div class="relative  font-[sans-serif]  mt-40 ml-2 py before:inset-0 before:z-10">
                        <img src={bg} alt="Banner Image" class="absolute inset-0 w-full   object-cover" />
                        <div class=" relative z-50  mx-auto flex flex-col justify-center items-center text-center p-6">
                            <h2 class="text-white     font-bold mb-6">Have Questions?</h2>
                            <h5 class="text-white  mb-10 font-bold mb-6">Nothing prevents our being to what we like.</h5>
                            <button className="text-white">jobs@zecatech.com</button>
                        </div>
                        <div class="relative py-4-25">
                            <figcaption class="text-base">
                                <CustomButton className='Custombtn theme-btn-one btn-bg-theme' name='Concate Us'></CustomButton>
                            </figcaption>
                        </div>
                    </div>
                    </div>
                {tab === 'Testing and QA' && (
                    <div>
                        <div class="relative flex flex-wrap items-center gap-12 bg-[#fffff] ml10 m-t-6rem mx-auto font-[sans-serif]  flex ">
                            <div class=" items-center  justify-center h-48 mb-4 rounded  ">
                                <p class="text-2xl text-gray-400 dark:text-gray-500" />
                                <h5 className="text-blue-800 font-semibold india mt-3 pl-13 text-base relative title text-left">Testing and QA Services</h5>
                                <h1 className="heading text-left pl-13">Testing and QA Services</h1>
                                <p className=" text-black-400 text-left dark:text-gray-500 mlb-1">In the dynamic world of IT, the quality and reliability of software are paramount.</p>
                                <div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                                    <p className=" text-black-400 mft dark:text-gray-500">At our comapny, we understand that flawless software delivery is crucial to your business success. Our comprehensive Testing and Quality Assurance (QA) services ensure your applications are robust, reliable, and ready to meet user expectations.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center  mt-11 max-w-4xl gap-5 mx-auto ml-1">
                            <div class="p-4 max-w-sm box-icon  shadow-2xl m-t-b ">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex  items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg  text-left font-medium about1">Automated and Manual Testing</h2>
                                    </div>
                                    <div class="flex flex-col justify-between  m-0 flex-grow">
                                        <p class="font-hw m-5  text-left text-base text-gray-400">Combining the precision of automated testing tools with the thoroughness of manual testing, we ensure a comprehensive evaluation of your software.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b box-icon p-t-b shadow-2xl first-box-m">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg text-left font-medium about1">Comprehensive Testing Strategies</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base m-5 text-left text-gray-400">We employ a range of testing methodologies tailored to your specific needs, including functional testing, performance testing, security testing, and usability testing.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="max-w-sm simple_image_boxes-parallax_cover img   p-t-b m-t-b-10">
                                <div class="flex items-center mb-3 object-cover flex rounded-lg h-full flex-col">
                                    <img src={testing} className='object-cover rounded-3xl height-22 width-16 p-4' alt="" />
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b1 box-icon shadow-2xl p-t-b m-t-b-16">
                                <div class="flex rounded-lg h-full mb-4 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-left text-lg font-mediumtext-left about1">Continuous Integration and Continuous Deployment (CI/CD)</h2>
                                    </div>
                                    <div class="flex flex-col  flex-grow">
                                        <p class="font-hw m-5 text-left text-base text-gray-400">Integrating QA into your CI/CD pipeline allows for continuous testing and immediate feedback, enabling rapid identification and resolution of defects.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b-11 box-icon m-l-45 m-b text-left p-t-b">
                                <div class="flex rounded-lg h-full   p8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Our Testing and QA Services Include:</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400"> We are dedicated to delivering excellence through rigorous testing and QA processes.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Functional Testing</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Validating that your software operates according to the specified requirements and performs all desired functions.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Performance Testing</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Assessing the speed, responsiveness, and stability of your software under various conditions.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium about1 f-s">Security Testing</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Identifying vulnerabilities and ensuring your software is secure from potential threats and breaches.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="accordion-collapse" data-accordion="collapse" className="mt8 faq_header">
                                    <h1 className="heading">Why Choose our Company for Testing and QA?</h1>
                                    <h2 id="accordion-collapse-heading-1">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>Expert Team</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 bg-[#F0F3F9] dark:bg-gray-900">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Our QA specialists bring years of experience and a deep understanding of industry best practices, ensuring thorough and effective testing processes.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-2">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                            <span>Cutting-Edge Tools</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 bg-[#F0F3F9]">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Utilizing the latest tools and technologies, we deliver precise and efficient testing outcomes, enhancing the quality of your software.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-3">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                            <span>Customized Solutions</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700 bg-[#F0F3F9]">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">We tailor our testing services to meet your unique requirements, ensuring that our solutions align perfectly with your business goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {tab === 'UI/UX Design Services' && (
                    <div>
                        <div class="relative  items-center gap-12  ml10 m-t-6rem mx-auto font-[sans-serif] m-l  flex ">
                            <div class=" items-center  justify-center h-48 mb-4 rounded  ">
                                <p class="text-2xl text-gray-400 dark:text-gray-500" />
                                <h5 className="text-blue-800 font-semibold  mt-3 text-base relative title pl-13 text-left">UI/UX Design Services</h5>
                                <h1 className="heading text-left pl-13">UI/UX Design Services</h1>
                                <p className=" text-black-400 text-left dark:text-gray-500 mlb-1">In today's digital age, user experience is at the heart of successful software solutions.</p>
                                <div class="grid grid-cols-1 md:gap-6  md:grid-cols-2">
                                    <p className=" text-black-400 mft  dark:text-gray-500">We specialize in creating intuitive, engaging, and visually stunning user interfaces that enhance user satisfaction and drive business success. Our UI/UX design services ensure that your applications are not only functional but also delightful to use.</p>

                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center  mt-11 max-w-4xl gap-5 mx-auto ml-1">
                            <div class="p-4 max-w-sm box-icon shadow-2xl m-t-b ">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg text-left font-medium about1">Comprehensive Research and Analysis</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw m-5 text-left text-base text-gray-400">Our design process begins with thorough research and analysis. We conduct user interviews, surveys, and usability testing to gather insights. This data-driven approach allows us to create designs that resonate with your target audience.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b box-icon shadow-2xl p-t-b first-box-m">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg text-left font-medium about1">User-Centered Design</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw m-5 text-left text-base text-gray-400">We place your users at the forefront of our design process. By understanding their needs, preferences, and behaviors, we create interfaces that are intuitive and enjoyable. Our user-centered design approach ensures that every interaction is seamless and meaningful.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="max-w-sm simple_image_boxes-parallax_cover img   p-t-b m-t-b-10">
                                <div class="flex items-center mb-3 object-cover flex rounded-lg h-full flex-col">
                                    <img src={ui} className='object-cover rounded-3xl height-22 width-16 p-4' alt="" />
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b1 box-icon shadow-2xl p-t-b m-t-b-16">
                                <div class="flex rounded-lg h-full  p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg text-left font-medium about1">Wireframing and Prototyping</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw m-5 text-left text-base text-gray-400">We develop detailed wireframes and interactive prototypes to visualize the user journey and refine design concepts. This iterative process ensures that our designs are well-thought-out and align with your business objectives before development begins.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b-11 box-icon md:m-l-45 m-b text-left p-t-b">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Our UI/UX Design Services Include:</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">We are passionate about creating exceptional user experiences that drive engagement and satisfaction. Partner with us to elevate your digital products with our expert UI/UX design services.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">User Research</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Conducting comprehensive research to understand user needs, preferences, and pain points.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Wireframing and Prototyping</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Creating detailed wireframes and interactive prototypes to visualize and refine design concepts.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium about1 f-s">Visual Design</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Crafting visually appealing interfaces that reflect your brand identity and enhance user engagement</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="accordion-collapse" data-accordion="collapse" className="mt8">
                                    <h1 className="heading">Why Choose Our Company for UI/UX Design?</h1>
                                    <h2 id="accordion-collapse-heading-1">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>Experienced Designers</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Our team of skilled UI/UX designers brings a wealth of experience and creativity to every project, ensuring innovative and effective design solutions.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-2">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                            <span>Holistic Approach</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">We consider every aspect of the user experience, from initial interaction to final engagement, creating a cohesive and satisfying journey.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-3">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                            <span>Customized Solutions</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">We tailor our design services to your specific needs, ensuring that our solutions align perfectly with your brand and business goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {tab === 'IT Consulting Services' && (
                    <div>
                        <div class="relative  items-center gap-12 ml10  mx-auto font-[sans-serif] m-l m-t-6rem  flex ">
                            <div class=" items-center  justify-center h-48 mb-4 rounded  ">
                                <p class="text-2xl text-gray-400 dark:text-gray-500" />
                                <h5 className="text-blue-800 font-semibold title pl-13 text-left mt-3 text-base relative underline">IT Consulting Services</h5>
                                <h1 className="heading pl-13 text-left">IT Consulting Services</h1>
                                <p className=" text-black-400 text-left dark:text-gray-500 mlb-1">In an era of rapid technological advancements, staying ahead of the curve is essential for business success.</p>
                                <div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                                    <p className=" text-black-400 mft dark:text-gray-500">We provide expert IT consulting services to help you navigate the complexities of the digital landscape. Our seasoned consultants work closely with you to develop strategies that drive innovation, enhance efficiency, and achieve your business goals.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center  mt-11 max-w-4xl gap-5 mx-auto">
                            <div class="p-4 max-w-sm box-icon shadow-2xl m-t-b ">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg text-left font-medium about1">Technology Assessment and Optimization</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw m-5 text-left text-base text-gray-400">By conducting comprehensive technology assessments, we identify areas for improvement and optimization. Our recommendations focus on enhancing performance, reducing costs, and increasing overall efficiency, ensuring you get the most out of your IT investments.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b box-icon shadow-2xl p-t-b first-box-m">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg text-left font-medium about1">Strategic IT Planning</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw m-5 text-left text-base text-gray-400">We begin with a thorough assessment of your current IT infrastructure and business objectives. Our consultants then craft a strategic IT plan tailored to your unique needs, ensuring alignment with your long-term goals and competitive advantage.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="max-w-sm simple_image_boxes-parallax_cover img   p-t-b m-t-b-10">
                                <div class="flex items-center mb-3 object-cover flex rounded-lg h-full flex-col">
                                    <img src={it} className='object-cover rounded-3xl height-22 width-16 p-4' alt="" />
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b1 box-icon shadow-2xl p-t-b m-t-b-16">
                                <div class="flex rounded-lg h-full  p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg text-left font-medium about1">Risk Management and Cybersecurity</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw m-5 text-left text-base text-gray-400">Protecting your digital assets is paramount. Our consultants provide robust cybersecurity strategies and risk management solutions to safeguard your business against potential threats. We ensure your systems are secure, compliant, and resilient.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b-11 box-icon md:m-l-45 m-b text-left p-t-b">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Our IT Consulting Services Include:</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">We are committed to helping you harness the power of technology to achieve your business objectives. Partner with us to navigate the complexities of the digital world and drive your business forward with confidence.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">IT Strategy and Planning</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Developing comprehensive IT strategies that align with your business goals and drive growth.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Technology Assessment</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Evaluating your current IT environment to identify opportunities for optimization and improvement.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium about1 f-s">Digital Transformation</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Guiding your digital transformation journey with the adoption of innovative technologies and practices.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="accordion-collapse" data-accordion="collapse" className="mt8">
                                    <h1 className="heading">Why Choose Our Company for IT Consulting?</h1>
                                    <h2 id="accordion-collapse-heading-1">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>Expertise and Experience</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Our team of seasoned consultants brings a wealth of knowledge and experience across various industries, providing you with reliable and informed guidance.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-2">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                            <span>Customized Solutions</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">We understand that every business is unique. Our solutions are tailored to meet your specific needs, ensuring optimal results and a competitive edge.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-3">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                            <span>Client-Centric Focus</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Your success is our priority. We work closely with you, fostering collaboration and communication, to ensure our solutions align perfectly with your business objectives.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {tab === 'Application Services' && (
                    <div>
                        <div class="relative  items-center gap-12 ml10 m-t-6rem mx-auto font-[sans-serif] m-l  flex ">
                            <div class=" items-center  justify-center h-48 mb-4 rounded  ">
                                <p class="text-2xl text-gray-400 dark:text-gray-500" />
                                <h5 className="text-blue-800 font-semibold title pl-13 text-left mt-3 text-base relative underline">Application Services</h5>
                                <h1 className="heading pl-13 text-left">Application Services</h1>
                                <p className=" text-black-400 text-left dark:text-gray-500 mlb-1">In a rapidly evolving digital landscape, robust and innovative applications are key to driving business success..</p>
                                <div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                                    <p className=" text-black-400 mft dark:text-gray-500">We offer comprehensive application services that encompass the entire application lifecycle, from initial development to ongoing maintenance and support. Our expert team ensures your applications are high-performing, secure, and aligned with your business goals.</p>

                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center  mt-11 max-w-4xl gap-5 mx-auto">
                            <div class="p-4 max-w-sm box-icon shadow-2xl m-t-b ">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg text-left font-medium about1">Application Modernization</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw m-5 text-left text-base text-gray-400">Outdated applications can hinder your business growth. We help you modernize your legacy systems, enhancing their performance, usability, and security. Our modernization services ensure your applications stay relevant and competitive in the digital age.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b box-icon shadow-2xl p-t-b first-box-m">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg  m-5 text-left font-medium about1">Custom Application Development</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw m-5 text-left text-base text-gray-400">We specialize in developing tailor-made applications that address your unique business needs. Our development process is collaborative, ensuring that we deliver solutions that are functional, scalable, and aligned with your strategic objectives.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="max-w-sm simple_image_boxes-parallax_cover img   p-t-b m-t-b-10">
                                <div class="flex items-center mb-3 object-cover flex rounded-lg h-full flex-col">
                                    <img src={Application} className='object-cover rounded-3xl height-22 width-16 p-4' alt="" />
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b1 box-icon shadow-2xl p-t-b m-t-b-16">
                                <div class="flex rounded-lg h-full  p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg  text-left font-medium about1">Maintenance and Support:</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base  m-5 text-left text-gray-400">Our commitment to your success extends beyond development. We offer comprehensive maintenance and support services to ensure your applications remain reliable and up-to-date. Our proactive approach minimizes downtime and keeps your applications running smoothly.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b-11 box-icon md:m-l-45 m-b text-left p-t-b">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Our Application Services Include:</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">We are dedicated to delivering exceptional application services that drive your business forward. Partner with us to build, modernize, and maintain applications that meet your evolving needs and exceed your expectations.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Custom Application Development</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Creating bespoke applications tailored to your unique business requirements and objectives.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Application Modernization</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Upgrading and enhancing legacy applications to improve performance, security, and usability..</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium about1 f-s">Application Maintenance and Support</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Providing ongoing maintenance and support to keep your applications reliable and up-to-date.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="accordion-collapse" data-accordion="collapse" className="mt8">
                                    <h1 className="heading">Why Choose Our Company for Application Services?</h1>
                                    <h2 id="accordion-collapse-heading-1">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>Expertise and Experience</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Our team of skilled developers and engineers bring a wealth of experience in various technologies and industries, delivering reliable and innovative solutions.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-2">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                            <span>Client-Centric Approach</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">We prioritize your business objectives and work closely with you throughout the application lifecycle to ensure our solutions meet your needs and expectations.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-3">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                            <span>Innovative Solutions</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">We stay updated with the latest technological advancements and industry best practices, providing cutting-edge solutions that give you a competitive edge.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {tab === 'Management and Support Services' && (
                    <div>
                        <div class="relative  items-center gap-12  ml10 m-t-6rem mx-auto font-[sans-serif] m-l  flex ">
                            <div class=" items-center  justify-center h-48 mb-4 rounded  ">
                                <p class="text-2xl text-gray-400 dark:text-gray-500" />
                                <h5 className="text-blue-800 font-semibold title pl-13 text-left mt-3 text-base relative underline">Management and Support Services</h5>
                                <h1 className="heading pl-13 text-left">Management and Support Services</h1>
                                <p className=" text-black-400 text-left dark:text-gray-500 mlb-1">In the fast-paced world of IT, effective management and reliable support are essential for maintaining seamless operations and driving business success.</p>
                                <div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                                    <p className=" text-black-400 mft dark:text-gray-500">We provide comprehensive management and support services that ensure your IT infrastructure runs smoothly, securely, and efficiently. Our expert team is dedicated to delivering proactive and responsive solutions tailored to your unique needs.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center  mt-11 max-w-4xl gap-5 mx-auto ml-1">
                            <div class="p-4 max-w-sm box-icon shadow-2xl m-t-b ">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg font-medium  text-left about1">Proactive Monitoring and Maintenance</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base  m-5 text-left text-gray-400">Our proactive monitoring solutions detect and address potential issues before they impact your operations. Regular maintenance and timely updates ensure your systems are always running at peak performance, reducing downtime and enhancing productivity.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b box-icon shadow-2xl p-t-b first-box-m">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg  text-left font-medium about1">IT Infrastructure Management:</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw  m-5 text-left text-base text-gray-400">We offer end-to-end management of your IT infrastructure, ensuring optimal performance and reliability. From servers and networks to cloud environments, our comprehensive services cover all aspects of your IT landscape.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="max-w-sm simple_image_boxes-parallax_cover img   p-t-b m-t-b-10">
                                <div class="flex items-center mb-3 object-cover flex rounded-lg h-full flex-col">
                                    <img src={Management} className='object-cover rounded-3xl height-22 width-16 p-4' alt="" />
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b1 box-icon shadow-2xl p-t-b m-t-b-16">
                                <div class="flex rounded-lg h-full  p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg  text-left font-medium about1">Help Desk and Technical Support</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base  m-5 text-left text-gray-400">Our dedicated help desk and technical support team is available 24/7 to assist with any IT issues you may encounter. We provide fast and effective resolutions to minimize disruptions and keep your business running smoothly.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b-11 box-icon md:m-l-45 m-b text-left p-t-b">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Our Management and Support Services Include:</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">We are committed to providing exceptional management and support services that drive your business forward. Partner with us to ensure your IT infrastructure is always reliable, secure, and optimized for success.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">IT Infrastructure Management</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Comprehensive management of servers, networks, and cloud environments to ensure optimal performance and reliability.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Proactive Monitoring and Maintenance</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Continuous monitoring and regular maintenance to detect and address potential issues before they impact your operations.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium about1 f-s">Help Desk and Technical Support</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">24/7 help desk and technical support services to provide fast and effective resolutions to IT issues.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="accordion-collapse" data-accordion="collapse" className="mt8">
                                    <h1 className="heading">Why Choose Our Company for Management and Support?</h1>
                                    <h2 id="accordion-collapse-heading-1">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>Experienced Professionals</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Our team of seasoned IT professionals brings extensive experience and expertise, delivering reliable and effective management and support services.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-2">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                            <span>Tailored Solutions</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">We understand that every business is unique. Our solutions are customized to meet your specific requirements, ensuring maximum impact and value.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-3">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                            <span>24/7 Availability</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Our round-the-clock support ensures that you have access to assistance whenever you need it, minimizing downtime and keeping your operations running smoothly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {tab === 'Staffing and Recruitment Services' && (
                    <div>
                        <div class="relative  items-center gap-12  ml10 m-t-6rem mx-auto font-[sans-serif] m-l  flex ">
                            <div class=" items-center  justify-center h-48 mb-4 rounded  ">
                                <p class="text-2xl text-gray-400 dark:text-gray-500" />
                                <h5 className="text-blue-800 font-semibold title pl-13 text-left mt-3 text-base relative underline">Staffing and Recruitment Services</h5>
                                <h1 className="heading pl-13 text-left">Staffing and Recruitment Services</h1>
                                <p className=" text-black-400 text-left dark:text-gray-500 mlb-1">In the competitive world of IT, finding the right talent is crucial to your business success.</p>
                                <div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                                    <p className=" text-black-400 mft dark:text-gray-500">We specialize in providing top-tier staffing and recruitment services tailored to meet your specific needs. Whether you need temporary staff for a project, permanent employees for long-term growth, or specialized talent for niche roles, our expert team ensures you get the right fit to drive your business forward.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center  mt-11 max-w-4xl gap-5 mx-auto ml-1">
                            <div class="p-4 max-w-sm shadow-2xl box-icon m-t-b ">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg  text-left font-medium about1">Tailored Recruitment Solutions</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base  m-5 text-left text-gray-400">Every business is unique, and so are its staffing needs. We offer customized recruitment solutions, including contract staffing, direct hire, and executive search services, ensuring we meet your specific hiring goals and timelines.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b shadow-2xl box-icon p-t-b first-box-m">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg  text-left font-medium about1">Comprehensive Talent Acquisition</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base m-5 text-left text-gray-400">We leverage a strategic and thorough approach to talent acquisition, understanding your unique requirements and organizational culture. Our extensive network and deep industry knowledge enable us to source, attract, and retain the best IT professionals.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="max-w-sm simple_image_boxes-parallax_cover img   p-t-b m-t-b-10">
                                <div class="flex items-center mb-3 object-cover flex rounded-lg h-full flex-col">
                                    <img src={Staffing} className='object-cover rounded-3xl height-22 width-16 p-4' alt="" />
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b1 shadow-2xl box-icon p-t-b m-t-b-16">
                                <div class="flex rounded-lg h-full  p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg text-left font-medium about1">Rigorous Screening and Assessment</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base m-5 text-left text-gray-400">Our rigorous screening and assessment process ensures that we present you with candidates who not only have the required technical skills but also fit well within your organizational culture. We conduct thorough interviews, technical assessments, and background checks to ensure the highest quality of hires.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b-11 box-icon md:m-l-45 m-b text-left p-t-b">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Our Staffing and Recruitment Services Include:</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">We are dedicated to helping you find the right talent to drive your business forward. Partner with us to access top-tier IT professionals who can help you achieve your strategic objectives.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Contract Staffing</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Providing skilled professionals for short-term projects or temporary roles to meet your immediate needs.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Direct Hire</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Sourcing and recruiting top talent for permanent positions, ensuring a perfect fit for your long-term goals.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium about1 f-s">Project-Based Staffing</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Assembling dedicated teams for specific projects, ensuring you have the right expertise to deliver successful outcomes..</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="accordion-collapse" data-accordion="collapse" className="mt8">
                                    <h1 className="heading">Why Choose Our Company for Staffing and Recruitment?</h1>
                                    <h2 id="accordion-collapse-heading-1">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>Customized Solutions</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Our tailored recruitment strategies are designed to meet your specific requirements, whether for temporary, permanent, or specialized roles.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-2">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                            <span>What recruitment services do you offer?</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-3">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                            <span>How can I register a job?</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {tab === 'Digital Transformation Services' && (
                    <div>
                        <div class="relative  items-center gap-12 ml10 m-t-6rem mx-auto font-[sans-serif] m-l  flex ">
                            <div class=" items-center  justify-center h-48 mb-4 rounded  ">
                                <p class="text-2xl text-gray-400 dark:text-gray-500" />
                                <h5 className="text-blue-800 font-semibold title pl-13 text-left mt-3 text-base relative underline">Digital Transformation Services</h5>
                                <h1 className="heading pl-13 text-left">Digital Transformation Services</h1>
                                <p className=" text-black-400 text-left dark:text-gray-500 mlb-1">In today’s rapidly evolving digital landscape, embracing digital transformation is essential for staying competitive and achieving long-term success.</p>
                                <div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                                    <p className=" text-black-400 mft dark:text-gray-500">We provide comprehensive digital transformation services that empower your business to harness the full potential of digital technologies. Our expert team collaborates with you to develop and implement strategies that drive innovation, enhance efficiency, and improve customer experiences.</p>

                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center  mt-11 max-w-4xl gap-5 mx-auto ml-1">
                            <div class="p-4 max-w-sm box-icon shadow-2xl m-t-b ">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg text-left font-medium about1">Technology Assessment and Implementation</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw  m-5 text-left text-base text-gray-400">Our experts assess your current technology landscape to identify opportunities for improvement and innovation. We recommend and implement cutting-edge technologies that drive operational efficiency and competitive advantage.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b box-icon shadow-2xl p-t-b first-box-m">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg text-left font-medium about1">Strategic Roadmapping</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base  m-5 text-left text-gray-400">We start by understanding your business goals and challenges. Our team works with you to develop a strategic roadmap for digital transformation that aligns with your objectives, ensuring a clear path to success.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="max-w-sm simple_image_boxes-parallax_cover img   p-t-b m-t-b-10">
                                <div class="flex items-center mb-3 object-cover flex rounded-lg h-full flex-col">
                                    <img src={Digital} className='object-cover rounded-3xl height-22 width-16 p-4' alt="" />
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b1 box-icon shadow-2xl p-t-b m-t-b-16">
                                <div class="flex rounded-lg h-full  p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg font-medium  text-left about1">Process Optimization</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base m-5 text-left text-gray-400">We analyze your existing processes to identify inefficiencies and areas for enhancement. Our process optimization services streamline workflows, reduce costs, and improve overall productivity, ensuring your business operates at peak performance.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b-11 box-icon md:m-l-45 m-b text-left p-t-b">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Our Digital Transformation Services Include:</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">We are committed to helping you navigate the complexities of digital transformation and achieve your strategic goals. Partner with us to unlock the full potential of digital technologies and drive your business towards a successful future.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Digital Strategy Development</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Crafting a strategic roadmap that aligns with your business objectives and guides your digital transformation journey..</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Technology Assessment</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Evaluating your current technology infrastructure to identify areas for improvement and innovation.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium about1 f-s">Cloud Transformation</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Migrating your operations to the cloud for enhanced scalability, flexibility, and cost-efficiency.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="accordion-collapse" data-accordion="collapse" className="mt8">
                                    <h1 className="heading">Why Choose Our Company for Digital Transformation?</h1>
                                    <h2 id="accordion-collapse-heading-1">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>End-to-End Services</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">From initial assessment to full implementation and ongoing support, we provide comprehensive services to guide you through every step of the transformation journey.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-2">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                            <span>What recruitment services do you offer?</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-3">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                            <span>How can I register a job?</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {tab === 'Software Development Services' && (
                    <div>
                        <div class="relative  items-center gap-12  ml10 m-t-6rem mx-auto font-[sans-serif] m-l  flex ">
                            <div class=" items-center  justify-center h-48 mb-4 rounded  ">
                                <p class="text-2xl text-gray-400 dark:text-gray-500" />
                                <h5 className="text-blue-800 font-semibold title pl-13 text-left mt-3 text-base relative underline">Software Development Services</h5>
                                <h1 className="heading pl-13 text-left">Software Development Services</h1>
                                <p className=" text-black-400 text-left dark:text-gray-500 mlb-1">In the fast-paced world of technology, custom software solutions can significantly enhance your business operations, drive growth, and improve efficiency.</p>
                                <div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                                    <p className=" text-black-400 mft dark:text-gray-500">We offer end-to-end software development services tailored to meet your specific needs. Our team of skilled developers, designers, and project managers work collaboratively to deliver high-quality, innovative, and scalable software solutions that align with your business goals.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center  mt-11 max-w-4xl gap-5 mx-auto ml-1">

                            <div class="p-4 max-w-sm box-icon shadow-2xl m-t-b ">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg text-left font-medium about1">Quality Assurance</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base m-5 text-left text-gray-400">Quality is at the heart of everything we do. Our rigorous testing and quality assurance processes ensure that your software is reliable, secure, and performs seamlessly under various conditions. We conduct extensive testing, including unit tests, integration tests, and user acceptance tests, to ensure the highest standards of quality.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b box-icon shadow-2xl p-t-b first-box-m">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg font-medium  text-left about1">Custom Software Development</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base m-5 text-left text-gray-400">We specialize in creating bespoke software solutions that are tailored to your unique requirements. From initial consultation to final deployment, our development process is collaborative and agile, ensuring that we deliver solutions that are functional, scalable, and aligned with your strategic objectives.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="max-w-sm simple_image_boxes-parallax_cover img   p-t-b m-t-b-10">
                                <div class="flex items-center mb-3 object-cover flex rounded-lg h-full flex-col">
                                    <img src={Software} className='object-cover rounded-3xl height-22 width-16 p-4' alt="" />
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b1 box-icon shadow-2xl p-t-b m-t-b-16">
                                <div class="flex rounded-lg h-full  p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div
                                            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={Icon} alt="nike icon" />
                                        </div>
                                        <h2 class="text-white text-lg font-medium text-left about1">Continuous Support and Maintenance</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base m-5 text-left text-gray-400">Our commitment to your success extends beyond the initial deployment. We provide ongoing support and maintenance services to ensure your software remains up-to-date, secure, and optimized for performance. Our proactive approach helps prevent issues before they arise, ensuring smooth and uninterrupted operation.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 max-w-sm m-t-b-11 box-icon md:m-l-45 m-b text-left p-t-b">
                                <div class="flex rounded-lg h-full   p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Our Software Development Services Include:</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">We are dedicated to delivering software solutions that drive innovation and achieve your business objectives. Partner with us to transform your ideas into reality and gain a competitive edge in the digital landscape.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Custom Software Development</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Creating bespoke software solutions tailored to your unique business requirements and goals.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium f-s about1">Web Application Development</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Building responsive and scalable web applications that enhance user engagement and streamline operations.</p>
                                    </div>
                                    <div class="flex items-center mb-3">
                                        <h2 class="text-white text-lg font-medium about1 f-s">Software Prototyping</h2>
                                    </div>
                                    <div class="flex flex-col justify-between flex-grow">
                                        <p class="font-hw text-base text-gray-400">Developing prototypes to validate concepts and gather feedback before full-scale development.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="accordion-collapse" data-accordion="collapse" className="mt8">
                                    <h1 className="heading">Why Choose Our Company for Software Development?</h1>
                                    <h2 id="accordion-collapse-heading-1">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>Expert Team</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Our team of experienced developers and designers bring a wealth of knowledge and expertise across various technologies and industries.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-2">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                            <span>Customized Solutions</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">We deliver tailored software solutions that meet your specific business needs and objectives, ensuring maximum impact and value.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-3">
                                        <button type="button" class="flex items-center mt-4 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                            <span>Innovative Technologies</span>
                                            <kbd className="kbd">▶︎</kbd>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">We leverage the latest technologies and industry best practices to create innovative and future-proof solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Servicepage;