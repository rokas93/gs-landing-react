import dcIcon from '../../assets/icons/dc-icon.svg';
import fbIcon from '../../assets/icons/fb-icon.svg';
import sampIcon from '../../assets/icons/samp-icon.svg';
import ytIcon from '../../assets/icons/yt-icon.svg';
import { uid } from 'uid';

const mediaLinks = [
  {
    id: uid(),
    icon: sampIcon,
    url: 'https://files.sa-mp.com/sa-mp-0.3.7-R4-2-install.exe',
    text: '',
    color: '',
  },
  {
    id: uid(),
    icon: fbIcon,
    url: 'https://www.facebook.com/greenside.lt',
    text: 'Facebook puslapis',
    color: '#327BDC',
  },
  {
    id: uid(),
    icon: dcIcon,
    url: 'https://discord.gg/PGxrkTEyFS',
    text: 'Discord serveris',
    color: '#5562EA',
  },
  {
    id: uid(),
    icon: ytIcon,
    url: 'https://www.youtube.com/c/GreenSidelt2015',
    text: 'YouTube kanalas',
    color: '#BE5245',
  },
];

export default mediaLinks;
