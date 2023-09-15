import { useEffect, useState } from "react";

import "./App.css";
import Courses from "./components/Courses";
import Enrollments from "./components/Enrollments";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center mt-4">
          Course Registration
        </h1>
      </div>

      <div className="md: flex justify-between">
        <div className="w-2/3 ">
          <Courses></Courses>
        </div>
        <div className="w-1/3">
          <Enrollments></Enrollments>
        </div>
      </div>
    </>
  );
}

export default App;
