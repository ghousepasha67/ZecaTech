import { useCallback, useState } from "react";
import { FiPhoneCall } from 'react-icons/fi';

function Adoption2() {
    const [tab, setTab] = useState('qualityTab');
    const tabClick = useCallback((value) => {
        debugger
        setTab(value.target.id);
    }, [])
    return (

        <div class="relative elementor-widget-container flex-wrap mt-2 adoption-bg-img">
            <div class="md:flex mx-auto font-[sans-serif]">
                <ul class="md:min-w-[230px] inline-block py-5 adoption-tab">
                    <li onClick={tabClick} id="qualityTab" class="tab flex py-5 cursor-pointer transition-all">
                        01. Quality management
                    </li>
                    <li onClick={tabClick} id="adoptio77nTab" class="tab flex font-semibold bg-white py-5 cursor-pointer transition-all">
                        02. Adoption of New Technologies
                    </li>
                    <li onClick={tabClick} id="reliableTab" class="tab flex py-5 cursor-pointer transition-all">
                        03. Reliable Service Delivery
                    </li>
                    <li onClick={tabClick} id="predictableTab" class="tab flex py-5 cursor-pointer transition-all">
                        04. Predictable Performance
                    </li>
                    <li onClick={tabClick} id="commitmentTab" class="tab flex py-5 cursor-pointer transition-all">
                        05. Commitment to excellence
                    </li>
                    <li onClick={tabClick} id="processTab" class="no-border tab flex py-5 cursor-pointer transition-all">
                        06. Process Optimization
                    </li>
                    <li id="processTab" class="tab items-center p-4 flex callForFreeConsultation cursor-pointer transition-all">
                        <FiPhoneCall className='p-2 call-icon' /> Call For Free Consultation</li>
                </ul>
                {tab === 'qualityTab' && (
                    <div class="relative flex items-center gap-12 md:w-5/6 mx-auto font-[sans-serif] adoption-content bg-content-A flex adoption-blury">
                        <div class='marginLeft-45'>
                            <div class="tab-content max-w-2xl p-8 text-left">
                                <h4 class="text-lg font-bold text-gray-600">Why Choose Us?</h4>
                                <h4 class="text-xl font-bold text-gray-600">Quality management</h4>
                                <p class="relative text-sm z-10 text-white mt-4">A quality management approach describes how quality will be managed on the project. This includes the specific processes, procedures, techniques, stand.
                                </p>
                                <a href="#" class="mt-3 text-black hover:text-blue-600 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {tab === 'adoptionTab' && (
                    <div class="relative flex items-center gap-12 md:w-5/6 mx-auto font-[sans-serif] adoption-content bg-content-B adoption-blury">
                        <div class='marginLeft-45'>
                            <div id="settingContent" class="tab-content max-w-2xl block p-8 text-left">
                                <h4 class="text-lg font-bold text-gray-600">Why Choose Us?</h4>
                                <h1 class="text-xl font-bold text-gray-600">Adoption of New Technologies</h1>
                                <p class="relative text-sm z-10 text-white mt-4">Technology adoption is the successful integration of new technology into your businesscu.
                                </p> <a href="#" class="mt-3 text-black hover:text-blue-600 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                )}
                {tab === 'reliableTab' && (
                    <div class="relative flex items-center gap-12 md:w-5/6 mx-auto font-[sans-serif] adoption-content bg-content-C adoption-blury">
                        <div class='marginLeft-45'>
                            <div class="tab-content max-w-2xl p-8 text-left">
                                <h4 class="text-lg font-bold text-gray-600">Why Choose Us?</h4>
                                <h1 class="text-xl font-bold text-gray-600">Reliable Service Delivery</h1>
                                <p class="relative text-sm z-10 text-white mt-4">As a business owner, just selling the best quality services is not sufficient, providing a good delivery service is also an important factor.
                                </p>
                                <a href="#" class="mt-3 text-black hover:text-blue-600 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {tab === 'predictableTab' && (
                    <div class="relative flex items-center gap-12 md:w-5/6 mx-auto font-[sans-serif] adoption-content bg-content-D adoption-blury">
                        <div class='marginLeft-45'>
                            <div class="tab-content max-w-2xl p-8 text-left">
                                <h4 class="text-lg font-bold text-gray-600">Why Choose Us?</h4>
                                <h1 class="text-xl font-bold text-gray-600">Predictable Performance</h1>
                                <p class="relative text-sm z-10 text-white mt-4">Predictable Performance is about creating an environment where you and your team are in control of the company's performance today, next week, next month next year
                                </p>
                                <a href="#" class="mt-3 text-black hover:text-blue-600 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {tab === 'commitmentTab' && (
                    <div class="relative flex items-center gap-12 md:w-5/6 mx-auto font-[sans-serif] adoption-content bg-content-E adoption-blury">
                        <div class='marginLeft-45'>
                            <div class="tab-content max-w-2xl p-8 text-left">
                                <h4 class="text-lg font-bold text-gray-600">Why Choose Us?</h4>
                                <h1 class="text-xl font-bold text-gray-600">Commitment to excellence</h1>
                                <p class="relative text-sm z-10 text-white mt-4">We believe that excellence requires sacrifice, that the payoff is worth it, and that we can't cut corners anywhere.
                                </p>
                                <a href="#" class="mt-3 text-black hover:text-blue-600 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {tab === 'processTab' && (
                    <div class="relative flex items-center gap-12 md:w-5/6 mx-auto font-[sans-serif] adoption-content bg-content-F adoption-blury">
                        <div class='marginLeft-45'>
                            <div class="tab-content max-w-2xl p-8 text-left">
                                <h4 class="text-lg font-bold text-gray-600">Why Choose Us?</h4>
                                <h4 class="text-xl font-bold text-gray-600">Process Optimization</h4>
                                <p class="relative text-sm z-10 text-white mt-4">The main goal of process optimization is to reduce or eliminate time and resource wastage, unnecessary costs, bottlenecks, and mistakes. It improves process workflows.
                                </p>
                                <a href="#" class="mt-3 text-black hover:text-blue-600 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Adoption2;