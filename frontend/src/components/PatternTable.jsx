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
            <th>Completed</th>
            <th>Date Finished</th>
            <th>Favorite</th>
            <th>Photo</th>

          </tr>
        </thead>
        <tbody>
          {props.patterns.map((pattern) => {
            return (
              <tr key={pattern.id}>
                <td>{pattern.pattern_name}</td>
                <td>{pattern.artist}</td>
                <td>{pattern.date_added}</td>
                <td>{pattern.is_embroidery ? "🧵" : ""}</td>
                <td>{pattern.is_cross_stitch ? "🧵": ""}</td>
                <td>
                  {pattern.photos.map((photo) => (
                    <div key={photo.pattern}>
                    {photo.completed ? "✅" : "❌"} 
                  </div>
                  ))}
                </td>
                <td>
                  {pattern.photos.map((photo) => (
                    <div key={photo.pattern}>{photo.date_finished}</div>
                  ))}
                </td>
                <td>
                  {pattern.photos.map((photo) => (
                    <div key={photo.pattern}>
                      {photo.is_favorite ? "❤️" : ""}
                    </div>
                  ))}
                </td>
                <td>
                  {pattern.photos.map((photo) => (
                    <div key={photo.pattern}>
                      <img src={photo.photo_img} alt={pattern.pattern_name} />
                    </div>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PatternTable;
