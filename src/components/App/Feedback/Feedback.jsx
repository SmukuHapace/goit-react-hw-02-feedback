// import PropTypes from 'prop-types';
import { Component } from 'react';
import './Feedback.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  componentDidMount() {
    const storedStats = localStorage.getItem('feedbackStats');
    if (storedStats) {
      const { good, neutral, bad } = JSON.parse(storedStats);
      this.setState({ good, neutral, bad });
    }
  }
  componentDidUpdate() {
    const { good, neutral, bad } = this.state;
    const statsToStore = { good, neutral, bad };
    localStorage.setItem('feedbackStats', JSON.stringify(statsToStore));
  }

  addGood = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
  };
  addNeutral = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };
  addBad = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    return ((good / (neutral + bad)) * 100).toFixed(0)
  }

  render() {
    return (
      <section>
        <h2>Please leave feedback</h2>
        <ul className="btn-list">
          <li>
            <button type="button" className="btn" onClick={this.addGood}>
              Good
            </button>
          </li>
          <li>
            <button type="button" className="btn" onClick={this.addNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" className="btn" onClick={this.addBad}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul className="stat-list">
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </section>
    );
  }
}
