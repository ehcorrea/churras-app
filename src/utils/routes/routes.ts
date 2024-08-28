type TabBarRoutes = Record<string, { title: string; icon: string }>;

export const tabBarRoutes: TabBarRoutes = {
  home: {
    title: 'Home',
    icon: 'home',
  },
  eventos: {
    title: 'Eventos',
    icon: 'bookmark',
  },
  menu: {
    title: 'Menu',
    icon: 'user',
  },
};
