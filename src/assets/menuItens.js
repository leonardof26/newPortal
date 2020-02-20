const menus = [
  {
    title: 'CCH',
    itens: [
      {
        header: '',
        menus: [
          {
            link: { type: 'link', url: '/cch' },
            title: 'Lançamento de Horas',
          },
          {
            link: { type: 'a', url: '/cch/history' },
            title: 'Lançamento por Histórico',
          },
          {
            link: { type: 'a', url: '/cch/updates/consult' },
            title: 'Consulta Atualizações',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Liberação Apontamento',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Consulta Horas Recurso',
          },
        ],
      },
    ],
  },
  {
    title: 'Menu Foursys',
    itens: [
      {
        header: 'Recursos',
        menus: [
          {
            link: { type: 'a', url: '/menu/resourcelist' },
            title: 'Consulta de Recursos',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Banco de Recursos',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Consulta de Horas Rec.',
          },
        ],
      },
      {
        header: 'Projetos',
        menus: [
          {
            link: { type: 'a', url: '#' },
            title: 'Consulta de Projetos',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Custos Projetos',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Despesas Projetos',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Consulta Propostas',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Posicionamento PPMC',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Consulta Horas Proj.',
          },
        ],
      },
      {
        header: 'Controles',
        menus: [
          {
            link: { type: 'link', url: '/menu/alocationmap' },
            title: 'Mapa de Alocação',
          },
          {
            link: { type: 'link', url: '/menu/pricing' },
            title: 'Precificação',
          },
        ],
      },
      {
        header: 'Sistemas',
        menus: [
          {
            link: { type: 'a', url: '#' },
            title: 'CRM',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'SCC',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Ajuste Gadget',
          },
        ],
      },
    ],
  },
  {
    title: 'Relatórios',
    itens: [
      {
        header: '',
        menus: [
          {
            link: { type: 'a', url: '#' },
            title: 'Projetos',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Projetos Não Posicionados',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Projetos sem Justificativa',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Banco de Horas',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Despesas',
          },
        ],
      },
    ],
  },
  {
    title: 'Cadastros',
    itens: [
      {
        header: '',
        menus: [
          {
            link: { type: 'a', url: '#' },
            title: 'Recursos',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Projetos',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Custos',
          },
          {
            link: { type: 'a', url: '#' },
            title: 'Despesas',
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
