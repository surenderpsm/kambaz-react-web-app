import { FaPlus } from "react-icons/fa6";
import { MdDoNotDisturbAlt } from "react-icons/md";
import GreenCheckmark from "./GreenCheckmark.tsx";
import ModuleEditor from "./ModuleEditor.tsx";
import { useState } from "react";

export default function ModulesControls(
    { moduleName, setModuleName, addModule }:
        { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }
) {
    const [showEditor, setShowEditor] = useState(false);

    const handleAddModule = () => {
        if (moduleName.trim() !== "") {
            addModule();
            setModuleName("");
            setShowEditor(false);
        }
    };

    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end"
                    onClick={() => setShowEditor(true)}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module</button>

            {showEditor && (
                <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Module</h5>
                                <button type="button" className="btn-close" onClick={() => setShowEditor(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    className="form-control"
                                    value={moduleName}
                                    placeholder="Module Name"
                                    onChange={(e) => setModuleName(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleAddModule();
                                        }
                                    }}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => {
                                    setShowEditor(false);
                                    setModuleName("");
                                }}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-danger" onClick={handleAddModule}>
                                    Add Module
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="dropdown d-inline me-1 float-end">
                <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
                        type="button" data-bs-toggle="dropdown">
                    <GreenCheckmark />
                    Publish All</button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
                            <GreenCheckmark />
                            Publish all modules and items</a>
                    </li>
                    <li>
                        <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                            <GreenCheckmark />
                            Publish modules only</a>
                    </li>
                    <li>
                        <a id="wd-unpublish-all-modules-and-items-btn" className="dropdown-item" href="#">
                            <MdDoNotDisturbAlt className="me-1 fs-5" />
                            Unpublish all modules and items</a>
                    </li>
                    <li>
                        <a id="wd-unpublish-modules-only-button" className="dropdown-item" href="#">
                            <MdDoNotDisturbAlt className="me-1 fs-5" />
                            Unpublish modules only</a>
                    </li>
                </ul>
            </div>
            <button id="wd-add-view-progress-btn" className="btn btn-lg btn-secondary me-1 float-end">
                View Progress</button>
            <button id="wd-add-collapse-all-btn" className="btn btn-lg btn-secondary me-1 float-end">
                Collapse All</button>

            {/* Keep the modal for backward compatibility */}
            <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
                          setModuleName={setModuleName} addModule={addModule} />
        </div>
    );
}