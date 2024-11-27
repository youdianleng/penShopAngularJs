import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyNoticeComponent } from './daily-notice.component';

describe('DailyNoticeComponent', () => {
  let component: DailyNoticeComponent;
  let fixture: ComponentFixture<DailyNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyNoticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
