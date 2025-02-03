import TitleComponent from '../../components/common/TitleComponent';
import ContentComponent from '../../components/common/ContentComponent';
import DescriptionComponent from '../../components/common/DescriptionComponent';
import CustomButton from '../../components/common/CustomButton';
const getServersData = {
    title: '-About:',
    content: 'Our Services',
    description: 'Our service portfolio covers an entire software development life cycle and meets varied business needs.'
}
function Servers() {
    return(
        <div class="grid grid-cols-3 gap-4">
      //   <div class="...">
      //   <div class="p-5 mt-1   py-1.25 px-0.75  items-center text-left sm:w-1/2 md:w-full">
      //   <span class="mt-0.5 block font-medium text-sm items-center text-left leading-[1.125rem]">
      //     <TitleComponent   data={getServersData}></TitleComponent>
      //     <ContentComponent data={getServersData}></ContentComponent>
      //     <DescriptionComponent data={getServersData}></DescriptionComponent>
      //   </span>
      //   <button className='border'>Can't find what you need?</button>
      //   <br />
      //   <br />
      //   <CustomButton className='Custombtn theme-btn-one transparent-btn1' name='Ask Us' ></CustomButton>
      // </div>
      //   </div>
      //   <div class="...">
      // <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='Application Services' ></CustomButton>
      // <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='Digital Transformation' ></CustomButton>
      // <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='IT Consulting' ></CustomButton>
      // <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='Management and Support' ></CustomButton>
      //   </div>
      //   <div class="...">
      //   <div className=''>
      //       <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='Software Develoment' ></CustomButton>
      // <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='Staffing and Recruitment' ></CustomButton>
      // <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='Testing And QA' ></CustomButton>
      // <CustomButton className='Custombtn theme-btn-one btn-bg-theme ' name='UX/UI Design' ></CustomButton>
      //       </div>
      //   </div>
        </div> 
    )
}
export default Servers;