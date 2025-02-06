import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
export default function CourseStatus() {
      return (
          <div id="wd-course-status" className="p-2" style={{ width: "300px" }}>
                <h2>Course Status</h2>
                <div className="d-flex">
                      <div className="w-50 pe-1">
                            <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
                                  <MdDoNotDisturbAlt className="me-2 fs-5" />
                                  Unpublish
                            </button>
                      </div>
                      <div className="w-50">
                            <button className="btn btn-lg btn-success w-100">
                                  <FaCheckCircle className="me-2 fs-5" />
                                  Publish
                            </button>
                      </div>
                </div><br />
                <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                      Import Existing Content
                </button>
                <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                      Import from Commons
                </button>
                <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                      Choose Home Page
                </button>
                <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                      View Course Stream
                </button>
                <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                      New Announcement
                </button>
                <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                      New Analytics
                </button>
                <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                      View Course Notifications
                </button>

          </div>
      );}
  