import styled from 'styled-components';
import { ITheme } from './theme';

const StyledComponentViaClassName: React.FC<{ className?: string }> = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

export const MyStyledComponentViaClassName = styled(StyledComponentViaClassName)`
  color: ${({ theme }) => (theme as ITheme).primaryColor};
  background: ${({ theme }) => (theme as ITheme).secondaryColor};
`;

export const MyStyledComponentViaStyledDotDiv = styled.div`
  color: ${({ theme }) => (theme as ITheme).primaryColor};
  background: ${({ theme }) => (theme as ITheme).secondaryColor};
`;
