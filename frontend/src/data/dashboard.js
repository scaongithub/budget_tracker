export const kpis = [
  { id: 'totalIncome', value: 6200, tone: 'warm' },
  { id: 'totalExpenses', value: 4150, tone: 'cool' },
  { id: 'remainingBudget', value: 2050, tone: 'neutral' }
];

export const expenseBreakdown = [
  { id: 'groceries', value: 800, fill: '#E94256' },
  { id: 'rent', value: 1500, fill: '#1F3C88' },
  { id: 'transport', value: 320, fill: '#F7B538' },
  { id: 'dining', value: 450, fill: '#2FA36B' },
  { id: 'culture', value: 280, fill: '#C56A1A' }
];

export const incomeStreams = [
  { id: 'paolaStudio', paola: 2400, carlo: 400 },
  { id: 'carloConsultancy', paola: 600, carlo: 2600 },
  { id: 'sharedRentals', paola: 300, carlo: 600 }
];

export const transactions = [
  {
    id: 1,
    name: 'mercadoGroceries',
    person: 'Paola',
    amount: -120,
    date: '2024-05-12',
    tone: 'mexico'
  },
  {
    id: 2,
    name: 'florenceMetro',
    person: 'Carlo',
    amount: -45,
    date: '2024-05-10',
    tone: 'italy'
  },
  {
    id: 3,
    name: 'weddingPhotography',
    person: 'Paola',
    amount: 650,
    date: '2024-05-08',
    tone: 'mexico'
  },
  {
    id: 4,
    name: 'espressoPopup',
    person: 'Carlo',
    amount: 380,
    date: '2024-05-06',
    tone: 'italy'
  },
  {
    id: 5,
    name: 'artSupplies',
    person: 'Paola',
    amount: -85,
    date: '2024-05-03',
    tone: 'mexico'
  },
  {
    id: 6,
    name: 'consultingRetainer',
    person: 'Carlo',
    amount: 900,
    date: '2024-05-01',
    tone: 'italy'
  }
];

export const spotlightItems = [
  { id: 'paola', accent: 'mexico' },
  { id: 'carlo', accent: 'italy' }
];
