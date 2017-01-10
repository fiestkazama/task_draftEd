import React from "react";
import { MegadraftEditor, editorStateFromRaw, createTypeStrategy} from "megadraft";
import ToolTip from 'react-portal-tooltip';
import {Panel} from 'react-bootstrap';

export default class MyEditApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: editorStateFromRaw(null),
    isTooltipActive: false};
    this.onChange = (editorState) => {
      this.setState({editorState});
    }

  }

  showTooltip() {
        this.setState({isTooltipActive: true})
    }
  hideTooltip() {
        this.setState({isTooltipActive: false})
    }



  render() {

    return (
      <div>
        <div>
          <p id="text" onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>Tip</p>
            <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent="#text">
              <div>
                <p>To start, type in below</p>
                <img src="image.png"/>
              </div>
            </ToolTip>
        </div>
      <Panel>
        <div>
          <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}/>
        </div>
      </Panel>
    </div>
    )
  }
}
