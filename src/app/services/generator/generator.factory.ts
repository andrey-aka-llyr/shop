import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const GENERATOR = new InjectionToken<any[]>('generator-service');

export function GeneratorFactory(length: number) {
  return function(service: GeneratorService): string {
    return service.getSequence(length);
  };
}
