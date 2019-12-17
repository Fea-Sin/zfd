import React from 'react';
import { mount } from 'enzyme';
import Alert from '..';

describe('Alert', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('could be closed', () => {
    const onClose = jest.fn()
    const afterClose = jest.fn()
    const wrapper = mount(
      <Alert
        message='warning test warning test warning test'
        type='warning'
        closable
        onClose={onClose}
        afterClose={afterClose}
      />
    )
    wrapper.find('.zf-alert-close-icon').simulate('click');
    expect(onClose).toHaveBeenCalled();
    jest.runAllTimers();
    expect(afterClose).toHaveBeenCalled()
  })
})
