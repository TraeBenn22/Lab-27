import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter';



describe("<Counter />", () => {
    it('is rendered at application start', () => {
        let app = shallow(<Counter />);
        expect(app.find('#counter').exists()).toBe(false);
        expect(app.find('span').exists()).toBe(true);
    });

    it('counter should go up 1', () => {
        let app = mount(<Counter/>);
        let button = app.handleUp(0);
        button.simulate('click');
        expect(app.state("count")).toBe(1);
    });

    it('counter should go down 1', () => {
        let app = mount(<Counter/>);
        let button = app.handleDown(0);
        button.simulate('click');
        expect(app.state("count")).toBe(-1);
    });

});