import { Component } from 'react';
// import { ImSearch } from 'react-icons/im';
// import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleInputChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;
    if (value.trim() === '') {
      // toast.error('Please enter your query.');
      return;
    }
    onSubmit(value.trim());
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={s.wrapper}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter movie"
            value={value}
            onChange={this.handleInputChange}
          />

          <button
            type="submit"
            className={s.button}>
            <span className={s.label}>
              {/* <ImSearch /> */}
              Go
            </span>
          </button>
        </form>
      </div>
    );
  }
}
