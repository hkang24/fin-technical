function Publications(props) {
  return (
    <div className="sections">
      <h2>Publications</h2>
      <div className="d-flex flex-column">
        {props.publications.map((item, index) => (
          <span key={index} className="pubs">
            {item.citation}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Publications;
