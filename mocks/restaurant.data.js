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

      menu_a_la_carte: '',

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

  menu: {
    food: [
      {
        id: 1,
        name: 'Pizza',
        type: 'Breakfast',
        image: 'https://dxpulwm6xta2f.cloudfront.net/eyJidWNrZXQiOiJhZGMtZGV2LWltYWdlcy1yZWNpcGVzIiwia2V5IjoicGl6emFfcGVwcGVyb25pLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6ODB9LCJwbmciOnsicXVhbGl0eSI6ODB9LCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19',
        data: [
          {
            id: 1,
            name: 'Pepperoni pizza',
            image: '',
            slug: 'Indulge in pizza perfection with our Classic Pepperoni. Melted mozzarella, zesty tomato sauce, and a hearty serving of pepperoni combine for a satisfying slice of comfort and flavor. Bite into tradition today.',
            price: '25.99',
            time: '20min',
            calories: '350cal',
            grams: '100g',
          },
          {
            id: 2,
            name: 'Margherita Pizza',
            slug: 'Indulge in the simplicity of our Margherita Pizza. Fresh tomatoes, creamy mozzarella, fragrant basil, and a drizzle of olive oil come together for an authentic Italian experience.',
            price: '14.99',
            time: '18min',
            calories: '400cal',
            grams: '220g',
          },
          {
            id: 3,
            name: 'Vegetarian Pizza',
            slug: 'Embrace the goodness of nature with our Vegetarian Pizza. Colorful bell peppers, onions, tomatoes, mushrooms, and black olives dance atop a cheese-covered canvas.',
            price: '16.99',
            time: '20min',
            calories: '380cal',
            grams: '230g',
          },
          {
            id: 4,
            name: 'Supreme Pizza',
            slug: 'Delight in the abundance of flavors with our Supreme Pizza. A hearty combination of pepperoni, sausage, bell peppers, onions, and olives atop a bed of gooey cheese.',
            price: '17.99',
            time: '22min',
            calories: '520cal',
            grams: '240g',
          },
        ],
      },
      {
        id: 2,
        name: 'Burger',
        type: 'Lunch',
        image: 'https://static.wixstatic.com/media/e79818_9de4daf6a6d14c31a2f8ba3af331c85b~mv2.jpg/v1/crop/x_0,y_795,w_5548,h_3957/fill/w_602,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/V%C3%A9g%C3%A9tarien.jpg',
        data: [
          {
            id: 1,
            name: 'Classic Cheeseburger',
            slug: 'Experience the perfect blend of flavors in our Classic Cheeseburger. Juicy beef patty, melted cheese, fresh lettuce, and tangy pickles, all embraced by a soft bun. A timeless favorite that never disappoints.',
            price: '12.99',
            time: '15min',
            calories: '450cal',
            grams: '200g',
          },
          {
            id: 2,
            name: 'Veggie Burger',
            slug: 'Embrace the goodness of nature with our Veggie Burger. A garden-fresh patty made from a blend of wholesome vegetables, topped with crisp lettuce, tomatoes, and our special vegan sauce.',
            price: '10.99',
            time: '18min',
            calories: '320cal',
            grams: '180g',
          },
        ],
      },
      {
        id: 3,
        name: 'Pasta',
        type: 'Dinner',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1P0bqGfYWIkiYXCJKBS-mODO4VwAHVz18gw&usqp=CAU',
        data: [
          {
            id: 1,
            name: 'Spaghetti Carbonara',
            slug: 'Delight in the creamy richness of our Spaghetti Carbonara. Al dente pasta, crispy bacon, egg yolk, and Parmesan cheese come together in a harmonious symphony of flavors.',
            price: '15.99',
            time: '25min',
            calories: '550cal',
            grams: '250g',
          },
          {
            id: 2,
            name: 'Mushroom Risotto',
            slug: 'Indulge in the earthy delight of our Mushroom Risotto. Arborio rice cooked to perfection with sautéed mushrooms, white wine, and a touch of Parmesan, creating a velvety masterpiece.',
            price: '14.99',
            time: '30min',
            calories: '480cal',
            grams: '220g',
          },
        ],
      },
    ],
    desert: [],
    drinks: [
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
  },
}
