import React from 'react'
import Instapage from '../src/instagramClone/InstagramPage'

import renderer from 'react-test-renderer';

test('Navigation renders correctly', () => {
    const tree = renderer.create(<Instapage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

//First creates snap shot and compares next runs with that snap shot, and tells all the differences
//jest -u, updates the snap shot to the new, if the new was correct.
//AKA my custom script in Package.json testU, which is run by "npm run testU"