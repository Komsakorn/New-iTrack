import React, { Component } from 'react';
import './Dashboard.css';

class Table extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
          activities: [
             { img: <img src='/image/run3-1.png' className='dashboard-img'/>, topic: 'วิ่งราวสวนลุม', description: "Lorem Ipsum is simply dummy text of the ...",
              type: <div className='dashboard-type'><img src='/image/index-pic/run.png' className='dashboard-icon'/>Run</div>,duration: "1hr 20m", date: '15 Feb 22',
               kcal: 1000, tag: <div className='dashboard-tag'><label className='dashboard-label'>Girl</label><label className='dashboard-label'>สวนลุม</label></div>,
                Edit: <img src='/image/index-pic/Edit.png' className='dashboard-icon'/> },
                { img: <img src='/image/run3-1.png' className='dashboard-img'/>, topic: 'วิ่งราวสวนลุม', description: "Lorem Ipsum is simply dummy text of the ...",
                type: <div className='dashboard-type'><img src='/image/index-pic/run.png' className='dashboard-icon'/>Run</div>,duration: "1hr 20m", date: '15 Feb 22',
                 kcal: 1000, tag: <div className='dashboard-tag'><label className='dashboard-label'>Girl</label><label className='dashboard-label'>สวนลุม</label></div>,
                  Edit: <img src='/image/index-pic/Edit.png' className='dashboard-icon'/> },
                  { img: <img src='/image/run3-1.png' className='dashboard-img'/>, topic: 'วิ่งราวสวนลุม', description: "Lorem Ipsum is simply dummy text of the ...",
                  type: <div className='dashboard-type'><img src='/image/index-pic/run.png' className='dashboard-icon'/>Run</div>,duration: "1hr 20m", date: '15 Feb 22',
                   kcal: 1000, tag: <div className='dashboard-tag'><label className='dashboard-label'>Girl</label><label className='dashboard-label'>สวนลุม</label></div>,
                    Edit: <img src='/image/index-pic/Edit.png' className='dashboard-icon'/> },
                    { img: <img src='/image/run3-1.png' className='dashboard-img'/>, topic: 'วิ่งราวสวนลุม', description: "Lorem Ipsum is simply dummy text of the ...",
                    type: <div className='dashboard-type'><img src='/image/index-pic/run.png' className='dashboard-icon'/>Run</div>,duration: "1hr 20m", date: '15 Feb 22',
                     kcal: 1000, tag: <div className='dashboard-tag'><label className='dashboard-label'>Girl</label><label className='dashboard-label'>สวนลุม</label></div>,
                      Edit: <img src='/image/index-pic/Edit.png' className='dashboard-icon'/> }
          ]
       }
    }
 
    renderTableHeader() {
       let header = Object.keys(this.state.activities[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }
 
    renderTableData() {
       return this.state.activities.map((activity, index) => {
          const { img, topic, description, type,duration, date, kcal, tag,Edit } = activity
          return (
             <tr key={img}>
                <td>{img}</td>
                <td>{topic}</td>
                <td>{description}</td>
                <td>{type}</td>
                <td>{duration}</td>
                <td>{date}</td>
                <td>{kcal}</td>
                <td>{tag}</td>
                <td>{Edit}</td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div>
             <h1 id='title'>Activities</h1>
             <table id='activities'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
                </tbody>
             </table>
          </div>
       )
    }
 }
 
export default Table 