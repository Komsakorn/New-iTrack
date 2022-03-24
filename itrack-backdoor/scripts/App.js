const express = require('express');
const app = express();

const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./Utility.js');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Import and mount the expressionsRouter
//const activitiesRouter = require('./Activity.js');
//app.use('/activities', activitiesRouter);
//const usersRouter = require('./User.js');
//app.use('/users', usersRouter);

const activities = {
    running: {
        id:    0,
        name: 'Running at the park',
        date: '22/07/2569',
        desc: 'Casual running and hangout',
        dura: '2 Hours',
        type: 'Run'
    },
    swimming: {
        id:    1,
        name: 'Swimming at the pool',
        date: '23/07/2569',
        desc: 'Casual swimming and hangout',
        dura: '1 Hour',
        type: 'Swim'
    },
    hiking: {
        id:    2,
        name: 'Running at the hills',
        date: '24/07/2569',
        desc: 'Casual Hiking and hangout',
        dura: '7 Hours',
        type: 'Hike'
    },
  };

app.get('/activities', (req, res, next) => {
    res.send(activities);
});

app.get('/activities/:id', (req, res, next) => {
  const foundActivity = getElementById(req.params.id, activities);
  if (foundActivity) {
    res.send(foundActivity);
  } else {
    res.status(404).send();
  }
});

app.post('/activities', (req, res, next) => {
       const newActivity = createElement('activities', req.query);
 if(newActivity) {
activities.push(newActivity);
}else {
    res.status(404).send('Please type valid activity');
}
})

app.delete('/activities', (req, res, next) => {
const willDeletedAct = getIndexById(req.params.id, activities);
if(willDeletedAct !== -1) {
activities.splice(willDeletedAct, 1);
} else {
res.status(404).send();
}
}) 

app.put('/activities/:id', (req, res, next) => {
       const updatedActivity = getIndexById(req.params.id, activities)
if(updatedActivity !== -1) {
updateElement(req.params.id, req.query, activities);
res.send(activities[updatedActivity]);
} else {
res.status(404).send();
}
}) 

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
