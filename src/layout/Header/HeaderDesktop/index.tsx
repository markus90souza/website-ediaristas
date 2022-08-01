import { Container, Toolbar } from '@mui/material';
import { Link } from 'components/Link';
import { RoundedButton } from 'components/RoundedButton';

import { HeaderContainer, Brand , CTAContainer } from './styles';

interface HeaderDesktopProps {
  
}

const HeaderDesktop = ({  }: HeaderDesktopProps)  =>{
  return (
    <HeaderContainer>
      <Toolbar component={Container}>
        <Link href={'/'}>
          <Brand src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
        </Link>

        <CTAContainer>
          <Link href={'/#'} Component={RoundedButton} mui={{ color: 'primary', variant: 'contained'}} >
            Seja um(a) Diarista
          </Link>

          <Link href={'/#'} Component={RoundedButton} >
            Login
          </Link>
        </CTAContainer>
      </Toolbar>
    </HeaderContainer>
  );
}

export { HeaderDesktop }
