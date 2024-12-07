import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../coursesData.json";

function CoursesList() {
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all" ? data : data.filter((data) => data.semester === filter);

  return (
    <div className="courses-list">
      <div className="btns">
        <button
          className="btn-semester1"
          onClick={() => setFilter("semester-1")}
        >
          Semester 1
        </button>
        <button
          className="btn-semester2"
          onClick={() => setFilter("semester-2")}
        >
          Semester 2
        </button>
        <button className="btn-all" onClick={() => setFilter("all")}>
          Show All
        </button>
      </div>

      <div className="courses">
        {filteredData.map((data) => (
          <Link key={data.id} to={`course/${data.id}`} className="box">
            <strong>Course:</strong> {data.course}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CoursesList;
