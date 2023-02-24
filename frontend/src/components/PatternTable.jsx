import PatternList from "./PatternList";

//This component maps over patterns and displays them in a table on MyPatterns page

const PatternTable = (props) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Pattern Name</th>
            <th>Artist</th>
            <th>Upload Date</th>
            <th>Embroidery</th>
            <th>Cross Stich</th>
          </tr>
        </thead>
        <tbody>
          {props.patterns.map((pattern) => {
            return (
              <tr key={pattern.id}>
                <td>{pattern.pattern_name}</td>
                <td>{pattern.artist}</td>
                <td>{pattern.date_added}</td>
                <td>{pattern.is_embroidery}</td>
                <td>{pattern.is_cross_stitch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PatternTable;
