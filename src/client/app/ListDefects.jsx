import React from 'react';
import Defect from './Defect.jsx';

function ListDefects(props) {
  let countText = `Всего: ${props.defectsCount}`;
  let hiddenCount = props.defectsCount - props.list.length;
  if (hiddenCount) {
    countText = `Показано: ${props.list.length} Скрыто: ${hiddenCount}`;
  }
  return (
    <div>
      <div>{countText}</div>
      {props.list.map((defect) => (
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