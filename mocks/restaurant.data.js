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
      description:
        'Elevate your senses at SavoryArt, where culinary expertise is a canvas and flavors are masterpieces. Discover a fusion of tastes that redefine dining, all within an ambiance of modern charm. Unveil the art of indulgence.',
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
          price: '25.99',
          time: '20min',
          calories: '350cal',
          grams: '100g',
        },
        {
          id: 2,
          label: 'Margherita Pizza',
          image: 'https://bellyfull.net/wp-content/uploads/2016/03/Classic-Margherita-Pizza-blog-2.jpg',
          slug: 'Indulge in the simplicity of our Margherita Pizza. Fresh tomatoes, creamy mozzarella, fragrant basil, and a drizzle of olive oil come together for an authentic Italian experience.',
          price: '14.99',
          time: '18min',
          calories: '400cal',
          grams: '220g',
        },
        {
          id: 3,
          label: 'Vegetarian Pizza',
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg',
          slug: 'Embrace the goodness of nature with our Vegetarian Pizza. Colorful bell peppers, onions, tomatoes, mushrooms, and black olives dance atop a cheese-covered canvas.',
          price: '16.99',
          time: '20min',
          calories: '380cal',
          grams: '230g',
        },
        {
          id: 4,
          label: 'Supreme Pizza',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JINOEsnAFkLOw6so5_RinHmNvEa2ToQKRg&usqp=CAU',
          slug: 'Delight in the abundance of flavors with our Supreme Pizza. A hearty combination of pepperoni, sausage, bell peppers, onions, and olives atop a bed of gooey cheese.',
          price: '17.99',
          time: '22min',
          calories: '520cal',
          grams: '240g',
        },
      ],
    },
  ],

  drinks: [
    {
      id: 1,
      name: 'wine',
      image: 'https://th.bing.com/th/id/OIP.zqe414n-jEbTeKmnnrND0gHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7',
      type: 'alcohol',
    },
    {
      id: 2,
      name: 'coffe',
      image: 'https://th.bing.com/th/id/OIP.HxFfBmqvKsktRmVJcbguBwHaE8?w=243&h=180&c=7&r=0&o=5&pid=1.7',
      type: 'soft',
    },
  ],
}
