import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

export const HeaderContainer = styled(AppBar)`
  &.MuiAppBar-root{
    background-color: ${({ theme }) => theme.palette.background.paper};
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .MuiToolbar-root{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`;

export const Brand = styled('img')`
  height: 1.6rem;

  ${({ theme }) => theme.breakpoints.up('md')}{
    height: 3rem;
  }
`

export const CTAContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: ${({ theme }) => theme.spacing(2) };
`