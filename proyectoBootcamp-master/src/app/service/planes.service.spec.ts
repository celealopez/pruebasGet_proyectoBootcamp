/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanesService } from './planes.service';

describe('Service: Planes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanesService]
    });
  });

  it('should ...', inject([PlanesService], (service: PlanesService) => {
    expect(service).toBeTruthy();
  }));
});
