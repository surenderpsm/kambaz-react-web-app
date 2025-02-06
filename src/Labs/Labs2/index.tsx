import "./index.css";
import ForegroundColors from "./ForegroundColors.tsx";
import BackgroundColors from "./BackgroundColors.tsx";
import Borders from "./Borders.tsx";
import Margins from "./Margins.tsx";
import Padding from "./Padding.tsx";
import Corners from "./Corners.tsx";
import Dimensions from "./Dimensions.tsx";
import Positions from "./Positions.tsx";
import ZIndex from "./ZIndex.tsx";
import Float from "./Float.tsx";
import GridLayout from "./GridLayout.tsx";
import Flex from "./Flex.tsx";
import ReactIconsSampler from "./ReactIcons.tsx";
import {Container} from "react-bootstrap";
import BootstrapGrids from "./BootstrapGrids.tsx";
import ScreenSizeLabel from "./ScreenSizeLabel.tsx";
import BootstrapTables from "./BootstrapTables.tsx";
import BootstrapLists from "./BootstrapLists.tsx";
import BootstrapForms from "./BootstrapForms.tsx";
import BootstrapCards from "./BootstrapCards.tsx";
export default function Lab2() {
  return (
      <Container>
        <h2>Lab 2 - Cascading Style Sheets</h2>
        <h3>Styling with the STYLE attribute</h3>
        <div id="wd-css-id-selectors">
          <h3>ID selectors</h3>
          <p id="wd-id-selector-1">
            Instead of changing the look and feel of all the
            elements of the same name, e.g., P, we can refer to a specific element by its ID
          </p>
          <p id="wd-id-selector-2">
            Here's another paragraph using a different ID and a different look and
            feel
          </p>

          <p className="wd-class-selector">
            Instead of using IDs to refer to elements, you can use an element's CLASS attribute
          </p>

          <h4 className="wd-class-selector">
            This heading has same style as paragraph above
          </h4>

        </div>

        <div id="wd-css-document-structure">
          <div className="wd-selector-1">
            <h3>Document structure selectors</h3>
            <div className="wd-selector-2">
              Selectors can be combined to refer elements in particular
              places in the document
              <p className="wd-selector-3">
                This paragraph's red background is referenced as
                <br/>
                .selector-2 .selector3<br/>
                meaning the descendant of some ancestor.<br/>
                <span className="wd-selector-4">
          Whereas this span is a direct child of its parent
        </span><br/>
                You can combine these relationships to create specific
                styles depending on the document structure
              </p>
            </div>
          </div>
        </div>

      <ForegroundColors/><BackgroundColors/><Borders/><Margins/>
        <Padding/><Corners/><Dimensions/><Positions/><ZIndex/><Float/><GridLayout/><Flex/><ReactIconsSampler/><BootstrapGrids/><ScreenSizeLabel/><BootstrapTables/><BootstrapLists/><BootstrapForms/><BootstrapCards/>
      </Container>


  );
}
