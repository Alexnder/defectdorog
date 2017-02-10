import { combineReducers } from 'redux';
import { ADD_DEFECT, START_EDIT_DEFECT, CANCEL_EDIT_DEFECT, DELETE_DEFECT } from './actions';
import utils from './utils';

function createNewDefect() {
  return { date: utils.currentDate(), address: '', status: '' };
}

function defects(state = [], action) {
  switch (action.type) {
    case ADD_DEFECT:
      return [
        ...state,
        action.defect
      ];
    default:
      return state
  }
}

function activeDefectId(state = -1, action) {
  switch (action.type) {
    case ADD_DEFECT:
      return state + 1;
    case START_EDIT_DEFECT:
      return action.index;
    case CANCEL_EDIT_DEFECT:
      return -1;
    default:
      return state;
  }
}

function activeDefect(state = createNewDefect(), action) {
  switch (action.type) {
    case ADD_DEFECT:
    case CANCEL_EDIT_DEFECT:
      return createNewDefect();
    default:
      return state;
  }
}

// TODO
function filters(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

const defectDorogApp = combineReducers({
  defects,
  activeDefect,
  activeDefectId,
  filters,
})

export default defectDorogApp;