import { useEffect, useState } from "react";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";
import Enrollments from "./Enrollments";
import Swal from "sweetalert2";

const Courses = () => {
  const [courseList, setCourseList] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remaningHour, setRemaninghour] = useState(0);

  const handleSelectedCourse = (course) => {
    const isExist = selectedCourse.find(
      (item) => item.course_id == course.course_id
    );
    let credit = course.course_credit;
    let price = course.price;
    if (isExist) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This course is already listed",
      });
    } else {
      selectedCourse.forEach((item) => {
        credit = credit + item.course_credit;
        price += item.price;
      });

      const totalRemaing = 20 - credit;
      if (credit > 20) {
        return Swal.fire("The credit limit exceeded");
      }
      setSelectedCourse([...selectedCourse, course]);
      setTotalCredit(credit);
      setTotalPrice(price);
      setRemaninghour(totalRemaing);
    }
  };

  useEffect(() => {
    fetch("../public/db.json")
      .then((res) => res.json())
      .then((data) => setCourseList(data));
  }, []);
  return (
    <div className="md: flex justify-between">
      <div className="w-2/3 ">
        <div className="flex flex-wrap gap-3 ">
          {courseList.map((course) => (
            <div key={course.id} className=" ">
              <div className="w-72 bg-base-100 shadow-xl mt-6 rounded-xl">
                <div className="px-3 pt-4 ">
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
                    <button
                      onClick={() => handleSelectedCourse(course)}
                      className="bg-blue-600 w-64 rounded-md text-white font-semibold text-lg"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3">
        <Enrollments
          selectedCourse={selectedCourse}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
          remaningHour={remaningHour}
        />
      </div>
    </div>
  );
};

export default Courses;
