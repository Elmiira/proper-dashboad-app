// *** Tenants Table Configuration ***
export const columns = [
  { title: 'Name', field: 'name' },
  { title: 'Surname', field: 'surname' },
  { title: 'Street', field: 'street' },
  { title: 'House Number', field: 'houseNumber', type: 'numeric'  },
  { title: 'LandLord Name', field: 'landLordName' },
  { title: 'deposit (DKK)', field: 'deposit', type: 'numeric' },
  { title: 'rent (DKK)', field: 'rent', type: 'numeric' },
  { title: 'Move-in Price (DKK)', field: 'moveInPrice', type: 'numeric' },
  { title: 'Move-in Date', field: 'moveInDate', type: 'date' },
  {
    title: 'status',
    field: 'status',
    lookup: { vacant: 'vacant', unoccupied: 'Unoccupied' },
  },
  {
    title: 'furnished',
    field: 'furnished',
    lookup: { true: 'yes', false: 'no' },
  },
];

export const options = {
  pageSize: 6,
  pageSizeOptions: [1, 4, 6],
};
