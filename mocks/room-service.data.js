export const data = {
  id: '[stack] stack-room-service',
  image: 'https://th.bing.com/th/id/R.813851e64070bedf1c3c210b39de19b6?rik=N97j06dl%2bUvOpw&pid=ImgRaw&r=0',
  title: "Room's Services",
  timing: { open: '08:00', close: '22:00' },
  phone: '+62 812 3456 7890',
  location: 'Lobby Floor - Near Receptionist',
  description: 'You will have access to a complete list of services where you can find what you were missing in your room.',
  staff: [
    {
      name: 'John Doe',
      position: 'Room service Manager',
      image: 'https://th.bing.com/th/id/R.813851e64070bedf1c3c210b39de19b6?rik=N97j06dl%2bUvOpw&pid=ImgRaw&r=0',
    },
    {
      name: 'John Doe',
      position: 'Room Service Under Management',
      image: 'https://th.bing.com/th/id/R.813851e64070bedf1c3c210b39de19b6?rik=N97j06dl%2bUvOpw&pid=ImgRaw&r=0',
    },
  ],
  kitchen: [
    { id: '', name: 'Food Menu', image: 'https://fastfoodinusa.com/templates/uploads/userfiles/images/Eating_with_friends.jpg' },
    { id: '', name: 'Drinks Menu', image: 'https://th.bing.com/th/id/OIP.wiOFs5MqGT7j91sJ--83NAHaE7?pid=ImgDet&rs=1' },
    { id: '', name: 'Minibar', image: 'https://th.bing.com/th/id/R.f7959af34535425f150b1bc8f8318a69?rik=Z1WS4sG9DfDF8Q&pid=ImgRaw&r=0' },
  ],

  services: [
    { id: '', name: 'Phone Directory', image: require('@/assets/icons/product/room-service/phone-directory.png') },
    { id: '', name: 'Incidence Report', image: require('@/assets/icons/product/room-service/incidence-report.png') },
    { id: '', name: 'Room Request', image: require('@/assets/icons/product/room-service/room-request.png') },
    { id: '[stack] stack-reception-room-upgrade', name: 'Room Upgrade', image: require('@/assets/icons/product/room-service/room-upgrade.png') },
    { id: '[stack] stack-room-service-pension-upgrade', name: 'Pension Upgrade', image: require('@/assets/icons/product/room-service/pension-upgrade.png') },
    { id: '', name: 'House Keeping', image: require('@/assets/icons/product/room-service/house-keeping.png') },
    { id: '', name: 'Laundry', image: require('@/assets/icons/product/room-service/laundry.png') },
    { id: '', name: 'Towels', image: require('@/assets/icons/product/room-service/towels.png') },
    { id: '', name: 'Television', image: require('@/assets/icons/product/room-service/television.png') },
    { id: '', name: 'Deposit Box', image: require('@/assets/icons/product/room-service/deposit-box.png') },
    { id: '', name: 'Cables', image: require('@/assets/icons/product/room-service/electricity.png') },
    { id: '', name: 'Air Conditioners', image: require('@/assets/icons/product/room-service/air-conditionner.png') },
    { id: '', name: 'Hair Dryer', image: require('@/assets/icons/product/room-service/hair-dryer.png') },
  ],
}

export const pensions = {
  title: 'Pensions',
  subtitle: 'Choose the pension that best suits your needs.',
  image:
    'https://img.freepik.com/free-photo/receptionist-elegant-suit-during-work-hours-with-customer_23-2149714436.jpg?w=1380&t=st=1691233335~exp=1691233935~hmac=66e987a25273f23219c19c680c28eaee879f528a998c16dba9800ec6473fc320',
  pensions: [
    {
      id: 1,
      label: '1 day breakfast',
      condition: null,
      image:
        'https://img.freepik.com/free-photo/man-suit-having-breakfast-kitchen-side-view_176474-3805.jpg?w=900&t=st=1691234643~exp=1691235243~hmac=fe9b13e011fe145da77a25e13a7813deb5f38debee64594a776cd76ab345974a',
      options: [
        { id: 1, label: 'adult price', value: '10€', image: 'https://www.flaticon.com/svg/vstatic/svg/7653/7653263.svg?token=exp=1691236278~hmac=cb34d23058cbddc1a8722dbd79d894d6' },
        { id: 2, label: 'child price', value: '5€', image: 'https://cdn-icons.flaticon.com/svg/7928/7928197.svg?token=exp=1691236335~hmac=a202d42dfad6f22b200a524a1ed0670f' },
      ],
    },
    {
      id: 2,
      label: '1 day half board',
      condition: 'breakfast included',
      image:
        'https://img.freepik.com/free-photo/woman-bathrobe-having-meal-eating-french-fries_176474-3704.jpg?w=900&t=st=1691234667~exp=1691235267~hmac=b1af631dedde918ba9a368400bb14ead2d849d5dc8b291aa4ff183f6d2e39db1',
      options: [{ id: 1, label: 'price', value: '20€', image: 'https://www.flaticon.com/svg/vstatic/svg/7653/7653263.svg?token=exp=1691236278~hmac=cb34d23058cbddc1a8722dbd79d894d6' }],
    },
    {
      id: 3,
      label: 'only accomodation to breakfast',
      condition: 'breakfast included and stay of 3 nights or more',
      image:
        'https://img.freepik.com/free-photo/close-up-woman-having-breakfast_23-2148900575.jpg?w=1380&t=st=1691234684~exp=1691235284~hmac=b7b222737506dcdb6e5c81aab467ad661c745bb3b62a1373684bb9b75b44ba98',
      options: [
        { id: 1, label: 'price', value: '30€', image: 'https://www.flaticon.com/svg/vstatic/svg/7653/7653263.svg?token=exp=1691236278~hmac=cb34d23058cbddc1a8722dbd79d894d6' },
        { id: 2, label: 'payment', value: 'card', image: 'https://cdn-icons.flaticon.com/svg/3916/3916663.svg?token=exp=1691236368~hmac=8d6f974fbef9506a309f47374cb70b72' },
      ],
    },
    {
      id: 4,
      label: '1 day full board',
      condition: 'breakfast and lunch included',
      image: 'https://img.freepik.com/free-photo/conversation-by-breakfast_1098-15746.jpg?w=1380&t=st=1691234701~exp=1691235301~hmac=cff1925b7cb82d9e6acd6017dc965200073b89cb68969fc8d5c59b8fb2bf9f2e',
      options: [{ id: 1, label: 'price', value: '40€', image: 'https://www.flaticon.com/svg/vstatic/svg/7653/7653263.svg?token=exp=1691236278~hmac=cb34d23058cbddc1a8722dbd79d894d6' }],
    },
  ],
}