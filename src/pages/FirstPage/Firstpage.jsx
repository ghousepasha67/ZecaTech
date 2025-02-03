import StickyNavbar from '../first page/StickyNavbar';
import Carousel from '../first page/Carousel';
import AboutUs from '../first page/AboutUs';
import WhatWeDo from '../first page/WhatWeDo';
import OurServers from '../first page/OurServers';
import Contact from '../first page/Contact';
import JionOur from '../first page/JoinOur';
import Footer from '../first page/Footer';
import Adoption from '../first page/Adoption';

function Firstpage(params) {
    return (
        <div>
            {/* <StickyNavbar></StickyNavbar> */}
            <div className='mt-6rem'>
                <Carousel></Carousel>
                <AboutUs></AboutUs>
                <WhatWeDo></WhatWeDo>
                <OurServers></OurServers>
                <Adoption></Adoption>
                <Contact></Contact>
                <JionOur></JionOur>
                <Footer></Footer>
            </div>

        </div>
    )
}
export default Firstpage;