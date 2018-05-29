import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './Matching.css'
import { Redirect } from 'react-router-dom';
import * as api from '../Utils/api'
import { observer, inject } from 'mobx-react'
import { MenteeModal } from '../MenteeModal/MenteeModal';
import { MentorModal } from '../MentorModal/MentorModal';
import ReactModal from 'react-modal';
import DreamStore from '../Stores/DreamStore'
import { Navbar } from '../Navbar/Navbar';
import _ from 'lodash'

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
    await this.matchingStore.fetchMentees()
    await this.matchingStore.fetchMentors()
  }

  render() {
    if (!this.dreamStore.token) {
      return <Redirect to='/' />
    }
    let mentees = _.map(this.matchingStore.mentees, (mentee, index) => {
      let relations = mentee.relations;
      if (relations) {
        relations = _.map(relations, (rel, index) => {
          return <span key={index} className="badge" style={{ padding: 9 }}>{rel.name}</span>
        })
      }
      return (
        <tr key={index}>
          <td style={{ fontSize: '1.2em', color: 'black' }} className="vert-aligned">{JSON.parse(mentee.menteeApp).name}</td>
          <td className="vert-aligned">
            {relations}
          </td>
          <td className="vert-aligned" style={{ textAlign: 'center' }}><button name={index} onClick={(e) => this.matchingStore.handleOpenMenteeModal(e)} className="btn btn-primary" type="button">View Info</button></td>
          <td className="vert-aligned" style={{ textAlign: 'center' }}><button name={index} onClick={(e) => this.matchingStore.handleOpenMatchingModal(e)} className="btn btn-primary" type="button">Match</button></td>
        </tr>
      )
    })
    let mentors = _.map(this.matchingStore.mentors, (mentor, index) => {
      let relations = mentor.relations;
      if (relations) {
        relations = _.map(relations, (rel, index) => {
          if (rel) return <span key={index} className="badge" style={{ padding: 9, marginRight: 10 }}>{rel.name}</span>
        })
      }
      return (
        <tr key={index}>
          <td style={{ fontSize: '1.2em', color: 'black' }} className="vert-aligned">{JSON.parse(mentor.mentorApp).name}</td>
          <td className="vert-aligned">
            {relations}
          </td>
          <td className="vert-aligned" style={{ textAlign: 'center' }}><button name={index} onClick={(e) => this.matchingStore.handleOpenMentorModal(e)} className="btn btn-primary" type="button">View Info</button></td>
        </tr>
      )
    })
    let menmatch = _.map(this.matchingStore.mentors, (mentor, index) => {
      if (this.matchingStore.mentorSelected === index) {
        return <a key={index} onClick={() => { this.matchingStore.mentorSelected = index }} className='list-group-item active'>{JSON.parse(mentor.mentorApp).name}</a>
      } else {
        return <a key={index} onClick={() => { this.matchingStore.mentorSelected = index }} className='list-group-item'>{JSON.parse(mentor.mentorApp).name}</a>
      }
    })
    return (
      <div>
        <Navbar store={this.dreamStore} {...this.props} />
        <div className="container">
          <ReactModal isOpen={this.matchingStore.data.showMenteeModal} contentLabel="Mentee Modal">
            <MenteeModal />
            <button onClick={(e) => this.matchingStore.handleCloseMenteeModal(e)} className="btn btn-primary" type="button">Close Modal</button>
          </ReactModal>
          <ReactModal isOpen={this.matchingStore.data.showMentorModal} contentLabel="Mentor Modal">
            <MentorModal />
            <button onClick={(e) => this.matchingStore.handleCloseMentorModal(e)} className="btn btn-primary" type="button">Close Modal</button>
          </ReactModal>
          <ReactModal isOpen={this.matchingStore.data.showMatchingModal} contentLabel="Matching Modal">
            <div style={{ marginTop: 10 }} className="list-group">
              {menmatch}
            </div>
            <button onClick={(e) => this.matchingStore.handleCloseMatchingModal(e)} className="btn btn-primary" type="button">Close Modal</button>
            <button onClick={(e) => this.matchingStore.match(e)} style={{ marginLeft: 10 }} className="btn btn-success" type="button">Save</button>
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
                          <th style={{ color: 'red' }}>Name</th>
                          <th style={{ color: 'red' }}>Mentor</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="tbl-content">
                    <table>
                      <tbody>
                        {mentees}
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
                          <th style={{ color: 'red' }}>Name</th>
                          <th style={{ color: 'red' }}>Mentees</th>
                          <th></th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="tbl-content">
                    <table>
                      <tbody>
                        {mentors}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}