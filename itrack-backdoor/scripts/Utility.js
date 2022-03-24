const getElementById = (id, elementList) => {
    return elementList.find((element) => {
      return element.id === Number(id);
    });
  };
  

const createElement = (elementType, queryArguments) => {
    if (queryArguments.hasOwnProperty('desc') &&
        queryArguments.hasOwnProperty('name') && 
        queryArguments.hasOwnProperty('date') &&
        queryArguments.hasOwnProperty('dura') &&
        queryArguments.hasOwnProperty('type') ) {
  let activityIndex = 0;    
  let currentId;
  
        activityIndex += 1;
        currentId = activityIndex;
     
      return {
        'id':    currentId,
        'name':  queryArguments.name,
         'date': queryArguments.date,
        'desc': queryArguments.desc,
         'dura': queryArguments.dura,
         'type': queryArguments.type
      };
    } else {
      return false;
    }
  };

const getIndexById = (id, elementList) => {
    return elementList.findIndex((element) => {
      return element.id === Number(id);
    });
  };

  const updateElement = (id, queryArguments, elementList) => {
    const elementIndex = getIndexById(id, elementList);
    if (elementIndex === -1) {
      throw new Error('updateElement must be called with a valid id parameter');
    }
    if (queryArguments.id) {
      queryArguments.id = Number(queryArguments.id);
    }
    Object.assign(elementList[elementIndex], queryArguments);
    return elementList[elementIndex];
  };
  
module.exports = {
    createElement: createElement,
    getIndexById: getIndexById,
    getElementById: getElementById,
    updateElement: updateElement,
  };