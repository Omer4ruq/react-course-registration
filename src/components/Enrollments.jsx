const Enrollments = ({
  selectedCourse,
  totalCredit,
  totalPrice,
  remaningHour,
}) => {
  console.log("achi");

  let count = 1;
  return (
    <div>
      <div className="w-72 bg-base-100 shadow-xl mt-6 ">
        <div className="pl-6">
          <h1 className="font-bold  text-blue-600 text-lg border-b-2">
            Credit Hour Remaining {remaningHour} hr
          </h1>
          <div className="border-b-2">
            <h1 className="font-bold text-xl">Course Name</h1>
            {selectedCourse.map((course) => (
              <ol key={course.id} className="opacity-60">
                <li>
                  {count++} {course.course_name}
                </li>
              </ol>
            ))}
          </div>
          <h1 className="text-sm font-medium opacity-80 mt-4 border-b-2">
            Total Credit Hour :{totalCredit}
          </h1>
          <h1 className="text-sm font-medium opacity-80 mt-4 border-b-2">
            Total Price : {totalPrice} USD
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Enrollments;
