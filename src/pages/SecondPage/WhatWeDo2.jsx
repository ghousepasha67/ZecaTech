
import React, { useState } from "react";
import TitleComponent from '../../components/common/TitleComponent';
import ContentComponent from '../../components/common/ContentComponent';
import DescriptionComponent from '../../components/common/DescriptionComponent';
import Icon from '../../assets/Icon/data.png';
import Icon1 from '../../assets/Icon/migration.png';
import Icon2 from '../../assets/Icon/app-development.png';
import Icon3 from '../../assets/Icon/collaborate.png';
import Icon4 from '../../assets/Icon/oracle-data-integrator.png';
import Icon5 from '../../assets/Icon/mobile-development.png';

const getWhatWeDoData = {
  title: 'What We Do',
  content: 'Effective Solutions',
  description: 'Our team can assist you in transforming your business with the latest tech capabilities to stay ahead of the curve.'
}

const WhatWeDo2 = () => {
  const [showAll, setShowAll] = useState(true);

  const workflows = [
    {
      id: 1,
      Icon: Icon,
      name: 'Data Analytics',
      description: 'Data analytics helps individuals and organization make sense of data & analyze raw data for insights and tends.',
    },
    {
      id: 2,
      Icon: Icon1,
      name: 'Cloud Migration',
      description: 'A cloud migration allows your business to expand and grow painlezzly while working within the exsting infrastrcture.',
    },
    {
      id: 3,
      Icon: Icon2,
      name: 'Web App',
      description: 'Web application help you streamline your business processes with less time and greater accuracy.',
    },
    {
      id: 4,
      Icon: Icon3,
      name: 'Integration Solution',
      description: 'An integration solution provides business all they need to establish connectivity and overcome systems integration.',
    },
    {
      id: 5,
      Icon: Icon4,
      name: 'Oracle Apex',
      description: 'The mission of Oracle APEX is to empower developers to easily build compelling apps with superior functionality.',
    },
    {
      id: 6,
      Icon: Icon5,
      name: 'Mobility Solution',
      description: ' Mobility Solution help in visuailzing everything in a single dashboard allowing quick & transparent decision making.',
    }
  ];

  const displayedWorkflows = showAll ? workflows : workflows.slice(0, 6);

  return (
    <div className="min-h-screen  w-f bg-[#F0F3F9]">
      <div class="p-5 m-0 py-1.25 px-0.75  items-center text-center md:w-full">
        <span class="mt-0.5 block font-medium text-sm items-center text-center leading-[1.125rem]">
          <TitleComponent data={getWhatWeDoData}></TitleComponent>
          <ContentComponent data={getWhatWeDoData}></ContentComponent>
          <DescriptionComponent data={getWhatWeDoData}></DescriptionComponent>
        </span>
      </div>

      <div className="md:grid grid-cols-3 w-w lg:grid-cols-3 gap-6">

        {displayedWorkflows.map((workflow) => (
          <div
            key={workflow.id}
            className="bg-white rounded-xl p-6 shadow-lg transition-shadow duration-200 mb-4">
            <div className="flex flex-col items-center ">

              <div class="icon_box_new_box type_two">
                <span class="borders"></span>
                <div class="icon_box">
                    <img src={workflow.Icon} alt={workflow.Icon} class="svg_image rounded-full object-cover " />
                    <span class="icon_bg_rotate"></span>
                </div>

                <div class="content">
                  <h3 className="text-xl font-semibold text-gray-800 text-color text-center">{workflow.name}</h3>
                  <p className="text-gray-800 p py-10 text-xl text-center">{workflow.description}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo2;