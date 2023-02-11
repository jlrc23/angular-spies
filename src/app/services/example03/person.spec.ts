import { Person } from './person';

describe('Person', () => {
  let person: Person;
  beforeAll(()=>{
    person = new Person('JL', 'Rosado');
  });
  it('should create an instance', () => {
    expect(person).toBeTruthy();
  });
  it('Should say my name', ()=>{
    spyOn(window, 'alert');
    person.sayMyName();
    expect(window.alert).toHaveBeenCalled();
  })

});
