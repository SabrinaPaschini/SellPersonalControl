import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuario01Component } from './usuario01.component';

describe('Usuario01Component', () => {
  let component: Usuario01Component;
  let fixture: ComponentFixture<Usuario01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usuario01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usuario01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
