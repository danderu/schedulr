import EventsUseCase from '../user/eventsUseCase';

export default class UserFactory {
  static eventsUseCase(){
    return new EventsUseCase();
  }
}
