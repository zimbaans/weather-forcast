import React from 'react';
import './WeatherBox.css';

export default class WeatherBox extends React.Component {
  state = {
    icon: null, 
  };

    componentDidMount() {
    
    import(`../images/${this.props.icon}.svg`)
      .then((module) => {
        
        this.setState({ icon: module.default });
      })
      .catch((error) => {
        
        console.error('Error loading icon:', error);
      });
  }

  getDay = (date) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[new Date(date).getDay()];
  };


}