import { TestBed, inject } from '@angular/core/testing';

import { CategoriesService } from './categories.service';

describe('CategorieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesService]
    });
  });

  it('should be created', inject([CategoriesService], (service: CategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
