import React from 'react';
import './MainWeatherWindow.css';

export default class MainWeatherWindow extends React.Component {
  render(props) {
    const Title = this.props.city ? null : <h1 className='title'>Weather Forecast</h1>;
  }
}