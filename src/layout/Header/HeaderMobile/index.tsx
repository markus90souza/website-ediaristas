import { Container, IconButton, Toolbar } from '@mui/material';
import { Link } from 'components/Link';
import { RoundedButton } from 'components/RoundedButton';

import { HeaderContainer, Brand , CTAContainer } from './styles';

interface HeaderMobileProps {
  
}

const HeaderMobile = ({  }: HeaderMobileProps)  =>{
  return (
    <HeaderContainer>
      <Toolbar component={Container}>

        <div />
     
        <Link href={'/'}>
          <Brand src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
        </Link>

        <IconButton edge={'start'} color={'inherit'}>
          <i className={'twf-bars'} />
        </IconButton>
      </Toolbar>
    </HeaderContainer>
  );
}

export { HeaderMobile }
