export default function AssignmentEditor() {
  return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML"/><br/><br/>
        <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
        <br/>
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100}/>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="OTHER">OTHERS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
                <option value="Grade">Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="In person">In person</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td align="left" valign="top">
              <p>Online Entry Options</p>
              <input type="checkbox" id="wd-text-entry" value="Text Entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br/>
              <input type="checkbox" id="wd-website-url" value="Website URL"/>
              <label htmlFor="wd-website-url">Website URL</label>
              <br/>
              <input type="checkbox" id="wd-media-recordings" value="Media Recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br/>
              <input type="checkbox" id="wd-student-annotation" value="Student Annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br/>
              <input type="checkbox" id="wd-file-upload" value="File Uploads"/>
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          {/* Assign To */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" value="Everyone"/>
            </td>
          </tr>

          {/* Due Date */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" value="2024-05-13"/>
            </td>
          </tr>

          {/* Available From */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" value="2024-05-06"/>
            </td>
          </tr>

          {/* Available Until */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" value="2024-05-20"/>
            </td>
          </tr>
        </table>
        <br/>
        <button>Save</button>
        <button>Cancel</button>
      </div>
  );
}
