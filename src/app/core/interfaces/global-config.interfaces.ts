export interface AppNavItem {
    label: string;
    icon: string;
    route: string;
}

export interface AppBrand {
    name: string;
    logoPath: string;
    icon: string;
}

export interface UserSession {
    name: string;
    role: string;
    avatarPath: string;
}

export interface GlobalConfig {
    brand: AppBrand;
    currentUser: UserSession;
    navItems: AppNavItem[];
}
