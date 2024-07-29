import React from "react";

export default function Education() {
  let edu = [
    {
      id: 1,
      title: "Matric",
      year: 2013,
      school: "Govt High School Bandai Payeen",
    },
    {
      id: 2,
      title: "Fsc",
      year:"2016 - 2018",
      school: "Govt Dagree Collage Wari",
    },
    {
      id: 3,
      title: "Bs Computer Science",
      year:"2018 - 2023",
      school: "Shaheed Benazir Bhutto University, Sheringal",
    },
    {
      id: 4,
      title: "Diploma Information Technoogy",
      year:"2021 - 2022",
      school: "Science Mangemnt collage Wari",
    },
  ];
  return (
    <div className="eduCard" id="education">
      <h1>Education</h1>
      <div className="eduDetail">
        {
        edu.map(x=> <>
          <div className="card">
            <h2>{x.title}</h2>
            <h2>{x.year}</h2>
            <h3>{x.school}</h3>
          </div>

        </>
        )}
      </div>
      <hr />
    </div>
  );
}
