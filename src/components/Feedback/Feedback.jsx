// import PropTypes from 'prop-types';
import { Component } from 'react';
import './Feedback.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <section>
        <h2>Please leave feedback</h2>
        <ul>
          <li>
            <button>Good</button>
          </li>
          <li>
            <button>Neutral</button>
          </li>
          <li>
            <button>Bad</button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good: 3</li>
          <li>Neutral: 2</li>
          <li>Bad: 2</li>
        </ul>
      </section>
    );
  }
}
