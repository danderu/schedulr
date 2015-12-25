import ValueObject from '../valueObject';

export default class CalendarValueObject extends ValueObject {
  constructor(firstWeekDay = 1){
    super(firstWeekDay);
    this.firstWeekDay = firstWeekDay;
  }

  _weekStartDate(date) {
    var startDate = new Date(date.getTime());
    while (startDate.getDay() !== this.firstWeekDay) {
      startDate.setDate(startDate.getDate() - 1);
    }
    return startDate;
  }

  _monthDates(year, month, dayFormatter, weekFormatter) {
    if ((typeof year !== 'number') || (year < 1970)) {
      throw new Error('year must be a number >= 1970');
    }

    if ((typeof month !== 'number') || (month < 0) || (month > 11)) {
      throw new Error('month must be a number (Jan is 0)');
    }

    var weeks = [],
    week = [],
    i = 0,
    date = this._weekStartDate(new Date(year, month, 1));
    do {
      for (i = 0; i < 7; i++) {
        week.push(dayFormatter ? dayFormatter(date) : date);
        date = new Date(date.getTime());
        date.setDate(date.getDate() + 1);
      }
      weeks.push(weekFormatter ? weekFormatter(week) : week);
      week = [];
    } while ((date.getMonth() <= month) && (date.getFullYear() === year));

    return weeks;
  }

  monthDays(year, month) {
    var getDayOrZero = function getDayOrZero(date) {
      return date.getMonth() === month ? date.getDate() : 0;
    };
    return this._monthDates(year, month, getDayOrZero);
  }

  get monthNames() {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  }

  get dayNames(){
    return [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];
  }
}

