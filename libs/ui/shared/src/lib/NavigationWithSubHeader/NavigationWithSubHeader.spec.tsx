import { render } from '@testing-library/react';

import NavigationWithSubHeader from './NavigationWithSubHeader';

describe('NavigationWithSubHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationWithSubHeader />);
    expect(baseElement).toBeTruthy();
  });
});
