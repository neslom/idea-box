var expect = chai.expect;

describe('search bar', function() {
  beforeEach(function () {
    MagicLamp.load("dashboard/index");
  });

  it('works', function() {
    var text = $('.header h1').text();
    expect(text).to.eq('IdeaBox 2.0');
  });

  it('strips spaces from a string', function() {
    var text = 'hello  test';
    expect(stripSpaces(text)).to.eq('hellotest');
  });
});
