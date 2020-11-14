/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../react-client/src/components/Reviews.jsx';

const moxios = require('moxios');

describe('Review Data', () => {
  let wrapper; let reviewSummarySpy; let reviewDataSpy;

  beforeEach(() => {
    reviewSummarySpy = jest.spyOn(Reviews.prototype, 'getReviewSummary').mockReturnValue('');
    reviewDataSpy = jest.spyOn(Reviews.prototype, 'getReviews').mockReturnValue('');
    wrapper = shallow(<Reviews />);
  });

  afterEach(() => {
    reviewDataSpy.mockRestore();
    reviewSummarySpy.mockRestore();
    wrapper.unmount();
  });

  it('calls getReviewSummary on componentDidMount()', () => {
    expect(reviewSummarySpy).toHaveBeenCalledTimes(1);
  });

  it('calls getReviewData on componentDidMount()', () => {
    expect(reviewDataSpy).toHaveBeenCalledTimes(1);
  });
});

describe('Express test', () => {
  const reviewSummary = {
    averageStars: 5,
    reviewCount: 1067,
    recommended: 52,
    totalStars: {
      1: 236,
      2: 213,
      3: 210,
      4: 208,
      5: 190,
    },
    product: 'P001',
  };

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should fetch reviewSummary data', (done) => {
    const wrapper = shallow(<Reviews />);
    moxios.stubRequest('/reviewSummary/P001', {
      status: 200,
      response: reviewSummary,
    });
    moxios.wait(() => {
      expect(wrapper.state('reviewSummary')).toBe(reviewSummary);
      wrapper.unmount();
      done();
    });
  });

  it('should fetch all review data', (done) => {
    const wrapper = shallow(<Reviews />);
    moxios.stubRequest('/reviewData/P001', {
      status: 200,
      response: reviewSummary.reviewCount,
    });
    moxios.wait(() => {
      expect(wrapper.state('reviewData')).toBe(reviewSummary.reviewCount);
      wrapper.unmount();
      done();
    });
  });
});
