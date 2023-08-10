export const data = {
  id: '[stack] stack-entertainment',
  image: 'https://kammakshi.com/images/work-3.jpg',
  title: 'Entertainements',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, ullamco laboris commodo consequat...Read More',
  staff: [
    {
      name: 'John Doe',
      position: 'Entertainment Department Supervisor',
      image: 'https://th.bing.com/th/id/R.813851e64070bedf1c3c210b39de19b6?rik=N97j06dl%2bUvOpw&pid=ImgRaw&r=0',
    },
    {
      name: 'John Doe',
      position: 'Entertainer',
      image: 'https://th.bing.com/th/id/R.813851e64070bedf1c3c210b39de19b6?rik=N97j06dl%2bUvOpw&pid=ImgRaw&r=0',
    },
  ],

  activities: [
    {
      id: '[stack] stack-entertainement-day-activities',
      name: 'DAY ACTIVITIES',
      image: 'https://www.rivierahoteltunisie.com/application/files/2014/4761/0093/AnimationsJour-Riviera.jpg',
    },
    {
      id: '[stack] stack-entertainement-night-activities',
      name: 'NIGHT SHOWS',
      image: 'https://www.alvadonna.com/images/alva-donna-exclusive/entertainment/nightly-activities_02.jpg',
    },
    {
      id: '[stack] stack-entertainement-sport-program',
      name: 'SPORT PROGRAMS',
      image: 'https://media.istockphoto.com/id/637332546/photo/multi-sports-players-in-action-collage-on-grand-arena.jpg?s=612x612&w=0&k=20&c=CcmS244gEmzzqCYq2LmTDrbaduz5JXX-aAT8K8qPCzw=',
    },
    {
      id: '[stack] stack-entertainement-event-program',
      name: 'EVENT PROGRAMS',
      image: 'https://www.sait.ca/assets/images/sait/programs/pr-htm-event-management-600x400.jpg',
    },
  ],

  config: [
    {
      id: 1,
      label: 'mini club regulations',
      description: 'Mini club regulations description',
      icon: require('@/assets/icons/product/monocrome/regulation-light.png'),
    },
    {
      id: 2,
      label: 'help',
      description: 'Help description',
      icon: require('@/assets/icons/product/monocrome/warning-light.png'),
    },
  ],

  day_activities_categories: [
    { id: 1, label: 'Adult' },
    { id: 2, label: 'Teen' },
    { id: 3, label: 'Family' },
    { id: 4, label: 'Kids' },
  ],

  day_activities: [
    {
      id: 1,
      image: 'https://www.dickssportinggoods.com/protips/sports-and-activities/family-fun/top-10-pool-party-must-haves/_jcr_content/root/container/container_2/image.coreimg.jpeg/1667591152305/poolpartyessentials.jpeg',
      title: 'Pool Party',
      description: 'enjoying your time at the pool with our animation programmer',
      duration: '1h',
      time: '10:00 - 11:00',
      location: 'Pool',
      type: 'Family',
      join: true,
      time_table: ['Tuesday, 14 june - 15:00', 'Wednesday, 15 june - 15:00', 'Thursday, 16 june - 15:00'],
    },
    {
      id: 2,
      image: 'https://cdn.britannica.com/94/125794-050-FB09B3F4/Hikers-Gore-Range-Mountains-Denver.jpg',
      title: 'Hiking Adventure',
      description: 'Embark on an exciting hiking adventure with our experienced guides. Explore breathtaking trails and enjoy the beauty of nature.',
      duration: '3h',
      time: '09:00 - 12:00',
      location: 'Trailhead',
      type: 'Adult',
      join: true,
      time_table: ['Saturday, 20 August - 09:00', 'Sunday, 21 August - 09:00', 'Monday, 22 August - 09:00'],
    },
    {
      id: 3,
      image: 'https://woodstockschoolofart.org/wp-content/uploads/2022/12/PXL_20221108_193644346-scaled.jpg',
      title: 'Art Workshop',
      description: 'Unleash your creativity in our interactive art workshop. Learn new techniques and create your own masterpiece with the guidance of professional artists.',
      duration: '2h',
      time: '14:00 - 16:00',
      location: 'Art Studio',
      type: 'Teen',
      join: true,
      time_table: ['Friday, 26 August - 14:00', 'Saturday, 27 August - 14:00', 'Sunday, 28 August - 14:00'],
    },
    {
      id: 4,
      image: 'https://oppq.qc.ca/wp-content/uploads/Yoga-portrait-des-avantages.jpg',
      title: 'Yoga Retreat',
      description: 'Relax and rejuvenate your body and mind in our serene yoga retreat. Experience calming yoga sessions and meditation amidst a tranquil setting.',
      duration: '1.5h',
      time: '16:30 - 18:00',
      location: 'Yoga Pavilion',
      type: 'Adult',
      join: true,
      time_table: ['Wednesday, 10 August - 16:30', 'Thursday, 11 August - 16:30', 'Friday, 12 August - 16:30'],
    },
  ],
}
