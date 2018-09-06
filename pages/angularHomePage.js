import BasePage from './basePage';

class AngularHomePage extends BasePage {
    constructor() {
        super();
        this.searchInput= element(by.css("input[id='search-box']"));
        this.navigationMenu = element(by.css('div ul li a'));
        this.heroText=element(by.tagName('h2'))
        this.topHeroTableElements = element.all(by.css("a[class='col-1-4']"));
        this.clearButton = $('button.clear');
        this.textMessages = element.all(by.css("div[_ngcontent-c1]"));
        
       
        this.url = 'dashboard';
        }

    searchFor(heroName) {
        this.searchInput.sendKeys(heroName);
         browser.actions().mouseMove(this.navigationMenu).perform();
        return this.navigationMenu.click();
    }

    clearMessages() {
        return this.clearButton.click();
    }



    deleteAllHeroes() {
        this.deleteButtons.count().then(count => {
            while(count > 0) {
                this.deleteButtons.get(0).click();
                count--;
            }
        });
    }


    /**
     * search for a friend
     * @param  {string} string
     * @return {promise}
     */
    // searchFor(string) {
    //    return this.searchBox.sendKeys(string);
    // }

    /**
     * add a friend
     * @param {string} name
     * @return {promise}
     */
    addFriend(name) {
        this.addnameBox.sendKeys(name);
        return this.addButton.click();
    }

    /**
     * delete a friend by name
     * @param  {string} nameString
     * @return {promise}
     */
    deleteFriend(nameString) {
        return this.rows.filter(row => {
            // find the row with the name we want...
            return row.$$('td').get(1).getText().then(name => {
                return name === nameString;
            });
        }).then(filteredRows => {
            filteredRows[0].$(this.deleteButton.locator().value).click();
        });
    }

    /**
     * find a friend in search results
     * @param {string} name - name to find
     * @return {bool}
     */
    inResults(name) {
        return this.friendName(name).then(found => {
            return found.length > 0;
        });
    }

    /**
     * delete all friends
     */
    deleteAllFriends() {
        this.deleteButtons.count().then(count => {
            while(count > 0) {
                this.deleteButtons.get(0).click();
                count--;
            }
        });
    }
}
export default new AngularHomePage();