require('jsdom-global')();

import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Homepage from './Homepage.vue';
import axios from 'axios';

const testContent = 'foo boo doo doo!';
axios.get = jest.fn();
axios.get.mockReturnValue(
    new Promise((resolve) => resolve(testContent)));

describe('Homepage', () => {

    // Inspect the raw component options
    it('has a created hook', () => {
        expect(typeof Homepage.created).toBe('function');
    });

    it('calls axios right', () => {
        const wrapper = mount(Vue.component(Homepage));

        expect(axios.get).toHaveBeenCalledWith('/blurb.md');
        expect(wrapper.html()).toContain(testContent);
    });
});