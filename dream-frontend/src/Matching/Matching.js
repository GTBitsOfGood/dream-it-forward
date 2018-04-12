import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './Matching.css'
import { Redirect } from 'react-router-dom';
import * as api from '../Utils/api'
import { observer, inject } from 'mobx-react'
import ReactModal from 'react-modal';

ReactModal.setAppElement('body');

@inject('rootStore')
@observer
export class Matching extends Component {

  constructor(props) {
    super(props)
    this.dreamStore = this.props.rootStore.dreamStore
    this.matchingStore = this.props.rootStore.matchingStore
  }

  async componentDidMount() {

  }

  render() {
    if (!this.dreamStore.token) {
      return <Redirect to='/' />
    }
    return (
      <div className="container">
        <ReactModal isOpen={this.matchingStore.data.showInfoModal} contentLabel="App Modal">
          <p>Info Modal</p>
          <button onClick={(e) => this.matchingStore.handleCloseInfoModal(e)} className="btn btn-primary" type="button">Close Modal</button>
        </ReactModal>
        <ReactModal isOpen={this.matchingStore.data.showMatchingModal} contentLabel="App Modal">
          <p>Matching Modal</p>
          <button onClick={(e) => this.matchingStore.handleCloseMatchingModal(e)} className="btn btn-primary" type="button">Close Modal</button>
        </ReactModal>
        <div id="minimal-tabs">
          <ul className="nav nav-tabs">
            <li className="active"><a href="#tab-1" role="tab" data-toggle="tab">Mentees</a></li>
            <li><a href="#tab-2" role="tab" data-toggle="tab">Mentors</a></li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" role="tabpanel" id="tab-1">
              <div className="table-responsive">
                <div className="tbl-header">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Mentor</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="tbl-content">
                  <table>
                    <tbody>
                      <tr>
                        <td className="vert-aligned">John Doe</td>
                        <td className="vert-aligned"><span className="badge" style={{padding:9}}>Billy Bob Jo</span></td>
                        <td className="vert-aligned" style={{textAlign: 'center'}}><button name="sup" onClick={(e) => this.matchingStore.handleOpenInfoModal(e)} className="btn btn-primary" type="button">View Info</button></td>
                        <td className="vert-aligned" style={{ textAlign: 'center' }}><button onClick={(e) => this.matchingStore.handleOpenMatchingModal(e)} className="btn btn-primary" type="button">Match</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane" role="tabpanel" id="tab-2">
              <div className="table-responsive">
                <div className="tbl-header">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Mentees</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="tbl-content">
                  <table>
                    <tbody>
                      <tr>
                        <td className="vert-aligned">John Doe</td>
                        <td className="vert-aligned"><span className="badge" style={{ padding: 9 }}>Long Indian Name</span></td>
                        <td className="vert-aligned" style={{ textAlign: 'center' }}><button onClick={(e) => this.matchingStore.handleOpenInfoModal(e)} className="btn btn-primary" type="button">View Info</button></td>
                        <td className="vert-aligned" style={{ textAlign: 'center' }}><button onClick={(e) => this.matchingStore.handleOpenMatchingModal(e)} className="btn btn-primary" type="button">Match</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}