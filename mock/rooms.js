export const rooms = [
  {
    id: 0,
    room_name: 'delux blue ivy cost effective right now room for 1 person',
    room_price: 280,
    room_category: 'room',
    room_status: true,
    room_description:
      'These standard hotel rooms are anything but basic. Boasting all of the standard amenities, including Rock Spa® bath amenities, 42" flat-screen televisions and iPod docking stations, these rooms are clad in cool, relaxing tones with unexpected Reptile contrasts and Chromoterapy,',
    room_price_promotion: 15,
    room_images: [
      {
        image:
          'https://static.readytotrip.com/upload/information_system_24/1/4/2/item_1423732/photo_56343033.jpg',
      },
      {
        image:
          'https://www.cnnpartners.com/site/assets/files/6905/ptt8k_she1483gr_148774_xx.600x400.jpg',
      },
      {
        image:
          'https://static.readytotrip.com/upload/information_system_24/5/7/7/item_577879/photo_56342919.jpg',
      },
    ],

    room_location_floor: 'F2',
    room_location_number: '24',
    room_location_view: 'balcony',
    room_quality_area: 32,
    room_quality_size: 'double',
    room_quality_smoking: false,

    room_occupency: {
      max_occupency: 2,
      max_adult: 2,
      max_children: 1,
      max_guests: 1,
    },

    room_subrooms: [
      {
        subroom_id: 1,
        subroom_type: 'bedroom',
        subroom_bed: '2 small',
        subroom_bath: true,
      },
      {
        subroom_id: 2,
        subroom_type: 'living room',
        subroom_bed: '0',
        subroom_bath: false,
      },
    ],

    room_features: 'wifi,hair dryer,tv,bathtub,king bed',
  },
]
