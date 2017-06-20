import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLineComponent } from './music-line.component';

describe('MusicLineComponent', () => {
  let component: MusicLineComponent;
  let fixture: ComponentFixture<MusicLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
