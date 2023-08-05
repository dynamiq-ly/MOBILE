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
