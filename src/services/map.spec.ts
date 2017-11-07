import { async, TestBed, inject } from '@angular/core/testing';

import {BaseRequestOptions, Http, ConnectionBackend} from "@angular/http";
import { MockBackend } from '@angular/http/testing';

import { MapService } from './map';

describe('Service: MapService', () => {
  let service: MapService;
  let response: any;
  let request: any;

  const platformStub = {
    ready: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
  };

  let HTTP = {
    provide: Http,
    useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
    deps: [MockBackend, BaseRequestOptions]
  }
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        MapService,
        BaseRequestOptions,
        HTTP
      ]
    });
  });

  beforeEach(inject([MapService], (s: MapService) => {
    service = s;
  }));

  it('should...', () => {
    expect(service).toBeTruthy();
  });
});
