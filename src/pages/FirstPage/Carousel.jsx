import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import img from '../../assets/img/banner-replace-1.jpg';
import img1 from '../../assets/img/banner-replace-2.jpg';
import img2 from '../../assets/img/banner-replace-3.jpg';
import CustomButton from '../../components/common/CustomButton';

class Carousel extends React.Component {
    state = { activeIndex: 0 };

    caseStudies = [
        {
            button: 'Our vision to grow Better',
            title: 'Building on belief',
            description: 'At Zeca Technologies,we go beyond helping businesses transform through technology. We help them make a meaningful difference.Translating their aspiration intoreality.',
            imageUrl: img,
            custbnt:'Read More',
            className: 'text-right'
        },
        {
            button: 'Tailred IT Consulting Services',
            title: 'We are proud of the work that we we have done.' ,
            description: 'we provide deep industry expertise and follow a collaborative approach to delivering high-performance technology solution. we strive continuously improve technology solution while continuing to drive client satisfaction',
            imageUrl: img1,
            custbnt:'Read More',
            className: 'text-center'
        },
        {
            button: 'Take your Business to the Next Level',
            title: 'Helping Clients Create the Future',
            description: 'Zeca Technologies combines tech expertise and business intelligence to catalyze change and deliver results.',
            imageUrl: img2,
            custbnt:'Read More',
            className: 'text-left'
        }
    ];
    nextSlide = () => {
        this.setState(prevState => ({
            activeIndex: (prevState.activeIndex + 1) % this.caseStudies.length
        }));
    };

    prevSlide = () => {
        this.setState(prevState => ({
            activeIndex: prevState.activeIndex === 0 ? this.caseStudies.length - 1 : prevState.activeIndex - 1
        }));
    };

    render() {
        const { activeIndex } = this.state;
        const caseStudies = this.caseStudies;
            return (
                    <div className='flex items-center justify-center h-screen'>
                        <div className='absolute left-0 z-10 p-3 cursor-pointer' onClick={this.prevSlide}>
                            <FiArrowLeft size='30' className='text-gray-800 bg-gray-100 rounded-full' />
                        </div>
                        <div className='w-full h-full overflow-hidden'>
                            <img src={caseStudies[activeIndex].imageUrl} className='w-full h-full object-cover' alt='Background' />
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 bg-black bg-opacity-50'>
                                <div className={caseStudies[activeIndex].className + " w-[900px]"}>
                                    <CustomButton className='Custombtn theme-btn-one transparent-btn' name={caseStudies[activeIndex].button} ></CustomButton>
                                    {/* <button className='theme-btn-one text-5xl font-bold text-white mb-8'>{caseStudies[activeIndex].button}</button> */}
                                    {/* <CustomButton className='theme-btn-one' name='Our vision to Grow Brtter'>{caseStudies[activeIndex].button}</CustomButton> */}
                                    <h2 className='text-5xl font-bold text-white mb-8'>{caseStudies[activeIndex].title}</h2>
                                    <p className='text-white mb-10 '>{caseStudies[activeIndex].description}</p>
                                    
                                    <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name={caseStudies[activeIndex].custbnt} ></CustomButton>
                                </div>
                            </div>
                        </div>
                        <div className='absolute right-0 z-10 p-3 cursor-pointer ' onClick={this.nextSlide}>
                            <FiArrowRight size='30' className='text-gray-800 bg-gray-100 rounded-full' />
                        </div>
                    </div>       
            );
        }
        }
        export default Carousel;