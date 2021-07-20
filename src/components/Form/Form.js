import React, { Component } from 'react';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  hadleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  heandleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.heandleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            value={name}
            onChange={this.hadleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <label className={s.label}>
            Number
            <input
              className={s.input}
              value={number}
              onChange={this.hadleInputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

export default Form;
