import dcIcon from '../../assets/icons/dc-icon.svg';
import fbIcon from '../../assets/icons/fb-icon.svg';
import sampIcon from '../../assets/icons/samp-icon.svg';
// import ytIcon from '../../assets/icons/yt-icon.svg';
import { uid } from 'uid';

const mediaLinks = [
  {
    id: uid(),
    icon: sampIcon,
    url: 'https://files.sa-mp.com/sa-mp-0.3.7-R4-2-install.exe',
    text: '',
  },
  {
    id: uid(),
    icon: fbIcon,
    url: 'https://www.facebook.com/greenside.lt',
    text: 'Facebook puslapis',
  },
  {
    id: uid(),
    icon: dcIcon,
    url: 'https://discord.gg/PGxrkTEyFS',
    text: 'Discord serveris',
  },
];

export default mediaLinks;
