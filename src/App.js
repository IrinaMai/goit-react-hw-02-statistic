import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistic from './components/Statistic';
import Notification from './components/Notification'


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
 
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
     return good + bad + neutral
    
    
  }

  countPositiveFeedbackPercentage = () => {    
      const { good } = this.state;
     return  Math.round((good * 100) / this.countTotalFeedback())

  }

  render() {
    return (
      <>
        <Section title="Please leve your feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.addStatistic}/>
         </Section>


        <Section title="Statistics">
          
       {this.countTotalFeedback()? <Statistic {...this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage() }
          /> : <Notification message ="No feedback given"/>}
      </Section>

  </>
    )
  }
}
