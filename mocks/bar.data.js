export const data = {
  id: '[stack] stack-bar',
  banner: [],
  description: '',

  bars: [
    {
      id: 1,
      images: [
        { image: 'https://images.pexels.com/photos/34650/pexels-photo.jpg?cs=srgb&dl=restaurant-dark-bar-34650.jpg&fm=jpg' },
        { image: 'https://th.bing.com/th/id/R.48aa87f175370496ba02889b23a55c72?rik=dsps17PViEY8Pw&pid=ImgRaw&r=0' },
      ],
      title: 'Paradise Beach Bar',
      type: 'beach bar',
      location: '123 Oceanfront Avenue, Paradise Beach',
      phone_number: '+1 (555) 123-4567',
      description: 'Enjoy the breathtaking views of the ocean at Paradise Beach Bar, your perfect getaway for relaxation and refreshment.',
      timing: {
        open: '18:00',
        close: '02:00',
      },
      reservation_required: true,
      adults_only: false,

      menu_a_la_carte: 'https://www.thefrontyardla.com/pdf/bar-menu.pdf',

      staff: [
        {
          name: 'Alex Johnson',
          position: 'Bartender',
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
          name: 'Emily Williams',
          position: 'Server',
          image: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
      ],
    },
    {
      id: 2,
      images: [
        { image: 'https://images.pexels.com/photos/106853/pexels-photo-106853.jpeg' },
        { image: 'https://th.bing.com/th/id/R.48aa87f175370496ba02889b23a55c72?rik=dsps17PViEY8Pw&pid=ImgRaw&r=0' },
      ],
      title: 'Sunset Lounge',
      type: 'rooftop bar',
      location: '456 Skyline Avenue, Urban Heights',
      phone_number: '+1 (555) 789-1234',
      description: 'Experience the magic of sunset at Sunset Lounge. Perfect for a romantic evening or a night out with friends.',
      timing: {
        open: '17:00',
        close: '23:00',
      },
      reservation_required: false,
      adults_only: false,

      menu_a_la_carte: null,

      staff: [
        {
          name: 'Michael Clark',
          position: 'Mixologist',
          image: 'https://randomuser.me/api/portraits/men/3.jpg',
        },
        {
          name: 'Sophia Martin',
          position: 'Waitress',
          image: 'https://randomuser.me/api/portraits/women/4.jpg',
        },
      ],
    },
    {
      id: 3,
      images: [
        { image: 'https://images.pexels.com/photos/265074/pexels-photo-265074.jpeg' },
        { image: 'https://th.bing.com/th/id/R.48aa87f175370496ba02889b23a55c72?rik=dsps17PViEY8Pw&pid=ImgRaw&r=0' },
      ],
      title: 'Cozy Corner',
      type: 'neighborhood pub',
      location: '789 Main Street, Downtown',
      phone_number: '+1 (555) 456-7890',
      description: 'Visit Cozy Corner for a relaxed neighborhood pub atmosphere. Great drinks, friendly staff, and live music every Friday.',
      timing: {
        open: '16:00',
        close: '01:00',
      },
      reservation_required: false,
      adults_only: false,

      menu_a_la_carte: null,

      staff: [
        {
          name: 'David Smith',
          position: 'Pub Manager',
          image: 'https://randomuser.me/api/portraits/men/5.jpg',
        },
        {
          name: 'Linda Johnson',
          position: 'Bartender',
          image: 'https://randomuser.me/api/portraits/women/6.jpg',
        },
      ],
    },
    {
      id: 4,
      images: [
        { image: 'https://images.pexels.com/photos/2252286/pexels-photo-2252286.jpeg' },
        { image: 'https://th.bing.com/th/id/R.48aa87f175370496ba02889b23a55c72?rik=dsps17PViEY8Pw&pid=ImgRaw&r=0' },
      ],
      title: 'Jazz & Blues Club',
      type: 'live music venue',
      location: '234 Melody Lane, Jazzville',
      phone_number: '+1 (555) 987-6543',
      description: 'Immerse yourself in the world of jazz and blues at the Jazz & Blues Club. Live performances every weekend.',
      timing: {
        open: '20:00',
        close: '02:00',
      },
      reservation_required: true,
      adults_only: true,

      menu_a_la_carte: 'https://www.thefrontyardla.com/pdf/bar-menu.pdf',

      staff: [
        {
          name: 'Robert Davis',
          position: 'Musician Liaison',
          image: 'https://randomuser.me/api/portraits/men/7.jpg',
        },
        {
          name: 'Emma Brown',
          position: 'Stage Manager',
          image: 'https://randomuser.me/api/portraits/women/8.jpg',
        },
      ],
    },
    {
      id: 5,
      images: [{ image: 'https://images.pexels.com/photos/34102/pexels-photo.jpg' }, { image: 'https://th.bing.com/th/id/R.48aa87f175370496ba02889b23a55c72?rik=dsps17PViEY8Pw&pid=ImgRaw&r=0' }],
      title: 'Lighthouse Lounge',
      type: 'seaside lounge',
      location: '567 Coastal Road, Lighthouse Bay',
      phone_number: '+1 (555) 567-8901',
      description: 'Relax by the seaside at Lighthouse Lounge. Cool breeze, soothing ambiance, and refreshing cocktails.',
      timing: {
        open: '15:00',
        close: '23:00',
      },
      reservation_required: false,
      adults_only: false,

      menu_a_la_carte: null,

      staff: [
        {
          name: 'James Miller',
          position: 'Lounge Manager',
          image: 'https://randomuser.me/api/portraits/men/9.jpg',
        },
        {
          name: 'Olivia Moore',
          position: 'Server',
          image: 'https://randomuser.me/api/portraits/women/10.jpg',
        },
      ],
    },
    {
      id: 6,
      images: [
        { image: 'https://images.pexels.com/photos/3561067/pexels-photo-3561067.jpeg' },
        { image: 'https://th.bing.com/th/id/R.48aa87f175370496ba02889b23a55c72?rik=dsps17PViEY8Pw&pid=ImgRaw&r=0' },
      ],
      title: 'Rustic Barrel',
      type: 'whiskey bar',
      location: '789 Oak Street, Rusticville',
      phone_number: '+1 (555) 678-9012',
      description: 'Discover a wide selection of fine whiskies at Rustic Barrel. Cozy atmosphere, perfect for whiskey enthusiasts.',
      timing: {
        open: '16:00',
        close: '01:00',
      },
      reservation_required: false,
      adults_only: true,

      menu_a_la_carte: null,

      staff: [
        {
          name: 'William Taylor',
          position: 'Whiskey Expert',
          image: 'https://randomuser.me/api/portraits/men/11.jpg',
        },
        {
          name: 'Ava Johnson',
          position: 'Bartender',
          image: 'https://randomuser.me/api/portraits/women/12.jpg',
        },
      ],
    },
    {
      id: 7,
      images: [
        { image: 'https://images.pexels.com/photos/269412/pexels-photo-269412.jpeg' },
        { image: 'https://th.bing.com/th/id/R.48aa87f175370496ba02889b23a55c72?rik=dsps17PViEY8Pw&pid=ImgRaw&r=0' },
      ],
      title: 'Skyview Lounge',
      type: 'high-rise bar',
      location: '101 High Street, Skyline Towers',
      phone_number: '+1 (555) 345-6789',
      description: 'Enjoy breathtaking views of the city at Skyview Lounge. A sophisticated high-rise bar experience.',
      timing: {
        open: '18:00',
        close: '02:00',
      },
      reservation_required: true,
      adults_only: false,

      menu_a_la_carte: 'https://www.thefrontyardla.com/pdf/bar-menu.pdf',

      staff: [
        {
          name: 'Daniel Williams',
          position: 'Head Bartender',
          image: 'https://randomuser.me/api/portraits/men/13.jpg',
        },
        {
          name: 'Isabella Brown',
          position: 'Server',
          image: 'https://randomuser.me/api/portraits/women/14.jpg',
        },
      ],
    },
  ],

  menuDrinks: [
    {
      id: 1,
      name: 'Liqueurs',
      type: 'alcoholic',
      image: 'https://st2.depositphotos.com/1063437/11838/i/600/depositphotos_118389750-stock-photo-bottles-of-assorted-hard-liquor.jpg',
    },
    {
      id: 2,
      name: 'Beers',
      type: 'alcoholic',
      image: 'https://th.bing.com/th/id/OIP.a1qXOmxRAUEnk4TIh-8uqwHaE9?pid=ImgDet&rs=1',
    },
    {
      id: 3,
      name: 'Wines',
      type: 'alcoholic',
      image: 'https://static.onecms.io/wp-content/uploads/sites/9/2020/08/11/best-affordable-foreign-wines-FT-BLOG0820.jpg',
    },
    {
      id: 4,
      name: 'Champagnes',
      type: 'alcoholic',
      image: 'https://imageio.forbes.com/specials-images/imageserve/61b3f114a4cc8e84dbe849a6/2016-LRR-Xmas-Tree/960x0.jpg?format=jpg&width=960',
    },
    {
      id: 5,
      name: 'Sangrias',
      type: 'alcoholic',
      image: 'https://st.depositphotos.com/1692343/4873/i/600/depositphotos_48733519-stock-photo-homemade-delicious-red-sangria.jpg',
    },
    {
      id: 6,
      name: 'Cocktails',
      type: 'alcoholic',
      image: 'https://img.delicious.com.au/F_C2-w6_/w759-h506-cfill/del/2015/11/summer-cocktails-24374-3.jpg',
    },
    {
      id: 7,
      name: 'Cavas',
      type: 'alcoholic',
      image: 'https://vedcdn.imgix.net/images/product/large/cocktail-masterclass-and-threecourse-27163122.jpg?auto=compress,format',
    },
    {
      id: 8,
      name: 'Tapas',
      type: 'alcoholic',
      image: 'https://www.finedininglovers.fr/sites/g/files/xknfdk1291/files/styles/im_landscape_50_fallback/public/2021-07/iStock-1130657473.jpg?itok=mFj3e05G',
    },
    {
      id: 9,
      type: 'soft',
      name: 'Tea',
      image: 'https://th.bing.com/th/id/R.59a6b04d4e7f301473c4b96aa32feabd?rik=WT76szfCOmO5FQ&pid=ImgRaw&r=0',
    },
    {
      id: 10,
      type: 'soft',
      name: 'sodas',
      image: 'https://th.bing.com/th/id/OIP.HuiZ0wKn4fJzdUo9nFpqOQHaFj?pid=ImgDet&rs=1',
    },
    {
      id: 11,
      type: 'soft',
      name: 'juices',
      image: 'https://th.bing.com/th/id/OIP.HsMn8DLA8reVlatfDlB22QHaE7?pid=ImgDet&rs=1',
    },
  ],
}
