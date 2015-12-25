/* eslint no-console:0 */
import UseCase from './useCase';

/**
 * @implements UseCase
 * This is the default use case returned
 * by the domain when asking for a not implemented
 * use case. It allows to work on the client with
 * a work in progress feature. The execute() method
 * returns a promise which warns in console that
 * the requested method is not implemented yet.
 *
 * @example
 * Schedulr.get('whatever_use_case')
 *     .execute()
 *     .then(console.log.bind(console));
 * */
export default class NotImplementedUseCase extends UseCase{

  constructor(key){
    super(key);
    this._key = key;
  }

  execute() {
    return new Promise((resolve, reject) => {
      try{
        resolve(console.warn(`Service ${this._key} is not implemented in the current version of the domain`));
      }catch(e){
        reject(e); }
    });
  }
}
