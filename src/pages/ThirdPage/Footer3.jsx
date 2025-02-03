import Logo from '../../assets/img/Zeca-Tech-Final-Logo-Dark-BG.png';
import img from '../../assets/img/authour-image.png';

function Footer3() {
    return (
        <footer class="md:w-full font-sans text-left f-w tracking-wide  px-10 pt-12 pb-6">
            <div class="flex flex-wrap justify-between gap-10">
                <div class="max-w-md">
                    <a href='javascript:void(0)'>
                        <img src={Logo} alt="logo" class='w-36' />
                    </a>
                    <div class="mt-6">
                        <p class="leading-relaxed b f-z-16">Zeca Technologies is a provider of IT consulting and software development services. Having started as a small AI product company, we switched to IT services and since we have helped IT organizations and software product companies.</p>
                    </div>
                    <ul class="mt-10 flex space-x-5">
                        <div class="flex items-center gap-4">
                            <img class="w-10 h-10 rounded-full" src={img} alt="" />
                            <div class="font-medium dark:text-white">
                                <div className='text-blue-800 font-semibold text-base relative'>Need Help?</div>
                                <div class="text-sm text-gray-500  p f-w dark:text-gray-400">Free Consultation</div>
                            </div>
                        </div>
                    </ul>
                </div>
                <div class="max-lg:min-w-[140px]">
                    <h4 class="border-bottom-footer text-gray-800 font-semibold text-base relative f-w max-sm:cursor-pointer">Get In Touch</h4>
                    <div>
                        <h1 class="text-gray-800 font-bold text-base relative p max-md:cursor-pointer">Location</h1>
                        <p class="text-gray-600   b leading-relaxed text-sm">#203, 2nd Floor, Suite No. 345,<br /> Huda techno Enclave, SBR CV <br />Towers, Madhapur Hyderabad <br />
                            -5000081, Telangana</p>
                        <h1 class="text-gray-800 text-base relative p max-sm:cursor-pointer">Cantact</h1>
                        <h4 className='p'>Mail Us: jobs@zecathch.com</h4>
                    </div>
                </div>
                <div class="max-lg:min-w-[140px]">
                    <h4 class="border-bottom-footer text-gray-800 font-semibold text-base relative f-w max-sm:cursor-pointer">Company</h4>
                    <ul class="space-y-4 mt-6">
                        <li>
                            <a href='javascript:void(0)' class='hover:text-gray-800 b text-gray-600 text-sm'>Home</a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' class='hover:text-gray-800 b text-gray-600 text-sm'>About Us</a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' class='hover:text-gray-800 b text-gray-600 text-sm'>Concate Us</a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' class='hover:text-gray-800 b text-gray-600 text-sm'>Services</a>
                        </li>
                    </ul>
                </div>
                <div class="max-lg:min-w-[140px]">
                    <h4 class="border-bottom-footer text-gray-800 font-semibold text-base relative f-w max-sm:cursor-pointer">Our Services</h4>
                    <ul class="space-y-4 mt-6">
                        <li>
                            <a href='javascript:void(0)' class='hover:text-gray-800 b text-gray-600 text-sm'>Application Services</a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' class='hover:text-gray-800  b text-gray-600 text-sm'>Digital Transformation</a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' class='hover:text-gray-800 b text-gray-600 text-sm'>IT Consulting</a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' class='hover:text-gray-800 b text-gray-600 text-sm'>Management and support</a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' class='hover:text-gray-800 b text-gray-600 text-sm'>Software Develpment</a>
                        </li>
                    </ul>
                </div>
                <div class="max-lg:min-w-[140px]">
                    <h4 class="border-bottom-footer text-gray-800 font-semibold text-base relative f-w max-sm:cursor-pointer">Essentials</h4>
                    <ul class="space-y-4 mt-6">
                        <li>
                            <a href='javascript:void(0)' class='hover:text-gray-800 b text-gray-600 text-sm'>Careers</a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' class='hover:text-gray-800 b text-gray-600 text-sm'>Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="mt-10 mb-6 border-gray-300" />
            <div class="flex flex-wrap max-md:flex-col gap-4">
                <ul class="md:flex md:space-x-6 max-md:space-y-2">
                    <li>
                        <p class='text-gray-600 text-sm b md:ml-auto'>© 2024 Zeca Technologies. All Rights Reserved.</p>
                    </li>
                </ul>
                <li className='l-icon md:ml-auto'>
                    <a href='javascript:void(0)'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 112.196 112.196">
                            <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" data-original="#007ab9" />
                            <path fill="#fff" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z" data-original="#f1f2f2" />
                        </svg>
                    </a>
                </li>
            </div>
        </footer>
    )
}
export default Footer3;