'use strict';

describe('Filter: quoteFilter', function () {

  // load the filter's module
  beforeEach(module('quoteSiteApp'));

  // initialize a new instance of the filter before each test
  var quoteFilter;
  beforeEach(inject(function ($filter) {
    quoteFilter = $filter('quoteFilter');
  }));

  it('should return the input prefixed with "quoteFilter filter:"', function () {
    var text = 'angularjs';
    expect(quoteFilter(text)).toBe('quoteFilter filter: ' + text);
  });

});
