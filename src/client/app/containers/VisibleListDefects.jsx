import { connect } from 'react-redux';
import ListDefects from '../components/ListDefects';
import { editDefect } from '../actions';

function filterDefects(defects, filters) {
  return defects.filter(defect => {
    for (let filterName in filters) {
      if (defect[filterName] !== filters[filterName]) {
        return false;
      }
    }
    return true;
  });
}

const mapStateToProps = (state) => {
  return {
    defects: filterDefects(state.defects, state.filters),
    defectsCount: state.defects.length,
    activeDefectId: state.activeDefectId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDefectEdit: (id) => {
      dispatch(editDefect(id))
    },
    onDefectDelete: (id) => {
      dispatch(deleteDefect(id))
    }
  }
}

const VisibleListDefects = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDefects);

export default VisibleListDefects;