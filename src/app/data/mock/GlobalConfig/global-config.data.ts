import { GlobalConfig } from "../../../core/interfaces/global-config.interfaces";

export const GLOBAL_APP_CONFIG: GlobalConfig = {
    brand: {
        name: 'CINEMA',
        logoPath: '/assets/svg/navbar/logo.svg', // Assuming a logo exists or placeholder
        icon: 'video'
    },
    currentUser: {
        name: 'Aura',
        role: 'Systems Chief',
        avatarPath: '/assets/svg/navbar/avatar-default.svg',
        email: '[EMAIL_ADDRESS]'
    },
    navItems: [
        { label: 'Home', icon: 'home', route: '/home' },
        { label: 'Movies', icon: 'video', route: '/movies' },
        { label: 'My List', icon: 'bookmark', route: '/mylist' }
    ]
};
