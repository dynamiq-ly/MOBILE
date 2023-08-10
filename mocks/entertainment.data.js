export const data = {
  id: '[stack] stack-entertainment',
  image: 'https://kammakshi.com/images/work-3.jpg',
  title: 'Entertainements',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, ullamco laboris commodo consequat...Read More',
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
      image:
        'https://www.dickssportinggoods.com/protips/sports-and-activities/family-fun/top-10-pool-party-must-haves/_jcr_content/root/container/container_2/image.coreimg.jpeg/1667591152305/poolpartyessentials.jpeg',
      title: 'Pool Party',
      description: 'enjoying your time at the pool with our animation programmer',
      duration: '1h',
      time: '10:00 - 11:00',
      location: 'Pool',
      type: 'Family',
      join: true,
      time_table: ['Tuesday, 14 june - 15:00', 'Wednesday, 15 june - 15:00', 'Thursday, 16 june - 15:00'],
    },
  ],
}
