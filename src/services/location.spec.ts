import { async, TestBed, inject } from '@angular/core/testing';

import { Platform } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { GeolocationMock } from '@ionic-native-mocks/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { LocationAccuracyMock } from '@ionic-native-mocks/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';

import { LocationService } from './location';

describe('Service: LocationService', () => {
  let service: LocationService;
  let response: any;
  let request: any;

  const platformStub = {
    ready: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
  };
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: Platform, useValue: platformStub},
        {provide: Geolocation, useValue: GeolocationMock},
        {provide: LocationAccuracy, useValue: LocationAccuracyMock},
        Diagnostic,
        LocationService
      ]
    });
  });

  beforeEach(inject([LocationService], (s: LocationService) => {
    service = s;
  }));

  it('should...', () => {
    expect(service).toBeTruthy();
  });
});
