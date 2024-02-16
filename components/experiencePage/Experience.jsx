"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolOutline } from "react-icons/io5";
import { educationDetails } from "@/utils/constants";
import { useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";

const Experience = () => {
  const [selectedQualification, setSelectedQualification] =
    useState("education");

  const handleQualificationChange = (event) => {
    setSelectedQualification(event.target.value);
  };
  return (
    <>
      <div
        className="sm:w-3/4 pt-20 pb-20 sm:pt-0 p-5 sm:p-0 w-full md:h-screen  mx-auto flex justify-center items-center flex-col"
        id="qualification"
      >
        <>
          <h1 className="hero_text text-center">Qualification</h1>
          <div className="h-1 w-12 bg-[#faa307] rounded-full mx-auto mt-5"></div>
          <p className="text-lg w-full mt-5 font-Nunito font-semibold text-center">
            My Educational Qualification & Work Experience
          </p>
          <div className="flex gap-x-6 mt-4">
            <label
              htmlFor="academic"
              className={`font-Nunito ${
                selectedQualification === "education"
                  ? "opacity-100"
                  : "opacity-50"
              } cursor-pointer`}
            >
              Education
            </label>
            <input
              type="radio"
              id="academic"
              name="qualification"
              value="education"
              defaultChecked
              onChange={handleQualificationChange}
              className="appearance-none"
            />
            <label
              htmlFor="work"
              className={`font-Nunito ${
                selectedQualification === "work" ? "opacity-100" : "opacity-50"
              } cursor-pointer`}
            >
              Work
            </label>
            <input
              type="radio"
              id="work"
              name="qualification"
              value="work"
              onChange={handleQualificationChange}
              className="appearance-none"
            />
          </div>
        </>
        <div className="text-black w-full h-2/4">
          {selectedQualification === "education" && (
            <VerticalTimeline>
              {educationDetails.map((item) => {
                return (
                  <VerticalTimelineElement
                    key={item.id}
                    className="vertical-timeline-element--work text-black"
                    contentStyle={{
                      color: "#000",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      border: "1px solid #0f0f0f",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgba(0, 0, 0, 0.15)",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      border: "1px solid #0f0f0f",
                    }}
                    date={item.year}
                    iconStyle={{
                      color: "#000",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      border: "1px solid #0f0f0f",
                    }}
                    icon={item.icon}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{ color: "black" }}
                    >
                      {item.collegeName}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {item.place}
                    </h4>
                    <p>{item.course}</p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          )}
          {selectedQualification === "work" && (
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-black"
                contentStyle={{
                  color: "#000",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  border: "1px solid #0f0f0f",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgba(0, 0, 0, 0.15)",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  border: "1px solid #0f0f0f",
                }}
                date="10th-Jul'23 - 4th-Dec'23"
                iconStyle={{
                  color: "#000",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  border: "1px solid #0f0f0f",
                }}
                icon={<BsPersonWorkspace />}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{ color: "black" }}
                >
                  Centum World
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Kolkata, West Bengal
                </h4>
                <p>Software Developer Intern</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          )}
        </div>
      </div>
    </>
  );
};

export default Experience;
