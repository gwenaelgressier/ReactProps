import React, { Component } from "react";

export class HandleProps extends Component {
  render() {
    return (
      this.props.test && (
        <div className="test-wrapper">
          <div className="test-header">
            <div>
              <i class="fas fa-flag"></i>
              <p>vous etes dans HandleProps</p>
            </div>
            <svg
              alt="cross"
              onClick={this.props.handletest}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.94 2L2 10.94M2 2L10.94 10.94"
                stroke="#11886c"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="handle-radio">
            <ul>
              <li>
                <input type="radio" value="testing" name="testing" /> exemple 1
              </li>
              <li>
                <input type="radio" value="testing" name="testing" /> exemple 2
              </li>
            </ul>
          </div>
          <div className="button-contener">
            <button
              className="btn-icon ml-0 w-md-10 send-btn"
              onClick={this.props.handletestSucess}
            >
              renvoi parent
            </button>
          </div>
        </div>
      )
    );
  }
}
