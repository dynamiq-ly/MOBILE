export const features = [
  [
    /* home */
    (home = {
      id: '[drawer] drawer-home',
      type: 'hotel',
      name: 'home',
      color: 'rgba(33, 165, 230, 0.1)',
      icon: require('@/assets/icons/drawer/home-menu.png'),
      param: {},
      locked: false,
    }),
    /* about hotel */
    (aboutHotel = {
      id: '[stack] stack-about-hotel',
      type: 'hotel',
      name: 'about hotel',
      color: 'rgba(237, 240, 93, 0.1)',
      icon: require('@/assets/icons/drawer/about-hotel-menu.png'),
      param: {},
      locked: false,
    }),
    /* hotels */
    (hotels = {
      id: '[stack] stack-hotels',
      type: 'hotel',
      name: 'our hotels',
      color: 'rgba(189, 154, 255, 0.1)',
      icon: require('@/assets/icons/drawer/hotels-menu.png'),
      param: {},
      locked: false,
    }),
  ],
  [
    /* reception */
    (reception = {
      id: '[stack] stack-reception',
      type: 'service',
      name: 'reception',
      color: 'rgba(118, 219, 122, 0.1)',
      icon: require('@/assets/icons/drawer/reception-menu.png'),
      param: {},
      locked: false,
    }),
    /* room service */
    (roomService = {
      id: '[stack] stack-room-service',
      type: 'service',
      name: 'room service',
      color: 'rgba(255, 67, 97, 0.1)',
      icon: require('@/assets/icons/drawer/rooms-service-menu.png'),
      param: {},
      locked: false,
    }),
    /* check in check out */
    (checkInCheckOut = {
      id: '[stack] stack-check-in-check-out',
      type: 'service',
      name: 'check in check out',
      color: 'rgba(193, 255, 155, 0.1)',
      icon: require('@/assets/icons/drawer/check-in-out-menu.png'),
      param: {},
      locked: false,
    }),
    /* safety */
    (safety = {
      id: '[stack] stack-safety',
      type: 'hotel',
      name: 'Hotel Policies',
      color: 'rgba(102, 227, 227, 0.1)',
      icon: require('@/assets/icons/drawer/safety-menu.png'),
      param: {},
      locked: false,
    }),
  ],
  [
    /* bar */
    (bar = {
      id: '[stack] stack-bar',
      type: 'facility',
      name: 'bar',
      color: 'rgba(255, 255, 250, 0.1)',
      icon: require('@/assets/icons/drawer/bar-menu.png'),
      param: {},
      locked: false,
    }),
    /* restaurant */
    (restaurant = {
      id: '[stack] stack-restaurant',
      type: 'facility',
      name: 'restaurant',
      color: 'rgba(160, 107, 227, 0.1)',
      icon: require('@/assets/icons/drawer/restaurant-menu.png'),
      param: {},
      locked: false,
    }),
    /* entertainment */
    (entertainment = {
      id: '[stack] stack-entertainment',
      type: 'facility',
      name: 'entertainment',
      color: 'rgba(203, 192, 173, 0.1)',
      icon: require('@/assets/icons/drawer/entertainment-menu.png'),
      param: {},
      locked: false,
    }),
    /* rooms */
    (rooms = {
      id: '[stack] stack-rooms',
      type: 'facility',
      name: 'rooms',
      color: 'rgba(134, 163, 151, 0.1)',
      icon: require('@/assets/icons/drawer/rooms-menu.png'),
      param: {},
      locked: false,
    }),
    /* excursions & activites */
    (excursionsActivites = {
      id: '[stack] stack-excursions-activites',
      type: 'facility',
      name: 'excursions & activites',
      color: 'rgba(255, 135, 171, 0.1)',
      icon: require('@/assets/icons/drawer/excursion-menu.png'),
      param: {},
      locked: false,
    }),
    /* point interest */
    (pointInterest = {
      id: '[stack] stack-point-interest',
      type: 'facility',
      name: 'point interest',
      color: 'rgba(255, 134, 0, 0.1)',
      icon: require('@/assets/icons/drawer/point-interest-menu.png'),
      param: {},
      locked: false,
    }),
  ],
  [
    /* gym */
    (gym = {
      id: '[stack] stack-gym',
      type: 'plans',
      name: 'gym',
      color: 'rgba(117, 117, 117, 0.1)',
      icon: require('@/assets/icons/drawer/gym-menu.png'),
      param: {},
      locked: false,
    }),
    /* swimming pool */
    (swimmingPool = {
      id: '[stack] stack-swimming-pool',
      type: 'plans',
      name: 'swimming pool',
      color: 'rgba(174, 184, 254, 0.1)',
      icon: require('@/assets/icons/drawer/swimming-pool-menu.png'),
      param: {},
      locked: false,
    }),
    /* spa */
    (spa = {
      id: '[stack] stack-spa',
      type: 'plans',
      name: 'spa',
      color: 'rgba(109, 177, 191, 0.1)',
      icon: require('@/assets/icons/drawer/spa-menu.png'),
      param: {},
      locked: false,
    }),
    /* renting */
    (renting = {
      id: '[stack] stack-renting',
      type: 'plans',
      name: 'renting',
      color: 'rgba(164, 130, 115, 0.1)',
      icon: require('@/assets/icons/drawer/renting-menu.png'),
      param: {},
      locked: false,
    }),
    /* shopping */
    (shopping = {
      id: '[stack] stack-shopping',
      type: 'plans',
      name: 'shopping',
      color: 'rgba(214, 216, 79, 0.1)',
      icon: require('@/assets/icons/drawer/shop-menu.png'),
      param: {},
      locked: false,
    }),
  ],
  [
    /* help */
    (help = {
      id: '[stack] stack-help',
      type: 'customer',
      name: 'help',
      color: 'rgba(149, 9, 82, 0.1)',
      icon: require('@/assets/icons/drawer/help-menu.png'),
      param: {},
      locked: false,
    }),
    /* settings */
    (settings = {
      id: '[stack] stack-settings',
      type: 'customer',
      name: 'settings',
      color: 'rgba(241, 81, 255, 0.1)',
      icon: require('@/assets/icons/drawer/setting-menu.png'),
      param: {},
      locked: false,
    }),
  ],
]
