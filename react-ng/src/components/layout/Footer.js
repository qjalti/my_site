import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
  SpeedDial, SpeedDialIcon, SpeedDialAction
} from "@mui/material";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowDownwardOutlinedIcon
  from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

import {Link as RouterLink} from "react-router-dom";

const actions = [
  {
    icon: <ArrowDownwardOutlinedIcon/>,
    name: 'Вниз',
    id: 'down',
    action: () => {
      document.body.scrollIntoView({behavior: 'smooth', block: 'end'});
    }
  },
  {
    icon: <ArrowUpwardOutlinedIcon/>, name: 'Вверх', id: 'up', action: () => {
      document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  },
  {
    icon: <TelegramIcon/>,
    name: 'Telegram',
    id: 'telegram',
    link: 'https://t.me/NikitaGuriev',
  },
  {
    icon: <WhatsAppIcon/>,
    name: 'WhatsApp',
    id: 'whatsapp',
    link: 'https://wa.me/79883857654',
  },
  {
    icon: <PhoneInTalkOutlinedIcon/>,
    name: 'Телефон',
    id: 'phone',
    link: 'tel:+79883857654',
  },
  {
    icon: <AlternateEmailOutlinedIcon/>,
    name: 'E-Mail',
    id: 'email',
    link: 'mailto:stig.guriev@gmail.com',
  },
  {
    icon: <InstagramIcon/>,
    name: 'Instagram',
    id: 'instagram',
    link: 'https://instagram.com/guriev_no',
  },
  {
    icon: <YouTubeIcon/>,
    name: 'YouTube',
    id: 'youtube',
    link: 'https://www.youtube.com/c/NikitagurievRu',
  },
];

export default function Footer() {
  return (
    <div>
      <SpeedDial
        ariaLabel="Контакты"
        sx={{position: 'fixed', bottom: 16, right: 16}}
        icon={<SpeedDialIcon/>}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.action}
            href={action.link}
            target="_blank"
          />
        ))}
      </SpeedDial>
      <Box sx={{pb: 10}}/>
      <Paper
        sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}
        elevation={3}
      >
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction
            label="Главная"
            icon={<HomeOutlinedIcon/>}
            component={RouterLink}
            to="/"
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}