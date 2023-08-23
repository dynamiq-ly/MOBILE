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
    {
      id: 3,
      name: 'pina colada',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/11/pina-colada-c68aca7.jpg',
      type: 'cocktail',
    },
    {
      id: 3,
      name: 'juices',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxK2QV1fG8KWdfgjOJ71_neEbObsvB6lFPQ&usqp=CAU',
      type: 'soft',
    },
    {
      id: 4,
      name: 'Tea',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDECiTSc54-8cXJBsShE6rFBgpt7t81LWQg&usqp=CAU',
      type: 'soft',
    },
    {
      id: 5,
      name: 'Energy drink',
      image: 'https://content.fortune.com/wp-content/uploads/2023/08/GettyImages-1237483208-e1692110355827.jpg?resize=1200,600',
      type: 'soft',
    },
    {
      id: 6,
      name: 'Sodas',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-pQPxYjsKDrQsCiFHa0f0np72PrVdEv2Nw&usqp=CAU',
      type: 'soft',
    },
    {
      id: 7,
      name: 'beer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoHjSa1Z0ABOyjpowjMuOIOHrqahz0MP7ABA&usqp=CAU',
      type: 'alcohol',
    },
    {
      id: 8,
      name: 'liquers',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9B8oDjr5tXUw9bz4sUHka1lhok-h6Noxrg&usqp=CAU',
      type: 'alcohol',
    },
    {
      id: 9,
      name: 'mojito',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDrO1KOQkmhrBm2Hk9Me40oKzR3hu4foOyA&usqp=CAU',
      type: 'cocktail',
    },
    {
      id: 10,
      name: 'Blue lagoon',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBcyfKlgNHAbl4xzqSB0jAGFeDacCCaVXi-Q&usqp=CAU',
      type: 'cocktail',
    },
    {
      id: 11,
      name: 'tequila sunrise',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0T4z4d9ZbM0ajhR5HK3f-Yt1WQYfQn1Gdw&usqp=CAU',
      type: 'cocktail',
    },
  ],
}
