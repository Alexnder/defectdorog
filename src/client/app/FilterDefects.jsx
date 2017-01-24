import React from 'react';
import Input from './Input.jsx';

class FilterDefects extends React.Component {
  render() {
    return (
      <div className="filter-defects">
        Фильтр
        <Input title="Дата" name="date" type="date" state={this.props.filters} onChange={this.props.onApply} />
        <div><button onClick={this.props.onReset}>Сброс</button></div>
      </div>
    );
  }
}

export default FilterDefects;