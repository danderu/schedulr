import UseCase from '../useCase';

export default class EventsUseCase extends UseCase {
  constructor(){
    super();
  }

  execute({id, month} = {}){
    return [{
      day: 1,
      events: [{
        title: 'Clean my room'
      }]
    }, {
      day: 25,
      events: [{
        title: 'Eat a lot of turkey'
      }, {
        title: 'Play with my new PS4'
      }]
    }];
  }
}
