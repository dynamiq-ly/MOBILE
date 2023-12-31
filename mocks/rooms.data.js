export const data = {
  id: '[stack] stack-rooms',
  banner: [{ image: 'https://th.bing.com/th/id/R.945e552b58c25f526ad089bc493d4516?rik=a%2fkc7xY2IsDveQ&pid=ImgRaw&r=0' }],
  description: 'Have the sweetest summer dream & a perfect stay at our hotel rooms & suits.',

  categories: [
    { id: 1, label: 'Deluxe' },
    { id: 2, label: 'Superior' },
    { id: 3, label: 'Standard' },
    { id: 4, label: 'Family' },
    { id: 5, label: 'Suite' },
  ],

  rooms: [
    {
      id: 1,
      slug: 'Family Marbel Oversaw',
      type: 'Family',
      price: 150,
      description:
        'These standard hotel rooms are anything but basic. Boasting all of the standard amenities, including Rock Spa® bath amenities, 42" flat-screen televisions and iPod docking stations, these rooms are clad in cool.',
      virtual: null,

      room_floor: 1,
      room_number: 2,

      roomFaetures: [
        { id: 1, label: '2 Adults', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/8890/8890970.png' },
        { id: 2, label: 'Free Wifi', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/159/159599.png' },
        { id: 3, label: 'Non-smoking', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/75/75343.png' },
        { id: 4, label: '33 m2', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/1295/1295109.png' },
        { id: 5, label: 'Balcony', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/10629/10629373.png' },
        { id: 6, label: 'One King Size Bed', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/1775/1775188.png' },
      ],

      room_config: {
        room_booking: false,
        room_upgrade_price: 42,
        room_upgrade_description: '',
      },

      images: [
        { id: 1, image: 'https://th.bing.com/th/id/R.3cedb59a044738c37910d6a4bbc51d42?rik=yU56JRRGH22iQQ&pid=ImgRaw&r=0' },
        { id: 2, image: 'https://th.bing.com/th/id/R.edfe73063dbfc77446f066276442b4b3?rik=UwHaQBle7xj5bQ&pid=ImgRaw&r=0' },
        { id: 3, image: 'https://th.bing.com/th/id/R.945e552b58c25f526ad089bc493d4516?rik=a%2fkc7xY2IsDveQ&pid=ImgRaw&r=0' },
      ],

      otherFeautures: [
        {
          id: 1,
          label: 'private bathroom',
          description: 'Private bathroom with shower, hairdryer, and free toiletries',
          keys: 'toilet,hair dryer,shower,free toiletries,toilet paper',
        },
        {
          id: 2,
          label: 'view',
          description: 'balcony with city views',
          keys: 'landmark view,view,city,landmark',
        },
      ],
    },
    {
      id: 2,
      slug: 'Deluxe Blue Ivy',
      type: 'Deluxe',
      price: 150,
      description:
        'These standard hotel rooms are anything but basic. Boasting all of the standard amenities, including Rock Spa® bath amenities, 42" flat-screen televisions and iPod docking stations, these rooms are clad in cool.',

      virtual: 'link',

      room_floor: 1,
      room_number: 2,

      roomFaetures: [
        { id: 1, label: '2 Adults', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/8890/8890970.png' },
        { id: 2, label: 'Free Wifi', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/159/159599.png' },
        { id: 3, label: 'Non-smoking', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/75/75343.png' },
        { id: 4, label: '33 m2', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/1295/1295109.png' },
        { id: 5, label: 'Balcony', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/10629/10629373.png' },
        { id: 6, label: 'One King Size Bed', featured: true, image: 'https://cdn-icons-png.flaticon.com/512/1775/1775188.png' },
        { id: 7, label: 'Robes and Slippers', featured: false, image: '' },
        { id: 8, label: 'Wake-up Service', featured: false, image: '' },
        { id: 9, label: 'Air Condition', featured: false, image: '' },
        { id: 10, label: 'Jacuzzi/Hot Tub', featured: false, image: '' },
        { id: 11, label: 'private bathroom', featured: false, image: '' },
      ],

      room_config: {
        room_booking: true,
        room_upgrade_price: 42,
        room_upgrade_description: '',
      },

      images: [
        { id: 1, image: 'https://th.bing.com/th/id/R.3cedb59a044738c37910d6a4bbc51d42?rik=yU56JRRGH22iQQ&pid=ImgRaw&r=0' },
        { id: 2, image: 'https://th.bing.com/th/id/R.945e552b58c25f526ad089bc493d4516?rik=a%2fkc7xY2IsDveQ&pid=ImgRaw&r=0' },
        { id: 3, image: 'https://th.bing.com/th/id/R.edfe73063dbfc77446f066276442b4b3?rik=UwHaQBle7xj5bQ&pid=ImgRaw&r=0' },
      ],

      otherFeautures: [
        {
          id: 1,
          label: 'private bathroom',
          description: 'Private bathroom with shower, hairdryer, and free toiletries',
          keys: 'toilet,hair dryer,shower,free toiletries,toilet paper',
        },
        {
          id: 2,
          label: 'view',
          description: 'balcony with city views',
          keys: 'landmark view,view,city,landmark',
        },
      ],
    },
  ],
}
