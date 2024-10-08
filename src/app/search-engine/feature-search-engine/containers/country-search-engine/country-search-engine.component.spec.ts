import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySearchEngineComponent } from './country-search-engine.component';

describe('CountrySearchEngineComponent', () => {
  let component: CountrySearchEngineComponent;
  let fixture: ComponentFixture<CountrySearchEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrySearchEngineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrySearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
