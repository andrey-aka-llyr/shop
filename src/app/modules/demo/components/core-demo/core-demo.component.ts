import { Component, OnInit, Inject } from '@angular/core';
import { LocalStorageService, ConfigOptionsService, ConstantsService, GENERATOR, GeneratorService } from '../../../../services';
import { Configuration } from '../../../../models';

@Component({
  selector: 'app-core-demo',
  templateUrl: './core-demo.component.html',
  styleUrls: ['./core-demo.component.css']
})
export class CoreDemoComponent implements OnInit {
  token: string;

  constructor(
    private storageService: LocalStorageService,
    private configService: ConfigOptionsService,
    private constantsService: ConstantsService,
    @Inject(GENERATOR) private generator: string,
    private generatorService: GeneratorService
  ) { }

  ngOnInit() {
    this.token = this.generator;
  }

  get storageLength(): number {
    return this.storageService.available ? localStorage.length : 0;
  }
  addStorageItem() {
    const data = this.generatorService.getSequence(15);
    console.log(data);
    this.storageService.setItem(data, data);
  }
  clearStorage() {
    this.storageService.clearStorage();
  }

  get title(): string {
    return this.constantsService.title;
  }
  get version(): string {
    return this.constantsService.version;
  }

  get configuration(): Configuration {
    return this.configService.configuration;
  }
}
