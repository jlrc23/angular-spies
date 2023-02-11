describe('A Spy', function(){
    let foo;
    let bar = null;
    beforeEach(function(){
        foo = {
            setBar: (value)=> bar= value
        }
        spyOn(foo, 'setBar');
        foo.setBar(123);
    });
    it('Foo was called', ()=>{
        expect(foo.setBar).toHaveBeenCalled();
    });
    it('How many called', ()=>{
        expect(foo.setBar).toHaveBeenCalledTimes(1);
    });

})