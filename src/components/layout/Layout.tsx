import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SelectContent from '../common/menu/SelectContent';
import MenuContent from '../common/menu/MenuContent';
//import CardAlert from '../common/menu/CardAlert';
import OptionsMenu from '../common/menu/./OptionsMenu';

const drawerWidth = 240;
const miniDrawerWidth = 72;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open?: boolean }>(({ theme, open }) => ({
  width: open ? drawerWidth : miniDrawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  [`& .${drawerClasses.paper}`]: {
    width: open ? drawerWidth : miniDrawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    boxSizing: 'border-box',
  },
}));

const Layout = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: open ? 'space-between' : 'center',
          p: 1.5,
          mt: 'calc(var(--template-frame-height, 0px) + 4px)',
        }}
      >
        {open && <SelectContent />}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            minWidth: 'auto',
            p: 1,
          }}
        >
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Divider />

      <Box
        sx={{
          overflow: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MenuContent open={open} />
      </Box>

      <Stack
        direction="row"
        sx={{
          p: open ? 2 : 1,
          gap: 1,
          alignItems: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
          justifyContent: open ? 'flex-start' : 'center',
        }}
      >
        <Avatar
          sizes="small"
          alt="Riley Carter"
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        {open && (
          <>
            <Box sx={{ mr: 'auto' }}>
              <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                Riley Carter
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                riley@email.com
              </Typography>
            </Box>
            <OptionsMenu />
          </>
        )}
      </Stack>
    </Drawer>
  );
};

export default Layout;
