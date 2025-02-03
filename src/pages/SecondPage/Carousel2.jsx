import bg1 from '../../assets/img/page-header-default.jpg';

function Carousel2() {
  return (
    <div class="mt-6 relative font-[sans-serif] shadow-lg hover:shadow-2xl  object-cover before:absolute w-full before:h-full      page_header_default::before">
      
      <div class="min-h-[380px] relative page_header_default flex flex-col justify-center items-center text-center p-6">
        <img src={bg1} alt="Banner Image" class="absolute  inset-0 w-full h-full  object-cover" />
        <h2 class="text-white sm:text-4xl about-text text-2xl font-bold mb-6">About Us</h2>
        <nav class="flex breadcrumb" aria-label="Breadcrumb">
          <ol class="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <a href="#" class="inline-flex items-center text-sm font-medium text-white-700   dark:text-white-400 dark:hover:text-white">Home</a>
            </li>
            <li className='inline-flex items-center'>
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-white-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <a href="#" class="ms-1 text-sm font-medium text-white-700   md:ms-2 dark:text-white-400 dark:hover:text-white">About Us</a>
              </div>
            </li>

          </ol>
        </nav>
      </div>
    </div>
  )
}
export default Carousel2;