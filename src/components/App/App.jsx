import { Component } from 'react';

import { Statistics } from './Statistics';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';

export class App extends Component {
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

  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    return ((good / (good + neutral + bad)) * 100).toFixed(0);
  }

  render() {
    const options = Object.keys(this.state);
    return (
      <section>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </section>
    );
  }
}
