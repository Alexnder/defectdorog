import React from 'react';
import {render} from 'react-dom';
import AddDefect from './AddDefect.jsx';
import ListDefects from './ListDefects.jsx';
import FilterDefects from './FilterDefects.jsx';
import utils from './utils.js';
import storage from './storage.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeDefect: App.createNewDefect(),
      activeDefectId: -1,
      defects: [],
      defectsCounter: 0,
      filters: {},
    };
    this.handleSaveDefect = this.handleSaveDefect.bind(this);
    this.handleResetActiveDefect = this.handleResetActiveDefect.bind(this);
    this.handleDefectEdit = this.handleDefectEdit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  static createNewDefect() {
    return { date: utils.currentDate(), address: '', status: '' };
  }

  componentDidMount() {
    storage.getDefects(data => {
      this.setState({
        defects: data,
        defectsCounter: Math.max(-1, ...data.map(d => d.id)) + 1
      });
    });
  }

  filterDefects() {
    return this.state.defects.filter(defect => {
      for (let filterName in this.state.filters) {
        if (defect[filterName] !== this.state.filters[filterName]) {
          return false;
        }
      }
      return true;
    });
  }

  saveDefects() {
    storage.setDefects(this.state.defects, ({ error }) => {
      // TODO: indication
      if (!error) {
        console.log('success defects save');
        return;
      }

      console.error('error save defects');
    });
  }

  handleSaveDefect(defect) {
    if (this.state.activeDefectId > -1) {
      let defectIndex = this.state.defects.findIndex(d => d.id === this.state.activeDefectId);
      if (defectIndex !== -1) {
        this.setState({
          defects: [
            ...this.state.defects.slice(0, defectIndex),
            { ...defect, id: this.state.activeDefectId },
            ...this.state.defects.slice(defectIndex + 1)
          ],
          activeDefect: App.createNewDefect(),
          activeDefectId: -1,
        }, () => this.saveDefects());
        return;
      }
    }

    this.setState({
      defects: [...this.state.defects, {...defect, id: this.state.defectsCounter}],
      defectsCounter: this.state.defectsCounter + 1,
      activeDefect: App.createNewDefect(),
      activeDefectId: -1,
    }, () => this.saveDefects());
  }

  handleResetActiveDefect() {
    this.setState({ activeDefect: App.createNewDefect(), activeDefectId: -1 });
  }

  handleDefectEdit(id) {
    return () => {
      let defect = this.state.defects.find(d => d.id === id);
      if (!defect) {
        console.log(`defect with id ${id} not found among:`, this.state.defects);
        return;
      }

      let {id: activeDefectId, ...activeDefect} = defect;
      this.setState({
        activeDefect: activeDefect,
        activeDefectId: activeDefectId
      });
    }
  }

  handleDeleteClick(id) {
    return () => {
      let defectIndex = this.state.defects.findIndex(d => d.id === id);
      if (defectIndex === -1) {
        return;
      }

      this.setState({
        defects: [
          ...this.state.defects.slice(0, defectIndex),
          ...this.state.defects.slice(defectIndex + 1)
        ],
      }, () => this.saveDefects());
    }
  }

  applyFilter(filter) {
    this.setState({
      filters: {
        ...this.state.filters,
        ...filter
      },
    });
  }

  resetFilter() {
    this.setState({
      filters: {},
    });
  }

  render() {
    return (
      <div>
        <AddDefect
          defect={this.state.activeDefect}
          id={this.state.activeDefectId}
          onSaveState={this.handleSaveDefect}
          onCancel={this.handleResetActiveDefect}
        />
        <FilterDefects
          filters={this.state.filters}
          onApply={this.applyFilter}
          onReset={this.resetFilter}
        />
        <ListDefects
          list={this.filterDefects()}
          defectsCount={this.state.defects.length}
          onDefectEdit={this.handleDefectEdit}
          onDefectDelete={this.handleDeleteClick}
          activeDefectId={this.state.activeDefectId}
        />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));