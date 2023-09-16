import Swal from "sweetalert2";
const Enrollments = ({
  selectedCourse,
  totalCredit,
  totalPrice,
  remaningHour,
}) => {
  console.log("achi");
  let remain = 20;
  if (remaningHour >= 0) {
    remain = remaningHour;
  }
  let count = 1;
  return (
    <div>
      <div className="w-72 bg-base-100 shadow-xl mt-6 ">
        <div className="pl-6">
          <div className="border-b-2">
            <h1 className="font-bold  text-blue-600 text-lg  mb-4">
              Credit Hour Remaining {remain} hr
            </h1>
          </div>
          <div className=" border-b-2 mb-4">
            <div className="mt-4 mb-4">
              <h1 className="font-bold text-xl mb-4">Course Name</h1>
              {selectedCourse.map((course) => (
                <ol key={course.id} className="opacity-60">
                  <li>
                    {count++} {course.course_name}
                  </li>
                </ol>
              ))}
            </div>
          </div>
          <div className="border-b-2">
            <h1 className="text-sm font-medium opacity-80 mt-4  mb-4 ">
              Total Credit Hour :{totalCredit}
            </h1>
          </div>
          <div className="pb-4">
            <h1 className="text-sm font-medium opacity-80 mt-4 mb-4">
              Total Price : {totalPrice} USD
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrollments;
