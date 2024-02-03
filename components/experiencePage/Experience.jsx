"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolOutline } from "react-icons/io5";

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
        <div className="text-black border">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work text-black"
              contentStyle={{
                color: "#000",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                border: "1px solid #0f0f0f",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  ",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                border: "1px solid #0f0f0f",
              }}
              date=" 2021 - 2024"
              iconStyle={{
                color: "#000",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                border: "1px solid #0f0f0f",
              }}
              icon={<IoSchoolOutline />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "black" }}
              >
                OP Jindal University
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Raigarh, Chattisgarh
              </h4>
              <p>B.Tech in Computer Science & Engineering</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
