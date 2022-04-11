import React from 'react';
import './Dashboard.css';
import Axios from 'axios';

const client = Axios.create({
baseURL : 'http://localhost:4000',
validateStatus: () => true,
});

class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         activities: [
            { img: <img src='/image/run3-1.png' className='dashboard-img'/>, topic: 'วิ่งราวสวนลุม', description: "Lorem Ipsum is simply dummy text of the ...",
            type: <div className='dashboard-type'><img src='/image/index-pic/run.png' className='dashboard-icon'/>Run</div>,duration: "1hr 20m", date: '15 Feb 22',
            kcal: 1000, tags: <div className='dashboard-tag'><label className='dashboard-label'>Girl</label><label className='dashboard-label'>สวนลุม</label></div>,"edit,share or delete":""
         },
         { img: <img src='/image/run3-1.png' className='dashboard-img'/>, topic: 'วิ่งราวสวนลุม', description: "Lorem Ipsum is simply dummy text of the ...",
         type: <div className='dashboard-type'><img src='/image/index-pic/run.png' className='dashboard-icon'/>Run</div>,duration: "1hr 20m", date: '15 Feb 22',
                 kcal: 1000, tags: <div className='dashboard-tag'><label className='dashboard-label'>Girl</label><label className='dashboard-label'>สวนลุม</label></div>,"edit,share or delete":""
               },
               { img: <img src='/image/run3-1.png' className='dashboard-img'/>, topic: 'วิ่งราวสวนลุม', description: "Lorem Ipsum is simply dummy text of the ...",
               type: <div className='dashboard-type'><img src='/image/index-pic/run.png' className='dashboard-icon'/>Run</div>,duration: "1hr 20m", date: '15 Feb 22',
               kcal: 1000, tags: <div className='dashboard-tag'><label className='dashboard-label'>Girl</label><label className='dashboard-label'>สวนลุม</label></div>,"edit,share or delete":""
            },
            { img: <img src='/image/run3-1.png' className='dashboard-img'/>, topic: 'วิ่งราวสวนลุม', description: "Lorem Ipsum is simply dummy text of the ...",
            type: <div className='dashboard-type'><img src='/image/index-pic/run.png' className='dashboard-icon'/>Run</div>,duration: "1hr 20m", date: '15 Feb 22',
            kcal: 1000, tags: <div className='dashboard-tag'><label className='dashboard-label'>Girl</label><label className='dashboard-label'>สวนลุม</label></div>,"edit,share or delete":""
         }
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
          let manage = <div className='manage-icon'><img src='/image/index-pic/Edit.png' className='dashboard-icon'/><img src='/image/index-pic/share.png' className='dashboard-icon'/><img src='/image/index-pic/trash.png' className='dashboard-icon'/></div>;
          const { img, topic, description, type,duration, date, kcal, tags} = activity
          return (
             <tr key={img}>
                <td>{img}</td>
                <td>{topic}</td>
                <td>{description}</td>
                <td>{type}</td>
                <td>{duration}</td>
                <td>{date}</td>
                <td>{kcal}</td>
                <td>{tags}</td>
                <td>{manage} </td>
             </tr>
          )
       })
    }
 
async componentDidMount(){
   const response = await client.get('/users/me/records');
   if(response.status < 300){
     const records = response.data
     const activities = records.map((record) => {
      const myDate = record.timestamp;
      const phaseTime = new Date(myDate).toLocaleString();
      const imgSrc = `/image/index-pic/${record.type}.png`
     return {
      img: <img src='/image/run3-1.png' className='dashboard-img'/>, 
      topic: record.activityName, 
      description: record.description,
      type: <div className='dashboard-type'><img src={imgSrc} className='dashboard-icon'/>{record.type}</div>,
      duration: record.duration, 
      date: phaseTime,
      kcal: record.calories, 
      tags: <div className='dashboard-tag'><label className='dashboard-label'>{record.tags[0]}</label><label className='dashboard-label'>{record.tags[1]}</label></div>,
      "edit,share or delete":""
   } 
}); 
this.setState({
   activities,
});
} else {
      alert('Error');
   }
}

    render() {
       return (
          <div className='table'>
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