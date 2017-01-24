import React from 'react';
import Input from './Input.jsx';

class AddDefect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.defect };
    this.onAdd = this.onAdd.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({ ...nextProps.defect }));
  }

  handleInputChange(newState) {
    this.setState(newState);
  }

  onAdd(e) {
    this.props.onSaveState(this.state);
    this.setState((prevState, props) => ({ ...props.defect }));
  }

  onCancel(e) {
    this.props.onCancel();
    this.setState((prevState, props) => ({ ...props.defect }));
  }

  render() {
    const buttonText = this.props.id > -1 ? 'Сохранить' : 'Добавить';
    return (
      <div className="add-defect">
        <Input title="Дата" name="date" type="date" state={this.state} onChange={this.handleInputChange} />
        <Input title="Адрес" name="address" state={this.state} onChange={this.handleInputChange} />
        <Input title="Статус" name="status" state={this.state} onChange={this.handleInputChange} />
        <div><button onClick={this.onAdd}>{buttonText}</button></div>
        {this.props.id > -1 ?
          <a onClick={this.onCancel} href="#">Отменить</a> :
          ''
        }
      </div>
    );
  }
}

export default AddDefect;