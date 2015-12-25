import React from 'react';
import ReactDom from 'react-dom';
import Schedulr from './domain';
import Month from './components/organisms/month';
import './app.scss';

const container = document.createElement('div');

const monthDays = Schedulr.get('month_days_calendar_use_case')
  .execute({year: 2015, month: 11})
  .map(week =>
    week.map(day => {
      return {
        number: day,
        events: []
      };
    })
  );

const dayNames = Schedulr.get('day_names_calendar_use_case').execute();

ReactDom.render(
  <Month weeks={monthDays}
    dayNames={dayNames} />,
  container
);

document.body.appendChild(container);
