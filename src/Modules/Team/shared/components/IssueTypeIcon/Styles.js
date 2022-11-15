import styled from 'styled-components';

import { issueTypeColors } from '/src/Modules/Team/shared/utils/styles';
import { Icon } from '/src/Modules/Team/shared/components';

export const TypeIcon = styled(Icon)`
  color: ${props => issueTypeColors[props.color]};
`;
