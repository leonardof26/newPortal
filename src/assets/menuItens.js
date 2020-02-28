const menus = [
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
