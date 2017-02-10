import React from 'react';

export default function DefectComponent(props) {
  let className = 'defect';
  if (props.active) {
    className = 'active-defect';
  }

  return (
    <div className={className}>
      <div>id: {props.id}</div>
      <div>Дата: {props.date}</div>
      <div>Адрес: {props.address}</div>
      <div>Статус: {props.status}</div>
      <div>
        <a href="#" onClick={props.onEditClick}>Редактировать</a>
        <a href="#" onClick={props.onDeleteClick}>Удалить</a>
      </div>
    </div>
  );
}