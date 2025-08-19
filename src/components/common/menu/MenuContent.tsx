
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import MapIcon from '@mui/icons-material/Map';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FavoriteIcon from '@mui/icons-material/Favorite';

const mainListItems = [
  { text: 'Inicio', icon: <HomeRoundedIcon />, path: '/' },
  { text: 'Atenciones', icon: <AnalyticsRoundedIcon />, path: '/atenciones' },
  { text: 'Atenciones del Día', icon: <AccessTimeIcon />, path: '/atenciones-del-dia' },
  { text: 'Demográfico', icon: <GroupsIcon />, path: '/demografico' },
  { text: 'Estado Nutricional', icon: <RestaurantIcon />, path: '/nutricional' },
  { text: 'Visual y Auditiva', icon: <VisibilityIcon />, path: '/visual-auditiva' },
  { text: 'Osteomuscular', icon: <AccessibilityNewIcon />, path: '/osteomuscular' },
  { text: 'Cardio y Respiratorio', icon: <FavoriteIcon />, path: '/cardioyrespiratorio' },
  { text: 'Mapas', icon: <MapIcon />, path: '/mapas' },
  { text: 'Aptitud', icon: <VerifiedUserIcon />, path: '/aptitud' },
  { text: 'Reportes', icon: <AssignmentRoundedIcon />, path: '/reportes' },
];

const secondaryListItems = [
  { text: 'Configuración', icon: <SettingsRoundedIcon />, path: '/configuracion' },
  { text: 'Acerca de', icon: <InfoRoundedIcon />, path: '/about' },
  { text: 'Ayuda', icon: <HelpRoundedIcon />, path: '/help' },
];

interface MenuContentProps {
  open?: boolean;
}

export default function MenuContent({ open = true }: MenuContentProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Stack sx={{ flexGrow: 1 }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={!open ? item.text : ''} placement="right">
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => handleNavigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: open ? 2.5 : 0,
                  width: open ? 'auto' : 40,
                  margin: open ? 0 : 'auto',
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                    '& .MuiListItemIcon-root': {
                      color: 'white',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    ml: open ? 0 : 'auto',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    whiteSpace: 'nowrap',
                    display: open ? 'block' : 'none',
                  }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={!open ? item.text : ''} placement="right">
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => handleNavigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: open ? 2.5 : 0,
                  width: open ? 'auto' : 40,
                  margin: open ? 0 : 'auto',
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                    '& .MuiListItemIcon-root': {
                      color: 'white',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    ml: open ? 0 : 'auto',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    whiteSpace: 'nowrap',
                    display: open ? 'block' : 'none',
                  }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
