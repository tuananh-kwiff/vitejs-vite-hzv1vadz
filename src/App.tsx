import { useState } from 'react'
import { Button, alpha, styled } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import './App.css'

const theme = {
  palette: {
    primary: {
      light: '#9249FF',
      main: '#8225FA',
      dark: '#5D00CD',
    },
    secondary: {
      main: '#C49A4D',
      dark: '#809593',
    },
    primaryShade: {
      light: '#7325D9',
      dark: '#42137E',
    },
    navigation: {
      light: '#C092FC10',
      main: '#CCCCFF50',
      selected: '#8225FA',
      color: '#000000',
      backgroundColor: '#FFFFFF',
    },
    cashout: {
      lighter: '#8224FB',
      light: '#5D00CD',
      dark: '#142526',
      darker: '#182526',
    },
    cashoutAccepted: {
      lighter: '#5E1CC1',
      light: '#4F24A4',
      dark: '#402A81',
      darker: '#2B2A5A',
    },
    cashoutSettled: {
      light: '#763AF1',
      main: '#5321C5',
      dark: '#182526',
    },
    trendingBets: {
      lightest: '#7C10FA',
      lighter: '#6E15DF',
      light: '#5E1DC1',
      dark: '#4F24A4',
      darker: '#44208A',
      darkest: '#381E6C',
    },
    retainCard: {
      lightest: '#6E16DF',
      lighter: '#5E1CC1',
      light: '#4F24A4',
      dark: '#402A81',
      darker: '#2B2A5A',
    },
    freeBetTeaser: {
      light: '#213030',
      main: '#233336',
      dark: '#262626',
    },
    freeBetEnvelope: {
      light: '#933EFF',
      main: '#8300FF',
      dark: '#5D00D1',
    },
    freeBetReveal: {
      main: '#8300FF',
      dark: '#233336',
      darker: '#213030',
      darkest: '#262626',
      contrastText: '#FFFFFF',
    },
    freeBetRevealKwiffed: {
      light: '#C59B46',
      main: '#8300FF',
      dark: '#233336',
      darker: '#213030',
      darkest: '#262626',
      contrastText: '#FFFFFF',
    },
    systemBetEnvelope: {
      light: '#F5D695',
      main: '#8225FA',
      dark: '#42137E',
    },
    superchargedTicker: {
      lightest: '#D4B779',
      main: '#544292',
      dark: '#6850B3',
      darkest: '#3A4649',
      logoBackgroundColor: '#D4B779',
      backgroundColor: '#142323',
    },
    authOptions: {
      light: '#F0E5FE',
    },
    loginButton: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
    mainText: {
      main: '#FFFFFF',
      selected: '#8225FA',
    },
    freeBet: {
      lighter: '#F5D695',
      light: '#C59B46',
      dark: '#142526',
      darker: '#182526',
    },
    primePicks: {
      main: '#4169E1',
    },
    longshotLegends: {
      main: '#FFA500',
    },
    playerSpotlight: {
      main: '#DC143C',
    },
    contactUs: {
      contrastText: '#000000',
      mobileBackgroundColor: '#FFFFFF',
      backgroundColor: '#f2f2f2',
      backgroundColorHover: '#B9CCCC',
    },
    productBackground: {
      backgroundColor: '',
      lightDotColor: '',
      mediumDotColor: '',
      gradientStart: '',
    },
    primaryButton: {
      gradientStart: '',
      gradientEnd: '',
      hoverGradientStart: '',
      hoverGradientEnd: '',
      contrastText: '',
    },
    secondaryButton: {
      gradientStart: '',
      gradientEnd: '',
      hoverGradientStart: '',
      hoverGradientEnd: '',
      contrastText: '',
    },
    disabledButton: {
      gradientStart: '',
      gradientEnd: '',
      contrastText: '',
      light: '#6D7075',
    },
    bottomNav: {
      backgroundColor: '',
      boxShadow: '',
    },
    profileMenuItem: {
      gradientStart: 'rgba(250, 106, 10, 0.6)',
      gradientEnd: 'rgba(255, 184, 84, 0.6)',
    },
    loader: {
      main: '#8225FA',
    },
    link: {
      main: '#FBB03B',
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    grey: {
      '200': '#f2f2f2',
    }
  },
};

const StyledButton = styled(Button)(() => ({
  borderRadius: 10,
  minWidth: '62px',
  height: '46px',
  backgroundColor: alpha(theme.palette.common.white, 0.08),
  color: theme.palette.mainText.main,

  '&:focus': {
    boxShadow: '0px 0px 4px 0px #FFFFFF26',
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.4),
    color: theme.palette.mainText.main,
  },
  '.MuiTouchRipple-child': {
    backgroundColor: theme.palette.primary.light,
  },
  '&.wa-disabled': {
    backgroundColor: alpha(theme.palette.common.white, 0.02),
    color: theme.palette.grey[200],
  },
  '&.wa-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.mainText.main,
    '&.wa-disabled': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
    },
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.mainText.main,
    },
    '.MuiTouchRipple-child': {
      backgroundColor: alpha(theme.palette.common.white, 0.8),
    },
  },
}));

function App() {
  const [state, setState] = useState(0);

  let className;

  if (state === 0) className = '';
  if (state === 1) className = 'wa-selected';
  if (state === 2) className = 'wa-disabled wa-selected';
  if (state === 3) className = 'wa-disabled';

  return (
    <>
      <div style={{
        width: "fit-content",
        backgroundColor: "rgb(18, 18, 18)",
      }}>
        <div style={{
          display: 'relative',
          height: "100px",
          width: "720px",
          background: "linear-gradient(106.51deg, rgba(255, 255, 255, 0.25) -30.62%, rgba(255, 255, 255, 0.25) -30.62%, rgba(255, 255, 255, 0.25) -30.61%, rgba(255, 255, 255, 0.176) 30.64%, rgba(255, 255, 255, 0.173) 30.66%, rgba(255, 255, 255, 0.075) 100%)"
        }}>
          <StyledButton className={className} sx={{
            display: 'absolute',
            left: '40rem',
            top: '1.5rem',
          }}>
            {className?.includes('wa-disabled') ? <LockOutlined /> : 6.25}
          </StyledButton>
        </div>
      </div>
      <p>kwiff state: {className}</p>
      <button onClick={() => setState(state => state < 3 ? state + 1 : 0)}>change kwiff state</button>
    </>
  )
}

export default App
