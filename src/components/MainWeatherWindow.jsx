import React from 'react';
import {createRoot}  from 'react-dom/client';
import './MainWeatherWindow.css';
import icon01d from '../images/01d.svg';




export default class MainWeatherWindow extends React.Component {
  async componentDidMount() {
    if (this.props.data) {
      // Use dynamic import for iconOther
      const { default: iconOther } = await import(`../images/${this.props.data.icon}.svg`);
      this.setState({ iconOther });
    }
  }

  render() {
    const Title = this.props.city ? null : <h1 className='title'>Weather Forecast</h1>;

    // Use state to store iconOther
    const iconSource = this.state?.iconOther || icon01d;

    return (
      <div className='main'>
        <div className='inner-main'>
          {Title}
          <img
            src={iconSource}
            alt='sun'
            style={{
              visibility: this.props.city ? 'visible' : 'hidden',
              opacoity: this.props.city ? '1' : '0'
            }}
          />

          <div
            className='today'
            style={{
              visibility: this.props.city ? 'visible' : 'hidden',
              opacity: this.props.city ? '1' : '0'
            }}
          >
            <span>Today</span>
            <h1>{this.props.city}</h1>
            <p>
              Temperature: {this.props.data ? Math.round(this.props.data.temp - 273.15) : 0}
              °C
            </p>
            <p>{this.props.data ? this.props.data.weather_desc.toLowerCase() : ''}</p>
          </div>
        </div>
        {this.props.children.map((child, index) => (
  <div key={`weatherBox_${index}`}>{child}</div>
))}
      </div>
    );
  }
}
