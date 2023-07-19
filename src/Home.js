import * as React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
//import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import MailIcon from '@mui/icons-material/Mail';
const drawerWidth = 220;
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: "300px",
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '29ch',
      },
    },
  },
}));
export default function SearchAppBar() {
  return (
    <>
    <div className='homehome'>
    <main>
    <div class="introo">
      
    </div>
    <div class="achievements">
      <div class="work">
      <img style={{height:"100px",width:"110px"}} src="https://www.bobworld.com/-/media/project/bob/bobworld/svg/credit-score-icon.svg" alt="easyclass" />
        <p class="work-heading">Profile</p>
        <p class="work-text">I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects.</p>
      </div>
      <div class="work">
            <img style={{height:"100px",width:"110px"}} src="https://www.bobworld.com/-/media/project/bob/bobworld/svg/offers-updated.svg" alt="easyclass" />
        <p class="work-heading">Branches</p>
        <p class="work-text">I have a lot of skills and I am very good at them. I am very good at programming and I am always looking for new skills.</p>
      </div>
      <div class="work">
      <img style={{height:"100px",width:"110px"}} src="https://www.bobworld.com/-/media/project/bob/bobworld/svg/account-aggregator-updated.svg" alt="easyclass" />
        <p class="work-heading">Loans</p>
        <p class="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.</p>
      </div>
      <div class="work">
      <img style={{height:"100px",width:"110px"}} src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/home/bcloan.svg?iar=0&hash=05823B2B2F9045B4775CCDCA46E6EA10" alt="easyclass" />
        <p class="work-heading">Loans</p>
        <p class="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.</p>
      </div>
      <div class="work">
      <img style={{height:"100px",width:"110px"}} src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/home/beloan.svg?iar=0&hash=6CA7E15EEC66AEE8D660120E12B60FA7" alt="easyclass" />
        <p class="work-heading">Loans</p>
        <p class="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.</p>
      </div>
    </div>
    <div class="about-me">
      <div class="about-me-text">
      <h2>Accounts</h2><br></br>
      <img style={{height:"100px",width:"110px"}} src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/icons/bankofbaroda-accounts.svg?iar=0&hash=CCDC658A25A755B48D4E83E495834947" alt="easyclass" /><br></br>

        <p>Bank of Baroda offers different type of accounts to meet your financial goals and secure your future. Choose from our wide range of deposit products that are specifically designed to keep your unique requirements in mind.</p>
      </div>
      <img src="https://img.freepik.com/premium-vector/epayment-process-concept-with-people-scene-flat-cartoon-design-woman-transfers-money-man-credit-card-using-online-banking-mobile-application-vector-illustration-visual-story-web_9209-9361.jpg" alt="me"></img>
    </div>
  </main>
  <footer class="footerr">
    <div class="copy">© The Luna Bank of India</div>
    <div class="bottom-links">
      <div class="links">
        <span>More Info</span>
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy policy</a>
        <a href="#">Review</a>
        <a href="#">Contact Information</a>
      </div>
      <div class="links">
        <span>Social Links</span>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
  </div>

    <Box sx={{ flexGrow: 1 }} >
        <Box sx={{ display: 'flex'  }} >
      <CssBaseline />
      <Drawer 
        variant="permanent"
        sx={{
            width: 0,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        >
        <Toolbar />
        <Box style={{backgroundColor:" #76d7c4 ",height:"2000px"}}>
          <List>      
          {['Profile'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton  component={Link} to='/'>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            {[ 'User reviews'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton  component={Link} to='/Review'>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            {[ ' Open account'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton  component={Link} to='/openacc'>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            {[ 'About Us'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton  component={Link} to='/'>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
            </Box>
      </Drawer>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}style={{backgroundColor:" #45b39d "}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 6 }}
            >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrapcomponent="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >LUNA BANK
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Logout</Button>

        
        </Toolbar>
      </AppBar>
      
      </Box>
    </Box>
    
    </>
  );
}