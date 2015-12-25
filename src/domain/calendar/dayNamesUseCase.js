import UseCase from '../useCase';

export default class DayNamesUseCase extends UseCase {
  constructor({calendar} = {}){
    super(calendar);
    this._calendar = calendar;
  }

  execute(){
    return this._calendar.dayNames;
  }
}
