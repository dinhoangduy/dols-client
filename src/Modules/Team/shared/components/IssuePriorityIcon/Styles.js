import styled from 'styled-components';

import { issuePriorityColors } from '/src/Modules/Team/shared/utils/styles';
import { Icon } from '/src/Modules/Team/shared/components';

export const PriorityIcon = styled(Icon)`
  color: ${props => issuePriorityColors[props.color]};
`;
