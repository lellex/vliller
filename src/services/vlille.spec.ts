import { async, TestBed, inject } from '@angular/core/testing';

import {BaseRequestOptions, Http, ConnectionBackend} from "@angular/http";
import { MockBackend } from '@angular/http/testing';

import { VlilleService } from './vlille';

describe('Service: VlilleService', () => {
  let service: VlilleService;
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
        VlilleService,
        BaseRequestOptions,
        HTTP
      ]
    });
  });

  beforeEach(inject([VlilleService], (s: VlilleService) => {
    service = s;
  }));

  it('should...', () => {
    expect(service).toBeTruthy();
  });
});
