import angularHomePage from '../pages/angularHomePage';



describe ('angular app', () => {
	beforeEach(() => {
        angularHomePage.goto();
	});

    it('should have a title', () => {

        expect(browser.getTitle()).toEqual('Tour of Heroes');
    })

    it('should display found search hero', () => {
        
        angularHomePage.searchFor('Narco'); 
        expect((angularHomePage.heroText).getText()).toBe('NARCO Details');
    });
 
    it('should have top heroes', () => {
       
        expect(angularHomePage.topHeroTableElements.count()).toEqual(4);

    });

    it('should clear messages', () => {
        angularHomePage.clearMessages();
        expect(angularHomePage.textMessages.count()).toEqual(0);

    });

  

});