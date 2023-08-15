export const data = {
  id: '[stack] stack-restaurant',
  banner: [],
  description: '',

  restaurants: [
    {
      id: 1,
      images: [
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuLtCRZg6jPT3eDKyYB2UF6eVaQ7zQSj869-6jXxlkZ51Tvri8EiEmq-BtEhM6NtiZ9M&usqp=CAU' },
        { image: 'https://cdn.sortiraparis.com/images/80/100789/834023-too-restaurant-too-hotel-paris-photos-menu.jpg' },
      ],
      title: 'Chakira Restaurant',
      type: 'Tunisian',
      location: '123 Oceanfront Avenue, Paradise Beach',
      phone_number: '+1 (555) 123-4567',
      description: 'Elevate your senses at SavoryArt, where culinary expertise is a canvas and flavors are masterpieces. Discover a fusion of tastes that redefine dining, all within an ambiance of modern charm. Unveil the art of indulgence.',
      timing: {
        open: '09:00',
        close: '22:00',
      },
      time_table: ['Breakfast,08:00 - 11:00', 'Lunch,12:00 - 15:30', 'Dinner,18:00 - 23:00'],
      weekly_theme: ['Monday,Tunisian', 'Tuesday,Italian', 'Wednesdays,All round', 'Thursday,Fish', 'Friday,Sea food', 'Saturday,Tropicals', 'Sunday,Italian'],
      dress_code: 'Dress Properly, a dress for the women and a suit for a man.',
      reservation_required: true,
      adults_only: false,

      menu_a_la_carte: 'https://www.thefrontyardla.com/pdf/bar-menu.pdf',

      chefs: [
        {
          name: 'Alex Johnson',
          position: 'Executive Chef',
          image: 'https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg',
        },
        {
          name: 'Emily Williams',
          position: 'Sous Chef',
          image: 'https://www.escoffier.edu/wp-content/uploads/2016/02/Smiling-female-chef-with-white-hat-and-uniform-in-a-kitchen-e1611773135718.jpg',
        },
      ],
    },
    {
      id: 2,
      images: [
        { image: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyuxB5LYhvLavr71kT2jCGW7z4vP0GELSxvB_fQXCQOm-VDLXQp-WQbivwd3-yQdg_7g&usqp=CAU' },
      ],
      title: 'Miams Restaurant',
      type: 'Italian',
      location: '456 Skyline Avenue, Urban Heights',
      phone_number: '+1 (555) 789-1234',
      description: 'Elevate your senses at SavoryArt, where culinary expertise is a canvas and flavors are masterpieces. Discover a fusion of tastes that redefine dining, all within an ambiance of modern charm. Unveil the art of indulgence.',
      timing: {
        open: '17:00',
        close: '23:00',
      },
      time_table: ['Breakfast, 08:00 - 11:00', 'Lunch,  12:00 - 15:30', 'Dinner,  18:00 - 23:00'],
      weekly_theme: ['Monday,Tunisian', 'Tuesday,Italian', 'Wednesdays,All round', 'Thursday,Fish', 'Friday,Sea food', 'Saturday,Tropicals', 'Sunday,Italian'],
      dress_code: 'Dress Properly, a dress for the women and a suit for a man.',
      reservation_required: false,
      adults_only: true,

      menu_a_la_carte: null,

      chefs: [
        {
          name: 'Michael Clark',
          position: 'Executive Chef',
          image: 'https://static.cordonbleu.edu/Files/MediaFile/79299.jpg',
        },
        {
          name: 'Sophia Martin',
          position: 'Sous Chef',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCMftILp6caR4_C_skPlHECf-sLR6EX34bQ&usqp=CAU',
        },
      ],
    },
    {
      id: 3,
      images: [{ image: 'https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/images/Tak2-CMSTemplate_sqGSCzb.width-1500.jpg' }, { image: 'https://adamarhotel.com/wp-content/uploads/2022/12/2TH08806.jpg' }],
      title: 'Plan B',
      type: 'Fast food',
      location: '789 Main Street, Downtown',
      phone_number: '+1 (555) 456-7890',
      description: 'Elevate your senses at SavoryArt, where culinary expertise is a canvas and flavors are masterpieces. Discover a fusion of tastes that redefine dining, all within an ambiance of modern charm. Unveil the art of indulgence.',
      timing: {
        open: '12:00',
        close: '22:00',
      },
      time_table: ['Breakfast, 08:00 - 11:00', 'Lunch,  12:00 - 15:30', 'Dinner,  18:00 - 23:00'],
      weekly_theme: ['Monday,Tunisian', 'Tuesday,Italian', 'Wednesdays,All round', 'Thursday,Fish', 'Friday,Sea food', 'Saturday,Tropicals', 'Sunday,Italian'],
      dress_code: 'Dress Properly, a dress for the women and a suit for a man.',
      reservation_required: false,
      adults_only: false,

      menu_a_la_carte: null,

      chefs: [
        {
          name: 'David Smith',
          position: 'Executive Chef',
          image: 'https://static.cordonbleu.edu/Files/MediaFile/79299.jpg',
        },
        {
          name: 'Linda Johnson',
          position: 'Sous Chef',
          image: 'https://images.squarespace-cdn.com/content/6314a2dcf6b5811cc39fb908/1666191779086-EJCU9KPHUQR10E81GDT9/chef+pam+main+home_.png?format=1500w&content-type=image%2Fpng',
        },
      ],
    },
    {
      id: 4,
      images: [
        { image: 'https://decor.design/wp-content/uploads/2023/01/restaurant-moonhouse-feuille-dewert.jpg' },
        { image: 'https://images.adsttc.com/media/images/63bd/752b/7af0/cb01/70b5/bba4/medium_jpg/moonhouse-restaurant-ewert-leaf_4.jpg?1673360712' },
      ],
      title: 'Crunchy base',
      type: 'Fast Food',
      location: '234 Melody Lane, Jazzville',
      phone_number: '+1 (555) 987-6543',
      description: 'Elevate your senses at SavoryArt, where culinary expertise is a canvas and flavors are masterpieces. Discover a fusion of tastes that redefine dining, all within an ambiance of modern charm. Unveil the art of indulgence.',
      timing: {
        open: '10:00',
        close: '18:00',
      },
      time_table: ['Breakfast, 08:00 - 11:00', 'Lunch,  12:00 - 15:30', 'Dinner,  18:00 - 23:00'],
      weekly_theme: ['Monday,Tunisian', 'Tuesday,Italian', 'Wednesdays,All round', 'Thursday,Fish', 'Friday,Sea food', 'Saturday,Tropicals', 'Sunday,Italian'],
      dress_code: 'Dress Properly, a dress for the women and a suit for a man.',
      reservation_required: true,
      adults_only: true,

      menu_a_la_carte: 'https://www.thefrontyardla.com/pdf/bar-menu.pdf',

      chefs: [
        {
          name: 'Robert Davis',
          position: 'Executive Chef',
          image: 'https://static.cordonbleu.edu/Files/MediaFile/79299.jpg',
        },
        {
          name: 'Emma Brown',
          position: 'Sous Chef',
          image: 'https://culinarylabschool.com/wp-content/uploads/2019/06/Pros-and-cons-to-working-in-culinary-arts-CulinaryLab-School.jpg',
        },
      ],
    },
  ],

  restaurantFeatures: [
    { id: 1, label: 'Tunisian' },
    { id: 2, label: 'Italian' },
    { id: 3, label: 'Sea food' },
  ],
}
