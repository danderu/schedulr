import CalendarFactory from './factories/calendar';
import UserFactory from './factories/user';
import NotImplementedUseCase from './notImplementedUseCase';

class Schedulr {
  constructor(){
    this._deps = new Map();

    this._deps.set('month_days_calendar_use_case', CalendarFactory.monthDaysUseCase());
    this._deps.set('day_names_calendar_use_case', CalendarFactory.dayNamesUseCase());
    this._deps.set('events_user_use_case', UserFactory.eventsUseCase());
  }

  get(useCase) {
    return this._deps.has(useCase) ? this._deps.get(useCase)
                                   : new NotImplementedUseCase(useCase);
  }
}

export default new Schedulr();
