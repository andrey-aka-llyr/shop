import { ToolkitModule } from './toolkit.module';

describe('ToolkitModule', () => {
  let toolkitModule: ToolkitModule;

  beforeEach(() => {
    toolkitModule = new ToolkitModule();
  });

  it('should create an instance', () => {
    expect(toolkitModule).toBeTruthy();
  });
});
