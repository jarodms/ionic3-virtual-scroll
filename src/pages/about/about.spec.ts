import { AboutPage } from './about';

describe('About', () => {
    let page: AboutPage;
    let mockPopoverCtrl;

    beforeEach(() => {
        mockPopoverCtrl = jasmine.createSpyObj(['create']);

        page = new AboutPage(mockPopoverCtrl);
    }) 
    
    it('should have conference date', () => {        
        
        expect(page.conferenceDate).toEqual('2047-05-17');
    })
})