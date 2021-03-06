const newRequest = [
  {
    id: 1,
    customerName: 'Mustafa Mukadam',
    requestDate: '14th March, 10:00-11:30',
    profileUri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
    sparePart: 'LG-Machine Spare',
    saleType: 'NEW-SALE',
    requestStatus: 'View Order',
  },
  {
    id: 1,
    customerName: 'Sherlock Holmes',
    requestDate: '14th March, 10:00-11:30',
    profileUri: 'https://api.adorable.io/avatars/285/evil.png',
    sparePart: 'Washing Machine',
    saleType: '-AMC',
    requestStatus: 'View Order',
  },
  {
    id: 3,
    customerName: 'Prem Jose',
    requestDate: '17th Feb, 12:00-14:30',
    profileUri: 'https://api.adorable.io/avatars/285/westeros.png',
    sparePart: 'Mixer',
    saleType: 'NEW-SALE',
    requestStatus: 'View Order',
  },
];

const upcomingRequest = [
  {
    id: 4,
    customerName: 'Yusuf Kalol',
    requestDate: '14th March, 10:00-11:30',
    profileUri: 'https://api.adorable.io/avatars/285/peace.png',
    sparePart: 'LG-Machine Spare',
    saleType: 'NEW-SALE',
    requestStatus: 'Accepted',
  },
  {
    id: 5,
    customerName: 'Murtaza',
    requestDate: '14th March, 10:00-11:30',
    profileUri: 'https://api.adorable.io/avatars/285/kiwi.png',
    sparePart: 'Sony Spare',
    saleType: '-AMC',
    requestStatus: 'Accepted',
  },
  {
    id: 3,
    customerName: 'Prem Jose',
    requestDate: '17th Feb, 12:00-14:30',
    profileUri: 'https://api.adorable.io/avatars/285/aquaman.png',
    sparePart: 'Broken Heart',
    saleType: 'NEW-SALE',
    requestStatus: 'Accepted',
  },
  {
    id: 3,
    customerName: 'Prem Jose',
    requestDate: '17th Feb, 12:00-14:30',
    profileUri: 'https://api.adorable.io/avatars/285/drstrange.png',
    sparePart: 'Mobile screen',
    saleType: '-AMC',
    requestStatus: 'Accepted',
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newRequest,
  upcomingRequest,
};
