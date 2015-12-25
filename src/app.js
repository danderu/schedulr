import React from 'react';
import ReactDom from 'react-dom';
import Calendar from './domain/calendar';
import Month from './components/organisms/month';
import './app.scss';

const calendar = new Calendar();

const container = document.createElement('div');

ReactDom.render(
  <Month weeks={calendar.monthDays(2015, 11)} />,
  container
);

document.body.appendChild(container);
