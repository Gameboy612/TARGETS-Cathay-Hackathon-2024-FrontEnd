import { getAPIURL, getWebsiteURL } from '@/constants/website';
import { io } from 'socket.io-client';


export const socket = io(getAPIURL()); //	use the IP address of your machine