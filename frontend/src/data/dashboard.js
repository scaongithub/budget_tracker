export const kpis = [
  {
    label: 'Total Income',
    value: '€6,200',
    change: '+8% vs last month',
    tone: 'warm'
  },
  {
    label: 'Total Expenses',
    value: '€4,150',
    change: '-3% vs last month',
    tone: 'cool'
  },
  {
    label: 'Remaining Budget',
    value: '€2,050',
    change: 'Paola 48% / Carlo 52%',
    tone: 'neutral'
  }
];

export const expenseBreakdown = [
  { name: 'Groceries', value: 800, fill: '#E94256' },
  { name: 'Rent', value: 1500, fill: '#1F3C88' },
  { name: 'Transport', value: 320, fill: '#F7B538' },
  { name: 'Dining', value: 450, fill: '#2FA36B' },
  { name: 'Culture', value: 280, fill: '#C56A1A' }
];

export const incomeStreams = [
  { name: 'Paola Art Studio', paola: 2400, carlo: 400 },
  { name: 'Carlo Consultancy', paola: 600, carlo: 2600 },
  { name: 'Shared Rentals', paola: 300, carlo: 600 }
];

export const transactions = [
  { id: 1, label: 'Mercado Roma groceries', amount: '-€120', tag: 'Paola', tone: 'mexico' },
  { id: 2, label: 'Florence metro passes', amount: '-€45', tag: 'Carlo', tone: 'italy' },
  { id: 3, label: 'Wedding photography gig', amount: '+€650', tag: 'Paola', tone: 'mexico' },
  { id: 4, label: 'Espresso bar pop-up', amount: '+€380', tag: 'Carlo', tone: 'italy' }
];

export const spotlightItems = [
  {
    title: "Paola's Spotlight",
    description: 'Prepara enchiladas suizas en casa para ahorrar €25 esta semana.',
    accent: 'mexico'
  },
  {
    title: "Carlo's Spotlight",
    description: 'Usa el abono mensual del tranvía y ahorra €15 en combustible.',
    accent: 'italy'
  }
];
