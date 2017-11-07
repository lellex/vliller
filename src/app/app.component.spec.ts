import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { AppVersionMock } from '@ionic-native-mocks/app-version';

import { App } from './app.component';

describe('App', () => {

  let fixture: ComponentFixture<App>;
  let instance: App;

  const platformStub = {
    ready: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
  };
  const statusBarStub = {
    styleDefault: (): void => undefined
  };
  const splashScreenStub = {
    hide: (): void => undefined
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        App
      ],
      providers: [
        {provide: Platform, useValue: platformStub},
        {provide: StatusBar, useValue: statusBarStub},
        {provide: SplashScreen, useValue: splashScreenStub},
        {provide: AppVersion, useClass: AppVersionMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create the root page', () => {
    expect(instance).toBeTruthy();
  });

});