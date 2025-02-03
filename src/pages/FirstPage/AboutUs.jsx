import img2 from '../../assets/Icon/icon-img-n-1.png';
import img3 from '../../assets/Icon/icon-img-n-2.png';
import img4 from '../../assets/img/footer-9bg-min.jpg';
import img1 from '../../assets/img/home-banner-9-min.jpg';
import bg from '../../assets/img/shape-1.png';
import ContentComponent from '../../components/common/ContentComponent';
import CustomButton from '../../components/common/CustomButton';
import TitleComponent from '../../components/common/TitleComponent';
const getAboutUsData = {
    title: 'About Us',
    content: 'Make sense for your business.',
}

function AboutUs() {
    return (
        <div className='md:w-5/6 mx-auto'>
            <div class="p-5 mt-1 bg-white py-1.25 px-0.75 items-center text-center md:w-full">
                <span class="mt-0.5 blocks font-medium text-sm items-center text-center  leading-[1.125rem]">
                    <TitleComponent data={getAboutUsData}></TitleComponent>
                    <ContentComponent data={getAboutUsData}></ContentComponent>
                </span>
            </div>
            <div class="md:grid mb-20 grid-cols-2 grid-flow-col gap-4 bg-img">
                <div className="object-cover h-full w-full relative">
                    <img src={bg} alt={bg} className='plane-bg-img'/>
                    <div class="row-end-3 row-span-2 grid md:absolute md:top-0 md:right-0">
                        <div className='md:flex'>
                            <img src={img4} className='object-cover rounded-3xl height-22 width-16 p-4' alt="" />
                            <img src={img1} className='object-cover rounded-3xl height-22 width-16 p-4 mt-5' alt="" />
                        </div>
                        <CustomButton className='Custombtn theme-btn-one btn-bg-theme' name='Make sense for your business'></CustomButton>
                    </div>

                    <div className='classBox mb-7 mt-4 float-left'>
                        
                    </div>
                </div>
                <div class="text-left row-start-1 row-end-4 p-4">
                    <p className='desc '>We take the time to develop a strong working relationship with you by understanding your needs, your business and your corporate culture.</p>
                    <p className='p'>Zecatech are privileged to work with hundred future- thinking awesome businesses including many of the world's top hardware and get IT service for your technology.</p>
                    <p className='p'>Our team have designed game changing products, consulted for companies as well.</p>
                    <div className=''>
                        <div className='md:flex text-left text-bold item-right about1 h-full'>
                            <div className='flex h-full gap-4 read-more-border'>
                                <img src={img2} alt="" className='h-full'/>
                                <h3>Tailored Advice & Support</h3>
                            </div>
                            <div className='flex h-full gap-4 read-more-border'>
                                <img src={img3} alt="" className='h-full' />
                                <h3>Flexible Company Policies</h3>
                            </div>
                        </div>
                        <div >
                            <CustomButton className='Custombtn theme-btn-one btn-bg-theme' name='Read More'></CustomButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AboutUs;