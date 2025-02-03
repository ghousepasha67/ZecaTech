import ContentComponent from '../../components/common/ContentComponent';
import img from '../../assets/img/icon-img-ab-1.jpg';
import img1 from '../../assets/img/icon-img-ab-2.jpg';
import bowandarrow from '../../assets/img/bow and arrow.jpg';
import growthicon from '../../assets/img/growth icon.png';
import miscellaneosicon from '../../assets/img/miscellaneos icon.png';

const getOurServers2Data = {
    title: 'Our Services',
    content: 'Stand Out From The Rest',

}
function OurServers2(params) {
    return (
        <div className=" md:w-full  min-h-screen   p-8  bg-our">
            <div class="p-5 mt-1   py-1.25 px-0.75   items-center text-center   md:w-full">
                <span class="mt-0.5 block font-medium  text-sm items-center  text-center leading-[1.125rem]">
                    <h2 className="text-4xl font-semibold tracking-tight text-blue-800 about m-b-1 underline text-white">Our Services</h2>
                    <ContentComponent data={getOurServers2Data}></ContentComponent>
                </span>
            </div>
            <div class="columns-1 md:columns-2 xl:columns-3 icon_box_all.style_three gap-3 ">
                <div class="break-inside-avoid mb-8">
                    <img class="h-auto max-w-full m-0 m-l-5 rounded-lg" src={img} alt="Gallery image" />
                </div>
                <div class="break-inside-avoid  mb-8">
                    <div class="bg-white-800 px-8 py-10 bg-white m-5 m-t-1 m-l-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto ">
                        <div class="flex flex-col   items-center">
                            <img src={bowandarrow} class="w-20 h-20 rounded-full object-cover" />
                            <div class="text-center">
                                <p class="text-base text-gray-600 font-bold text-color uppercase">Our Mission</p>
                                <h3 class="text-gray-600 text-base mt-3 leading-relaxed">To exceed our customers’ expectations with innovative and bespoke <br /> Assurance, Testing, Inspection and Certification services for their operations <br />and supply chain. Globally. 24/7.</h3>
                            </div>
                        </div>
                    </div>       </div>
                <div class=" break-inside-avoid  mb-8">
                    <div class="bg-white-800 px-8 py-10 bg-white m-r-0 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
                        <div class="flex flex-col  items-center">
                            <img src={growthicon} class="w-20 h-20 rounded-full object-cover" />
                            <div class="mt-6 text-center">
                                <p class="text-base text-gray-600 text-color font-bold uppercase">Our Core Values</p>
                                <h3 class="text-gray-600 text-base mt-3 leading-relaxed"> The foundations and aspirations of our business remain true to those <br /> established by our visionary founders, and their innovation and energy <br /> continue to be our inspiration.</h3>
                                <div class="space-y-6">

                                    <div class="flex items-center">
                                        <input type="radio" class="w-5 h-5" />
                                        <label class="text-sm text-gray-600 ml-4">Integrity</label>
                                    </div>

                                    <div class="flex items-center">
                                        <input type="radio" class="w-5 h-5" />
                                        <label class="text-sm text-gray-600 ml-4">Commitment to excellence</label>
                                    </div>

                                    <div class="flex items-center">
                                        <input type="radio" class="w-5 h-5" />
                                        <label class="text-sm text-gray-600 ml-4">Consumer focus</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="radio" class="w-5 h-5" />
                                        <label class="text-sm text-gray-600 ml-4">Accountability</label>
                                    </div>

                                    <div class="flex items-center">
                                        <input type="radio" class="w-5 h-5" />
                                        <label class="text-sm text-gray-600 ml-4">Inclusiveness</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>       </div>
                <div class=" break-inside-avoid mr-5 mb-17 ">
                    <div className=' bg-white-800 px-8 bg-white py-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4'>
                        <div class="flex flex-col   items-center">
                            <img src={miscellaneosicon} class="w-20 h-20 rounded-full object-cover" />
                            <div class="mt-6 text-center">
                                <p class="text-base text-gray-600 text-color font-bold uppercase">Our Vision</p>
                                <h3 class="text-gray-600 text-base mt-3 leading-relaxed">To be the world’s most trusted partner for Quality Assurance.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" break-inside-avoid mt-15 mb-8">
                    <img class="h-auto  img-h max-w-full rounded-lg" src={img1} alt="Gallery image" />
                </div>
            </div>
        </div>

    )
}
export default OurServers2;