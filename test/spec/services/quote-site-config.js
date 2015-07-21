'use strict';

describe('Service: quoteSiteConfig', function () {

  // load the service's module
  beforeEach(module('quoteSiteApp'));

  // instantiate service
  var quoteSiteConfig;
  beforeEach(inject(function (_quoteSiteConfig_) {
    quoteSiteConfig = _quoteSiteConfig_;
  }));

  it('should do something', function () {
    expect(!!quoteSiteConfig).toBe(true);
  });

});
