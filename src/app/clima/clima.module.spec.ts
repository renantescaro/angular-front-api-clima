import { ClimaModule } from './clima.module';

describe('ClimaModule', () => {
  let climaModule: ClimaModule;

  beforeEach(() => {
    climaModule = new ClimaModule();
  });

  it('should create an instance', () => {
    expect(climaModule).toBeTruthy();
  });
});
