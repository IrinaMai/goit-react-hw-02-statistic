import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistic from './components/Statistic';


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addStatistic = (evt) => {
    const name = evt.target.name;
    this.setState((prev) => {
      return {[name] : prev[name] +1}
    })
  }
 
  countTotalFeedback =() =>{
    const total = (this.state.good + this.state.bad + this.state.neutral)
    return total
    
  }

  countPositiveFeedbackPercentage = () => {    
    const positiveFeedback = Math.round((this.state.good * 100) / this.countTotalFeedback())
    return positiveFeedback
  }

  render() {
    return (
      <>
        <Section title="Please leve your feedback">
          <FeedbackOptions options={0} onLeaveFeedback={this.addStatistic}/>
         </Section>


      <Section title = "Statistics">
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          />
      </Section>

  </>
    )
  }
}
