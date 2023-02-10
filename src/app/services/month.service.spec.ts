import { TestBed } from '@angular/core/testing';

import { MonthService } from './month.service';

describe('MonthService', () => {
  let service: MonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('month should have been called', ()=>{
    spyOn(window, 'Date');
    service.currentMonth();
    expect(window.Date).toHaveBeenCalled();
  });

  describe('Test caculate month', ()=>{
    beforeEach(() => {
      jasmine.clock().install();
    });
    
    afterEach(() => {
      jasmine.clock().uninstall();
    });

    it('month test currentMonth', ()=>{
      const d = new Date();   
      const index = 1; 
      d.setMonth(index);
      jasmine.clock().mockDate(d);
      expect(service.currentMonth()).toEqual(service.months[index]);
    });
  
    it('month test nextMonth', ()=>{   
      const d = new Date();
      const index = 1; 
      d.setMonth(index);
      jasmine.clock().mockDate(d);
      expect(service.nextMonth()).toEqual(service.months[index+1]);
    });
  
    
  })



});
