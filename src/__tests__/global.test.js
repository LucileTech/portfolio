

import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Components/Home/Home.tsx';

describe('Home component', () => {
  test('Renders the Home component', () => {
    const { getByText, getByAltText } = render(<Home theme="light" />);

    // Check if certain text elements are present in the component
    expect(getByText('Hi!')).toBeInTheDocument();
    expect(getByText('Lucile Tronczyk')).toBeInTheDocument();
    expect(getByText('Web Developer & Full Stack Software Engineer')).toBeInTheDocument();

    // Check if the avatar image is present
    const avatarImage = getByAltText('avatar');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', 'path_to_your_avatar_image');
  });

  // Add more tests based on your component's functionality and behavior
});