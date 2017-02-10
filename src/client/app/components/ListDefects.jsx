import React from 'react';
import Defect from './Defect.jsx';

function ListDefects(props) {
  let countText = `Всего: ${props.defectsCount}`;
  let hiddenCount = props.defectsCount - props.defects.length;
  if (hiddenCount) {
    countText = `Показано: ${props.defects.length} Скрыто: ${hiddenCount}`;
  }

  // TODO: dedete

  console.log('ListDefects', props.defects);
  return (
    <div>
      <div>{countText}</div>
      {props.defects.map((defect) => (
        <Defect
          key={defect.id.toString()}
          onEditClick={props.onDefectEdit(defect.id)}
          onDeleteClick={props.onDefectDelete(defect.id)}
          active={props.activeDefectId == defect.id}
          {...defect}
        />
      ))}
    </div>
  );
}

export default ListDefects;