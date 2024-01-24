import { mySkills } from "@/data/constants";

const MySkills = () => {
  return (
    <div>
      <h1 className="text-3xl font-Nunito font-bold">My Skills</h1>
      <div className="w-5/6 flex flex-wrap gap-5 mt-8">
        {mySkills.map((item) => {
          return (
            <div key={item.id} className="">
              <p className="bg-slate-300 px-5 py-2 rounded-lg font-Nunito font-semibold">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MySkills;
