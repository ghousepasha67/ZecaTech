import img2 from '../../assets/Icon/icon-img-n-1.png';
import img3 from '../../assets/Icon/icon-img-n-2.png';
import img4 from '../../assets/img/two-content-business-partners-discussing-issue.jpg';
import img1 from '../../assets/img/about-us-2-min.png';
import bg from '../../assets/img/shape-1.png';
import ContentComponent from '../../components/common/ContentComponent';
import CustomButton from '../../components/common/CustomButton';
import img from '../../assets/img/India.png';

const getWeAreData = {
    content: 'Leaders in IT Services',
}

function WeAre() {
    return (
        <div className='md:w-5/6 mx-auto m-t-6rem'>
            <div class="flex items-center gap-4">
                <img class="w-12 h-12 rounded-full" src={img} alt="" />
                <div class="font-medium text-left dark:text-white">
                    <div className='text-blue-800 font-semibold india text-base relative'>Started in 2022,</div>
                    <div class="text-sm text-gray-500   india dark:text-gray-400">Operating in India.</div>
                </div>
            </div>
            <div class=" mt-1 bg-white py-1.25 px-0.75 items-center text-left   md:w-full">
                <span class="mt-0.5 blocks font-medium text-sm items-center text-left  leading-[1.125rem]">
                    <h2 className="text-4xl font-semibold tracking-tight text-blue-800 about1 underline text-white">We are</h2>
                    <ContentComponent data={getWeAreData}></ContentComponent>
                </span>
            </div>
            <div class="md:grid mb-20 grid-cols-2 grid-flow-col gap-4 bg-img">
                <div class="text-left md:row-start-1  row-end-4 p-4">
                    <p className='p font'>Zeca Technologies is a provider of IT consulting and software development services. Having started as a small AI product company, we switched to IT services and since we have helped IT organizations and software product companies improve business performance and quickly win new customers.</p>
                    <br />
                    <p className='p font'>Our passion and entrepreneurial culture will ensure that we deliver for our customers in safety, quality and assurance – today and in the future.</p>
                    <div className=''>
                        <div className='flex text-left text-bold item-right about1 h-full'>
                            <div className='flex h-full gap-4 read-more-border'>
                                <img src={img2} alt={img2} className='h-full' />
                                <h3>Tailored Advice & Support</h3>
                            </div>
                            <div className='flex h-full gap-4 read-more-border'>
                                <img src={img3} alt={img3} className='h-full' />
                                <h3>Flexible Company Policies</h3>
                            </div>
                        </div>
                        <div >
                            <CustomButton className='Custombtn theme-btn-one btn-bg-theme' name='Our Services'></CustomButton>
                        </div>
                    </div>
                </div>
                <div className="object-cover m-t-13 h-full w-full relative">
                    <img src={bg} alt={bg} className='plane-bg-img' />
                    <div class="row-end-3 row-span-2 grid md:absolute md:top-0 md:right-0">
                        <div className='md:flex'>
                            <img src={img4} className='object-cover rounded-3xl height-22 width-16 p-4' alt={img4} />
                            <img src={img1} className='object-cover rounded-3xl height-22 width-16 p-4 mt-5' alt={img1} />
                        </div>
                        <CustomButton className='Custombtn theme btn-bg-theme' name='Make sense for your business'></CustomButton>
                    </div>
                    <div className='classBox mb-7 mt-4 float-left'>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeAre;