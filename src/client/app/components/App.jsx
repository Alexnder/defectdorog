import React from 'react'
import AddDefect from '../containers/AddDefect'
import FilterDefects from '../containers/FilterDefects'
import VisibleListDefects from '../containers/VisibleListDefects'

const App = () => {
  return (
    <div>
      <AddDefect />
      <FilterDefects />
      <VisibleListDefects />
    </div>
  );
}

export default App;