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
      categories: ['vodka', 'tequila', 'whiskey', 'rum', 'gin'],
      data: [
        {
          id: 1,
          name: 'Sky All Passion Fruit',
          image: 'https://www.supermercato24.it/asset/smhd/00bd1/a79cb/d409a/2794381681640486912_img.jpg',
          slug: 'SKYY Infusions Passionfruit Vodka 70 cl, 37.5% ABV - Premium Passionfruit Infused Vodka',
          price: 75.99,
          category: 'vodka',
          type: 'bottle',
        },
        {
          id: 2,
          name: 'Poliakov',
          image: 'https://th.bing.com/th/id/OIP.u8WLXX-rxaxpcUriRIWevQHaHa?pid=ImgDet&rs=1',
          slug: 'Vodka Poliakov Premium 20 CL from Spain',
          price: 75.99,
          category: 'vodka',
          type: 'bottle',
        },
        {
          id: 2,
          name: '100 anos',
          image: 'https://bodegasalianza.vteximg.com.br/arquivos/ids/158195-1000-1000/19088-1.jpg?v=636167417322570000',
          slug: 'Vodka Poliakov Premium 20 CL from Spain',
          price: 75.99,
          category: 'tequila',
          type: 'bottle',
        },
      ],
    },
    {
      id: 2,
      name: 'Beers',
      type: 'alcoholic',
      image: 'https://th.bing.com/th/id/OIP.a1qXOmxRAUEnk4TIh-8uqwHaE9?pid=ImgDet&rs=1',
      categories: ['ale', 'bitter', 'root'],
      data: [],
    },
    {
      id: 3,
      name: 'Wines',
      type: 'alcoholic',
      image: 'https://static.onecms.io/wp-content/uploads/sites/9/2020/08/11/best-affordable-foreign-wines-FT-BLOG0820.jpg',
      categories: ['red wine', 'white wine', 'rose wine'],
      data: [
        {
          id: 1,
          name: 'Classic Pinot',
          image: 'https://th.bing.com/th/id/R.7303d0c6e48bb0bdae0b574ecd5ef23b?rik=zacfOKBKqv%2bUOg&pid=ImgRaw&r=0',
          slug: 'Tunisia, 2020',
          price: 75.99,
          category: 'red wine',
          type: 'bottle',
        },
        {
          id: 2,
          name: 'vieux magnifique',
          image:
            'https://th.bing.com/th/id/R.7d2bcc47b3c0b21cd32aebaefabd0acc?rik=7awPoXiaEJf5dQ&riu=http%3a%2f%2fneferis.com%2fwp-content%2fuploads%2f2020%2f09%2fVIEUX-MAGNIFIQUE.jpg&ehk=BhtC1t5jT2kjqIhgYR3GifJq1xeoM6PTqPJGxmFY7g0%3d&risl=&pid=ImgRaw&r=0',
          slug: 'Classic original tunisian from jbal jloud since 2016',
          price: 75.99,
          category: 'red wine',
          type: 'bottle',
        },
      ],
    },
    {
      id: 4,
      name: 'Champagnes',
      type: 'alcoholic',
      image: 'https://imageio.forbes.com/specials-images/imageserve/61b3f114a4cc8e84dbe849a6/2016-LRR-Xmas-Tree/960x0.jpg?format=jpg&width=960',
      categories: [],
      data: [],
    },

    {
      id: 6,
      name: 'Cocktails',
      type: 'alcoholic',
      image: 'https://img.delicious.com.au/F_C2-w6_/w759-h506-cfill/del/2015/11/summer-cocktails-24374-3.jpg',
      categories: ['alcoholic', 'non-alcoholic'],
      data: [
        {
          id: 1,
          name: 'Negroni',
          image: 'https://th.bing.com/th/id/R.0199eda94bc85d719654a4852fdfad34?rik=i%2bAgsO9VyFuUMQ&pid=ImgRaw&r=0',
          slug: 'this drink is Italian and is generally sipped while eating marinated olives. ',
          price: 15.99,
          category: 'alcoholic',
          type: 'glass',
        },
        {
          id: 2,
          name: 'Aperol Spritz',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/41b35d55202591.597a64585e318.jpg',
          slug: 'Aperol spritz is a gloriously refreshing cocktail that I discovered in Berlin on a tour of Eastern European cities',
          price: 15.99,
          category: 'non-alcoholic',
          type: 'glass',
        },
      ],
    },
    {
      id: 7,
      name: 'Cavas',
      type: 'alcoholic',
      image: 'https://vedcdn.imgix.net/images/product/large/cocktail-masterclass-and-threecourse-27163122.jpg?auto=compress,format',
      categories: [],
      data: [],
    },
    {
      id: 8,
      name: 'Tapas',
      type: 'alcoholic',
      image: 'https://www.finedininglovers.fr/sites/g/files/xknfdk1291/files/styles/im_landscape_50_fallback/public/2021-07/iStock-1130657473.jpg?itok=mFj3e05G',
      categories: [],
      data: [],
    },
    {
      id: 9,
      type: 'soft',
      name: 'Coffee',
      image:
        'https://th.bing.com/th/id/R.d8a017ab37cd3ac6487ddbb19eca5c19?rik=PPO7i5LSO4tGQA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1693731%2fthumbs%2fo-COFFEE-facebook.jpg&ehk=nvkpwuOAx8SLKUsqbH6vzMH6bFK698GeuIWpyKb%2fUzk%3d&risl=&pid=ImgRaw&r=0',
      categories: [],
      data: [
        {
          name: 'Espresso',
          price: 2.5,
          ingredients: ['Finely ground coffee beans', 'Hot water'],
        },
        {
          name: 'Cappuccino',
          price: 3.5,
          ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
        },
        {
          name: 'Latte',
          price: 4.0,
          ingredients: ['Espresso', 'Steamed milk'],
        },
        {
          name: 'Americano',
          price: 3.0,
          ingredients: ['Espresso', 'Hot water'],
        },
        {
          name: 'Mocha',
          price: 4.5,
          ingredients: ['Espresso', 'Steamed milk', 'Chocolate syrup', 'Whipped cream'],
        },
      ],
    },
    {
      id: 10,
      type: 'soft',
      name: 'Tea',
      image: 'https://th.bing.com/th/id/R.59a6b04d4e7f301473c4b96aa32feabd?rik=WT76szfCOmO5FQ&pid=ImgRaw&r=0',
      categories: [],
      data: [
        {
          name: 'Black Tea',
          price: 2.0,
          ingredients: ['Tea leaves', 'Hot water'],
        },
        {
          name: 'Green Tea',
          price: 2.5,
          ingredients: ['Green tea leaves', 'Hot water'],
        },
        // Add more tea variations here
      ],
    },
    {
      id: 11,
      type: 'soft',
      name: 'Sodas',
      image: 'https://th.bing.com/th/id/OIP.HuiZ0wKn4fJzdUo9nFpqOQHaFj?pid=ImgDet&rs=1',
      categories: [],
      data: [
        {
          name: 'Cola',
          price: 2.0,
          ingredients: ['Carbonated water', 'Caramel color', 'Phosphoric acid', 'Natural flavors'],
        },
        {
          name: 'Lemon-Lime',
          price: 2.0,
          ingredients: ['Carbonated water', 'Lemon and lime flavors', 'Sugar'],
        },
        // Add more soda variations here
      ],
    },
    {
      id: 12,
      type: 'soft',
      name: 'Juices',
      image: 'https://th.bing.com/th/id/OIP.HsMn8DLA8reVlatfDlB22QHaE7?pid=ImgDet&rs=1',
      categories: [],
      data: [
        {
          name: 'Orange Juice',
          price: 2.5,
          ingredients: ['Freshly squeezed oranges'],
        },
        {
          name: 'Apple Juice',
          price: 2.5,
          ingredients: ['Freshly pressed apples'],
        },
        // Add more juice variations here
      ],
    },
  ],
}
