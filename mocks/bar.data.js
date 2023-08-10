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
    // Add more bars here...
  ],
}
