function Education(props) {
  return (
    <div className="sections">
      <h2>Education</h2>
      <div className = "d-flex flex-column-reverse">
        {props.credentials.map((item, index) => (
          <span key={item.id} className="degree-comp">{item.degreeType + " " + item.areaOfStudy + " - " + item.institution}</span>
        ))}
      </div>
    </div>
  );
}

export default Education;
