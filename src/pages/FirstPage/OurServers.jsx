import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { default as Icon, default as Icon6 } from '../../assets/Icon/app-development-1-150x150.png';
import Icon3 from '../../assets/Icon/customer-service-150x150.png';
import Icon7 from '../../assets/Icon/exam-150x150.png';
import Icon4 from '../../assets/Icon/interview.png';
import Icon2 from '../../assets/Icon/multiple-users-silhouette-150x150.png';
import Icon1 from '../../assets/Icon/system-integration-150x150.png';
import Icon5 from '../../assets/Icon/ui-150x150.png';
import img4 from '../../assets/img/close-up-mobile-phone-with-cloud-apps (1).jpg';
import img7 from '../../assets/img/female-applicant-interviewed-by-hr-mangers.jpg';
import img6 from '../../assets/img/hr-representatives-positively-greeting-female-job-candidate.jpg';
import img from '../../assets/img/man-using-digital-tablet-psd-mockup-smart-technology.jpg';
import img5 from '../../assets/img/quality-control-improvement-development-concept.jpg';
import img2 from '../../assets/img/two-content-business-partners-discussing-issue.jpg';
import img3 from '../../assets/img/website-development.jpg';
import img1 from '../../assets/img/woman-hacker-using-dangerous-virous-steal-bank-information-programmer-writing-malware-cyber-attacks-using-performance-laptop-during-midnight.jpg';
import ContentComponent from '../../components/common/ContentComponent';
import DescriptionComponent from '../../components/common/DescriptionComponent';
import TitleComponent from '../../components/common/TitleComponent';

const getWhatWeDoData = {
  title: 'Our Services',
  content: 'Key Areas of Expertise',
  description: 'We IT-enable all kinds of B2B, B2C interactions and internal operations.'
}

const additionalPosts = [
  {
    id: 3,
    title: 'Staffing and Recruitment',
    excerpt: 'The ability to hire and develop great talent is critical for todays smartest…',
    imageUrl: img2,
    IconUrl: Icon2,
  },
  {
    id: 4,
    title: 'Management and Support',
    excerpt: 'Managed IT services is a cost-effective way to manage your IT infrastructure. focus…',
    imageUrl:  img3,
    IconUrl: Icon3,
  },
  {
    id: 5,
    title: 'Application Services',
    excerpt: 'The full set of services around development and maintenance business-critical applications.',
    imageUrl:img4 ,
    IconUrl: Icon4,
  },
  {
    id: 6,
    title: 'IT Consulting',
    excerpt: 'IT consultants are analysts who evaluate a companys IT systems to help them…',
    imageUrl: img5 ,
    IconUrl: Icon5,
  },
  {
    id: 7,
    title: 'UX/UI Design',
    excerpt: ' User experience and user interface design for all types of web/mobile apps. UI/UX…',
    imageUrl:  img6,
    IconUrl: Icon6,
  },
  {
    id: 8,
    title: 'Testing and QA',
    excerpt: 'We offer full-range QA and testing outsourcing services, can help to develop your…',
    imageUrl: img7,
    IconUrl: Icon7,
  }
];

const BlogPostCard = ({ post }) => {
  return (
    <div className='relative w-full custom-text-center rounded shadow-lg hover:shadow-2xl mb-20 transition-shadow duration-300 ease-in-out cursor-pointer'>
      <div className='relative  custom-base-img'>
        <img className='w-full h-60 object-cover' src={post.imageUrl} alt={post.title} />
        <div class="overlay"></div>
      </div>
      <div class="relative -m-175 bg-blue-500 w-12 m-l h-12 rounded-full  m-05">
        <figcaption class="text-base p-2">
            <img src={post.IconUrl} alt="" />
        </figcaption>
      </div>
      <div className='px-6 py-4 mb-10'>
        <div className='font-bold text-xl mb-2'>{post.title}</div>
        <p className='text-gray-700 text-base'>{post.excerpt}</p>
        </div>

      <div className='px-6 py-4 justify-between items-center custom-btn-ourserver'>
        <button className='ruby bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-base p-2 '>Read More <FiArrowRight className="w-6 h-6" /></button>
      </div>
    </div>
  );
  
};

export default function BlogPostList() {
  const blogPosts = [
    {
      id: 1,
      title: 'Software Development',
      excerpt: 'The development of reliable and scalable software solutions for any OS, browser and…',
      imageUrl: img,
      IconUrl: Icon,
    },
    {
      id: 2,
      title: 'Digital Transformation',
      excerpt: 'Digital transformation is the executing an individual business strategy for digital adoption.',
      imageUrl: img1,
      IconUrl: Icon1,
    },
    ...additionalPosts
  ];

  return (
    <div>
    <div class="p-5 mt-1 bg-white py-1.25 px-0.75 items-center text-center md:w-full">
    <span class="mt-0.5 block font-medium text-sm items-center text-center leading-[1.125rem]">
      <TitleComponent data={getWhatWeDoData}></TitleComponent>
      <ContentComponent data={getWhatWeDoData}></ContentComponent>
      <DescriptionComponent data={getWhatWeDoData}></DescriptionComponent>
    </span>
  </div>
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {blogPosts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      </div>
    </div>
  );
}