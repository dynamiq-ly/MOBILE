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
    { name: 'Food Menu', image: 'https://fastfoodinusa.com/templates/uploads/userfiles/images/Eating_with_friends.jpg' },
    { name: 'Drinks Menu', image: 'https://th.bing.com/th/id/OIP.wiOFs5MqGT7j91sJ--83NAHaE7?pid=ImgDet&rs=1' },
    { name: 'Minibar', image: 'https://th.bing.com/th/id/R.f7959af34535425f150b1bc8f8318a69?rik=Z1WS4sG9DfDF8Q&pid=ImgRaw&r=0' },
  ],

  services: [
    { name: 'Phone Directory', image: require('@/assets/icons/product/room-service/phone-directory.png') },
    { name: 'Incidence Report', image: require('@/assets/icons/product/room-service/incidence-report.png') },
    { name: 'Room Request', image: require('@/assets/icons/product/room-service/room-request.png') },
    { name: 'Room Upgrade', image: require('@/assets/icons/product/room-service/room-upgrade.png') },
    { name: 'House Keeping', image: require('@/assets/icons/product/room-service/house-keeping.png') },
    { name: 'Laundry', image: require('@/assets/icons/product/room-service/laundry.png') },
    { name: 'Towels', image: require('@/assets/icons/product/room-service/towels.png') },
    { name: 'Television', image: require('@/assets/icons/product/room-service/television.png') },
    { name: 'Deposit Box', image: require('@/assets/icons/product/room-service/deposit-box.png') },
    { name: 'Cables', image: require('@/assets/icons/product/room-service/electricity.png') },
    { name: 'Air Conditioners', image: require('@/assets/icons/product/room-service/air-conditionner.png') },
    { name: 'Hair Dryer', image: require('@/assets/icons/product/room-service/hair-dryer.png') },
  ],
}
