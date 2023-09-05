<
import React from 'react';
import './CityInput.css';

export default class CityInput extends React.Component {
  render(props) {
    const onKlickHandler = async e => {
      e.persist();
      const eventKey = e.which ? e.which : e.keyCode;
      const city = e.target.value;

      if (eventKey === 13) {
        if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(city)) {
          e.target.classList.add('loading');

          if (await this.props.makeApiCall(city)) e.target.placeholder = 'Enter a City...';
          else e.target.placeholder = 'City was not found, try again...';
        } else e.target.placeholder = 'Please enter a valid city name...';
        e.target.classList.remove('loading');
        e.target.value = '';
      }
    };
      }
}