import { useParams, Link } from 'react-router-dom';
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const { assignments } = db;

  const assignment = assignments.find(assignment => assignment._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
      <div className="container mt-4">
        <form id="wd-assignments-editor">
          <div className="form-group mb-4">
            <label htmlFor="wd-name" className="mb-2">Assignment Name</label>
            <input id="wd-name" className="form-control" defaultValue={assignment.title} />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="wd-description" className="mb-2">Description</label>
            <div id="wd-description" className="form-control" style={{ height: 'auto', whiteSpace: 'pre-wrap' }}>
              The assignment is <a href="" style={{ color: 'red' }}>available online</a>. <br /><br />
              Submit a link to the landing page of your Web application running on Netlify. <br /><br />
              The landing page should include the following:
              <ul>
                <li>Your full name and section</li>
                <li>Links to each of the lab assignments</li>
                <li>Link to the Kambaz application</li>
                <li>Links to all relevant source code repositories</li>
              </ul>
              The Kambaz application should include a link to navigate back to the landing page.
            </div>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="wd-points" className="mb-2">Points</label>
            <input id="wd-points" className="form-control" type="number" defaultValue={100} />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="wd-group" className="mb-2">Assignment Group</label>
            <select id="wd-group" className="form-control">
              <option value="Assignments">ASSIGNMENTS</option>
            </select>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="wd-display-grade-as" className="mb-2">Display Grade as</label>
            <select id="wd-display-grade-as" className="form-control">
              <option value="Percentage">Percentage</option>
            </select>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="wd-submission-type" className="mb-2">Submission Type</label>
            <select id="wd-submission-type" className="form-control">
              <option value="Online">Online</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Online Entry Options</label>
            <div className="form-check">
              <input type="checkbox" id="wd-text-entry" className="form-check-input" />
              <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-website-url" className="form-check-input" defaultChecked />
              <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
              <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
              <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-file-upload" className="form-check-input" />
              <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
            </div>
          </div>

          <div className="form-group mb-4">
            <label className="form-label fw-bold">Assign To</label>
            <select className="form-control">
              <option value="everyone">Everyone</option>
              <option value="skill1">Someone</option>
              <option value="skill2">No one</option>
            </select>
          </div>

          <div className="form-group mb-4">
            <label className="form-label fw-bold">Due Date</label>
            <input type="datetime-local" className="form-control" defaultValue="2024-05-13T11:59" />
          </div>

          <div className="form-group mb-4">
            <label className="form-label fw-bold">Available From</label>
            <input type="datetime-local" className="form-control" defaultValue="2024-05-06T12:00" />
          </div>

          <div className="form-group mb-4">
            <label className="form-label fw-bold">Until</label>
            <input type="date" className="form-control" />
          </div>

          <hr />

          <div className="text-end">
            <Link to={`#/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-3">Cancel</Link>
            <button type="button" className="btn btn-danger">Save</button>
          </div>
        </form>
      </div>
  );
}