import React from 'react';

function getValue(e) {
  return e.target.type === 'checkbox' ? e.target.checked : e.target.value;
}

export default function Input(props) {
  const type = props.type || 'text';
  const value = props.state[props.name] || '';

  return (
    <div>
      {props.title}:
      <input
        name={props.name}
        type={type}
        value={value}
        onChange={(e) => props.onChange({ [props.name]: getValue(e) })}
      />
    </div>
  );
}