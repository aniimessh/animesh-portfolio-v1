const ProjectImage = ({ item }) => {
  return (
    <div>
      <img src={item?.path} alt="jettradeimage" className="h-96"/>
    </div>
  );
};

export default ProjectImage;
