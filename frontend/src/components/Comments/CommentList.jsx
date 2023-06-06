
const CommentList = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Comment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
            {props.parentEntry.map((entry, index) => {
            return (
                <tr>
                    <td>{index + 1}</td> 
                    <td>{entry.Comment}</td>
                    <td>{entry.Date}</td>
                    <td><button onClick={() => props.makeComment()}>Like</button></td>
                </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default CommentList;