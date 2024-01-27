"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";

const Experience = () => {
  return (
    <>
      <div
        className="sm:w-3/4 pt-20 sm:pt-0 p-5 sm:p-0 w-full md:h-screen  mx-auto flex justify-center items-center flex-col"
        id=""
      >
        <>
          <h1 className="hero_text text-center">Qualification</h1>
          <div className="h-1 w-12 bg-[#faa307] rounded-full mx-auto mt-5"></div>
          <p className="text-lg w-full mt-5 font-Nunito font-semibold text-center">
            My Educational Qualification & Work Experience
          </p>
        </>
        <div className="text-black">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work text-black"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              icon={<MdOutlineWork />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "black" }}
              >
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
