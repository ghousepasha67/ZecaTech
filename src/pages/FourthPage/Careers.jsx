import bg1 from '../../assets/img/cover1.0e02dce62a260cd1dbbafeacf59e558a.jpg';
import logo from '../../assets/img/Zeca-Tech-Final-Logo-Dark-BG.png';
import CustomButton from '../../components/common/CustomButton';
import zohoo from '../../assets/img/zohooo.png';
// import { SearchFi,FiMapPin} from 'react-icons/fi';




function Careers(params) {
    return (
        <div>
            <div class="header-block mb-5 cnd-login-menu flex">
                <a href="" rel="noopener noreferrer" target="_blank" class="brand">
                    <img src={logo} alt="company logo" class='w-40 object-cover zeca-hw' />
                </a>
                <div class="cw-main-menu-wrap">
                    <nav class="main-menu flex" id="cw-menu-mobile">
                        <ul className='display-p main-menu-li'> 
                            <li class="cw-navigation flex">
                                <a href="" rel="noopener noreferrer" target="_blank" title="Home">Home</a>
                            </li>
                            <li class="cw-navigation pl2">
                                <a href="javascript:void(0)" title="Jobs" click="career-website => scrollToJobs()">Jobs</a>
                            </li>
                            <li class="cw-Mcandidate-login">
                            </li>
                        </ul>
                    </nav> </div>
            </div>
            <div class="relative font-sans before:absolute before:w-full before:h-full  before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img src={bg1} alt="Banner Image" class="absolute background-color w-full h-full" />
                <div class="min-h-[550px] relative z-50 p-t14 h-full max-width mx-auto flex flex-col justify-center items-center text-center text-white">
                    <h2 class="text-white font-l cw-bg2-title  mb-6">Find the career of your dreams @ Zeca Technologies</h2>
                    <h2 class="text  mb-6">We're more than just a workplace. We're a family.</h2>
                    <p class="text-lg text-base mb-3 text-center text-gray-200">We know that finding a meaningful and rewarding job can be a long journey. Our goal is to make that process as easy as possible for you, and to create a work environment that's satisfying - one where you'll look forward to coming to every day. Start your journey with us by browsing available jobs.</p>
                    <CustomButton className='Custombtn theme btn-bg-theme btn-view' name='View openings'></CustomButton>
                </div>
            </div>

            <div className=''>
                <div className="t-m">
                    <h1 className="jionus-head">Join Us</h1>
                    <h3 className="current">Current Openings</h3>
                </div>
                <div className="md:flex mr-17 text-margin ">
                    <label className="form-control mr-8 w-full">
                        <div className="">
                            <span className="md:text-left">What</span>
                        </div>
                        <input type="text" placeholder="Job title or skill" className="input input-bordered md:w-full textarea boder" />
                    </label>
                    {/* <SearchFi className='p-2 contact-form-icon'/> */}
                    <label className="form-control mr-8 w-full">
                        <div className="">
                            <span className="text-left">where</span>
                        </div>
                        <input type="text" placeholder="City,state/province or country" className="input input-bordered md:w-full textarea boder" />
                    </label>
                    {/* <FiMapPin className='p-2 contact-form-icon'/> */}
                    <button class='text-white  bg-[#0191BD] border border-full-3 flex items-center transition-all search-btn font-bold px-4-25 py-3'>Search</button>
                </div>
                <h1 className='careers-search-results'>Currently we don't have any open jobs at Zeca Technologies. Check out our page sometime later.
                </h1>
            </div>
            <div>
                <footer className="footer bg-base-200 text-base-content p-10">
                    <div>
                        <a href="visit website" className='underline text-color'>visit website</a>
                    </div>
                </footer>
                <footer className="footer bg-base-200 bg-[#F5F6FA] p-28 md:text-base-content border-base-300 border-t py-4">
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className='poweredby'>
                            <h1 className='cw-poweredby-p'>Powered By</h1>
                            <img src={zohoo} alt="" className='zoho' />
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    )
}
export default Careers;
 