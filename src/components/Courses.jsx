import { useEffect, useState } from "react";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";
const Courses = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    fetch("../public/db.json")
      .then((res) => res.json())
      .then((data) => setCourseList(data));
  }, []);
  return (
    <div className="flex flex-wrap gap-3 ">
      {courseList.map((course) => (
        <div key={course.id} className=" ">
          <div className="w-72 bg-base-100 shadow-xl mt-6 ">
            <div className="px-3 ">
              <img className="pt-4" src={course.image} alt="" />
              <h1 className="pt-4 font-semibold text-lg">
                {course.course_name}
              </h1>
              <p className="pt-4 font-normal text-sm opacity-60">
                {course.course_details}
              </p>
              <div className="flex justify-between pt-4 opacity-60">
                <div className="flex gap-2 ">
                  <FaDollarSign />
                  <h1 className="font-medium text-base -mt-1">
                    Price: {course.price}
                  </h1>
                </div>
                <div className="flex gap-2">
                  <FaBookOpen className="ml-2" />
                  <h1 className="font-medium text-base -mt-1">
                    Credit: {course.course_credit} hr
                  </h1>
                </div>
              </div>
              <div className="pt-4 pb-4 pl-1">
                <button className="bg-blue-600 w-64 rounded-md text-white font-semibold text-lg">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
