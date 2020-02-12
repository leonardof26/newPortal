const menus = [
  {
    title: 'Menu Foursys',
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
    itens: [
      {
        header: '',
        menus: [
          {
            link: { type: 'a', url: '#' },
            title: 'Perfis de Acesso',
          },
          {
            link: { type: 'link', url: '/parametrizacao/monthlyhours' },
            title: 'Quantidade Horas Mês',
          },
          {
            link: { type: 'link', url: '/parametrizacao/perfilvenda' },
            title: 'Perfis de Venda',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Cargos',
          },
        ],
      },
    ],
  },
]

export { menus }
