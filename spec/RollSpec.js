describe('Roll', function() {

  beforeEach(function(){
    roll = new Roll(2);
  });

  it('has a pins attribute', function(){
    expect(roll.pins()).toEqual(2)
  });
});
