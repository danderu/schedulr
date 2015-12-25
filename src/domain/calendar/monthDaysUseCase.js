import UseCase from '../useCase';

export default class MonthDaysUseCase extends UseCase {
  constructor({calendar} = {}){
    super(calendar);
    this._calendar = calendar;
  }

  execute({year, month} = {}){
    return this._calendar.monthDays(year, month);
  }
}
