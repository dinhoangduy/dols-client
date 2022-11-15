import React from 'react';

import Spinner from '/src/Modules/Team/shared/components/Spinner';

import StyledPageLoader from './Styles';

const PageLoader = () => (
  <StyledPageLoader>
    <Spinner size={70} />
  </StyledPageLoader>
);

export default PageLoader;
