import XButton from "../common/Button/XButton";

const ProjectDetails = ({ item }) => {
  return (
    <>
      <>{item.projectDetails}</>
      <div className="mt-10">
        <XButton path={item.link}>Check it out</XButton>
      </div>
    </>
  );
};

export default ProjectDetails;
