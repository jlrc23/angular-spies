import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let service: MasterService;
  let valueService: ValueService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService]
    });
    service = TestBed.inject(MasterService);
    valueService = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return "my fake value"', () => {
    const myValue = "my fake value"
    spyOn(valueService,'getValue').and.returnValue(myValue);
    const resp = service.getValue();
    expect(resp).toEqual(myValue);
    expect(valueService.getValue).toHaveBeenCalled();
    expect(valueService.getValue).toHaveBeenCalledTimes(1);
  });

});
