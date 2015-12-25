import CalendarValueObject from '../calendar/calendarValueObject';
import DayNamesUseCase from '../calendar/dayNamesUseCase';
import MonthDaysUseCase from '../calendar/monthDaysUseCase';

export default class CalendarFactory {
  static dayNamesUseCase(){
    return new DayNamesUseCase({calendar: CalendarFactory.calendarValueObject()});
  }

  static monthDaysUseCase(){
    return new MonthDaysUseCase({calendar: CalendarFactory.calendarValueObject()});
  }

  static calendarValueObject(){
    return new CalendarValueObject();
  }
}
