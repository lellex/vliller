import { async, TestBed, inject } from '@angular/core/testing';

import { Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { NativeStorageMock } from '@ionic-native-mocks/native-storage';
import { Observable } from 'rxjs/Observable';

import { FavoritesService } from './favorites';

describe('Service: FavoritesService', () => {
  let service: FavoritesService;
  let response: any;
  let request: any;

  const platformStub = {
    ready: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
  };
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: Platform, useValue: platformStub},
        {provide: NativeStorage, useValue: NativeStorageMock},
        FavoritesService
      ]
    });
  });

  beforeEach(inject([FavoritesService], (s: FavoritesService) => {
    service = s;
  }));

  it('should...', () => {
    expect(service).toBeTruthy();
  });
});
