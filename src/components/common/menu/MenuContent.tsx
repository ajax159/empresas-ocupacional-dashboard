
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
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

export default function MenuContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => handleNavigate(item.path)}
              sx={{
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
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => handleNavigate(item.path)}
              sx={{
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
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
