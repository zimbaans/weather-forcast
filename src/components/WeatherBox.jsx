import React from 'react';
import './WeatherBox.css';

export default class WeatherBox extends React.Component {
  state = {
    icon: null, // State to store the loaded icon
  };

  componentDidMount() {
    // Load the weather icon asynchronously
    import(`../images/${this.props.icon}.svg`)
      .then((module) => {
        // Update the state when the icon is loaded
        this.setState({ icon: module.default });
      })
      .catch((error) => {
        // Handle any errors that occur during icon loading
        console.error('Error loading icon:', error);
      });
  }

  // returns weekday to a given Date value
  getDay = (date) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[new Date(date).getDay()];
  };

  render() {
    const { date, temp } = this.props;
    const { icon } = this.state;

    return (
      <div className='weather-box'>
        <h1>{date ? this.getDay(date) : ''}</h1>
        {icon && <img src={icon} alt='Weather Icon' />}
        <span className='temp'>{Math.round(temp - 273.15)}°C</span>
      </div>
    );
  }
}
