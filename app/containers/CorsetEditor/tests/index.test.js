import React from 'react';
import { mount } from 'enzyme';
import { browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../../../configureStore';
import BrandedHeader from '../../BrandedHeader';
import CorsetEditor from '../index';

describe('<CorsetEditor />', () => {
  it('Should Render a NotLoggedInComponent when not logged in', () => {
    const store = configureStore({}, browserHistory);
    const editor = mount(
      <Provider store={store}>
        <div>
          <BrandedHeader />
          <CorsetEditor />
        </div>
      </Provider>,
    );
    const bhLink = editor.find('a');
    bhLink.simulate('click');

    expect(editor.find('NotLoggedInComponent')).toHaveLength(1);
    // TODO: Update these to capture the correct chilren that should not exist
    expect(editor.find('DropDown')).toHaveLength(0);
    expect(editor.find('NameBox')).toHaveLength(0);
    expect(editor.find('SubmitButton')).toHaveLength(0);
  });
});
