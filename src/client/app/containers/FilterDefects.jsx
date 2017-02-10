import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input.jsx';
import { applyFilters, resetFilters } from '../actions';

let FilterDefects = (props) => {
  return (
    <div className="filter-defects">
      Фильтр
      <Input title="Дата" name="date" type="date" state={props.filters} onChange={props.onApply} />
      <div><button onClick={props.onReset}>Сброс</button></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    defectsCount: state.defects.length,
    activeDefectId: state.activeDefectId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onApply: (filter) => {
      dispatch(applyFilters(filter))
    },
    onReset: () => {
      dispatch(resetFilters())
    }
  }
}

FilterDefects = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterDefects);


export default FilterDefects;