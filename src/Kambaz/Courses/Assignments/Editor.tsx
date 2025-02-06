import { Form, Button, Row, Col } from 'react-bootstrap';

export default function AssignmentEditor() {
  return (
      <div id="wd-assignments-editor" className="w-75">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Assignment Details</h2>
        </div>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label><strong>Assignment Name</strong></Form.Label>
            <Form.Control id="wd-name" defaultValue="A1 - ENV + HTML" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
                as="textarea"
                rows={6}
                id="wd-description"
                defaultValue="The assignment is available online Submit a link to the landing page of your web application running on netlify. The landing page should include the following: your full name and section links to each of the lab assignments Link to Kambaz application Links to all relevant source code repositories The Kambaz application should include a link to navigate back to the landing page."
            />
          </Form.Group>

          <Row className="mb-3">
            <Col md={3} className="text-end">
              <Form.Label>Points</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control type="number" id="wd-points" defaultValue={100} />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="text-end">
              <Form.Label>Assignment Group</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Select id="wd-group">
                <option value="Assignments">Assignments</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="text-end">
              <Form.Label>Display Grade as</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={3} className="text-end">
              <Form.Label>Submission Type</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Select id="wd-submission-type" className="mb-3">
                <option value="Online">Online</option>
              </Form.Select>

              <div className="text-center">
                <Form.Label>Online Entry Options</Form.Label>
                <div className="d-inline-block text-start">
                  {['Text Entry', 'Website URL', 'Media Recordings',
                    'Student Annotation', 'File Uploads'].map((label) => (
                      <Form.Check
                          key={label}
                          type="checkbox"
                          id={`wd-${label.toLowerCase().replace(' ', '-')}`}
                          label={label}
                      />
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          <Form.Group className="text-center mb-3">
            <Form.Label>Assign to</Form.Label>
            <Form.Control id="wd-assign-to" defaultValue="Everyone" />
          </Form.Group>

          <Form.Group className="text-center mb-3">
            <Form.Label>Due</Form.Label>
            <Form.Control
                type="date"
                id="wd-due-date"
                defaultValue="2024-05-13"
            />
          </Form.Group>

          <Form.Group className="text-center mb-3">
            <Form.Label>Available from - Until</Form.Label>
            <div className="d-flex justify-content-center gap-2">
              <Form.Control
                  type="date"
                  id="wd-available-from"
                  defaultValue="2024-05-06"
              />
              <Form.Control
                  type="date"
                  id="wd-available-until"
                  defaultValue="2024-05-20"
              />
            </div>
          </Form.Group>

          <hr />

          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button variant="danger">Save</Button>
          </div>
        </Form>
      </div>
  );
}
