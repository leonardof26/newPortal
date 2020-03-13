const menus = [
  {
    title: 'CCH',
    id: 'cch',
    itens: [
      {
        header: '',
        menus: [
          {
            link: { type: 'link', url: '/cch/historyAppointment' },
            title: 'Horas por Histórico',
          },
        ],
      },
    ],
  },
  {
    title: 'Menu Foursys',
    id: 'menufoursys',
    itens: [
      {
        header: '',
        menus: [
          {
            link: { type: 'link', url: '/menufoursys/pricing' },
            title: 'Precificação',
          },
          {
            link: { type: 'link', url: '/menufoursys/alocation' },
            title: 'Mapa de Alocação',
          },
        ],
      },
    ],
  },
  {
    title: 'Parametrização',
    id: 'parametrizacao',
    itens: [
      {
        header: '',
        menus: [
          {
            link: { type: 'link', url: '/parametrizacao/monthlyhours' },
            title: 'Quantidade Horas Mês',
          },
          {
            link: { type: 'link', url: '/parametrizacao/perfilvenda' },
            title: 'Perfis de Venda',
          },
          {
            link: { type: 'link', url: '/parametrizacao/roles' },
            title: 'Cargos',
          },
          {
            link: { type: 'link', url: '/parametrizacao/technology' },
            title: 'Tecnologias',
          },
        ],
      },
    ],
  },
]

export { menus }
