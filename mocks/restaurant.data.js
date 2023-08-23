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
      type: 'Tunisian',
      title: 'Chakira Restaurant',
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
      adults_only: true,

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

      speciality: [
        { id: 1, label: 'Tunisian', main: true },
        { id: 2, label: 'Sea Food', main: false },
        { id: 3, label: 'turkish', main: false },
      ],

      menu: {
        food: [
          { id: 1, label: 'breakfast' },
          { id: 2, label: 'lunch' },
          { id: 3, label: 'dinner' },
        ],
        dessert: [],
        drinks: [
          { id: 1, label: 'soft' },
          { id: 2, label: 'alcohol' },
          { id: 3, label: 'cocktail' },
        ],
      },
    },
  ],
  dessert: [
    {
      id: 1,
      name: 'Salad',
      image: 'https://th.bing.com/th/id/OIP.2LT7l2oEDjsqW_SCNg4UEQHaFE?pid=ImgDet&rs=1',
      type: null,
    },
    {
      id: 2,
      name: 'Cheese Cake',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_8IBP4yjHSVkQwR_VHGm_Sgf9XE-NseHmw&usqp=CAU',
      type: null,
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOWYxjln19rhbPsDcnjlfPSsHv08Q70qMVg&usqp=CAU',
      type: null,
    },
    {
      id: 4,
      name: 'Ice Cream',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNeaHD7ahRyDTKUPZ34rUh2vvjqOCbq4PQQ&usqp=CAU',
      type: null,
    },
  ],

  food: [
    {
      id: 1,
      name: 'bacon',
      image: 'https://th.bing.com/th/id/OIP.VJI0TnJcf09wFdjp4V6sdAHaFj?pid=ImgDet&rs=1',
      type: 'breakfast',
    },
    {
      id: 2,
      name: 'pizza',
      image: 'https://th.bing.com/th/id/OIP.UGHF0Am9aenF1uI3H1Y1swHaE8?pid=ImgDet&rs=1',
      type: 'lunch',
      data: [
        {
          id: 1,
          label: 'Pepperoni pizza',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98U5YiGT4SF00HVYqRhvH9FwiTxtwVN794Q&usqp=CAU',
          slug: 'Indulge in pizza perfection with our Classic Pepperoni. Melted mozzarella, zesty tomato sauce, and a hearty serving of pepperoni combine for a satisfying slice of comfort and flavor. Bite into tradition today.',
          price: '25.99$',
          time: '20min',
          calories: '350cal',
          grams: '100g',
          category: 'vegan',
          ingredients: [
            { id: 1, label: 'Pepperoni', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/4162/4162111.png' },
            { id: 2, label: 'Mozzarella', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/5725/5725060.png' },
            { id: 3, label: 'Basil', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/4713/4713978.png' },
            { id: 3, label: 'Olive oil', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/604/604823.png' },
          ],
        },
        {
          id: 2,
          label: 'Margherita Pizza',
          image: 'https://bellyfull.net/wp-content/uploads/2016/03/Classic-Margherita-Pizza-blog-2.jpg',
          slug: 'Indulge in the simplicity of our Margherita Pizza. Fresh tomatoes, creamy mozzarella, fragrant basil, and a drizzle of olive oil come together for an authentic Italian experience.',
          price: '14.99$',
          time: '18min',
          calories: '400cal',
          grams: '220g',
          category: 'vegan',
        },
        {
          id: 3,
          label: 'Vegetarian Pizza',
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg',
          slug: 'Embrace the goodness of nature with our Vegetarian Pizza. Colorful bell peppers, onions, tomatoes, mushrooms, and black olives dance atop a cheese-covered canvas.',
          price: '16.99$',
          time: '20min',
          calories: '380cal',
          grams: '230g',
          category: 'vegan',
        },
        {
          id: 4,
          label: 'Supreme Pizza',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JINOEsnAFkLOw6so5_RinHmNvEa2ToQKRg&usqp=CAU',
          slug: 'Delight in the abundance of flavors with our Supreme Pizza. A hearty combination of pepperoni, sausage, bell peppers, onions, and olives atop a bed of gooey cheese.',
          price: '17.99$',
          time: '22min',
          calories: '520cal',
          grams: '240g',
          category: 'vegan',
        },
      ],
    },
  ],

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
      image: 'https://th.bing.com/th/id/R.d8a017ab37cd3ac6487ddbb19eca5c19?rik=PPO7i5LSO4tGQA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1693731%2fthumbs%2fo-COFFEE-facebook.jpg&ehk=nvkpwuOAx8SLKUsqbH6vzMH6bFK698GeuIWpyKb%2fUzk%3d&risl=&pid=ImgRaw&r=0',
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
