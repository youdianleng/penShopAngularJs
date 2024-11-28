import { TestBed } from '@angular/core/testing';

import { DailyNoticeContentService } from './daily-notice-content.service';

describe('DailyNoticeContentService', () => {
  let service: DailyNoticeContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyNoticeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
