// ** Icons Import
import { Sun, Clipboard,  FilePlus, FileMinus, FileText, Users } from 'react-feather'

export default [  
  {
    header: 'Colaboradores'
  },
  {
    id: 'listadp-dtBasic',
    title: 'Listado',
    icon: <Users size={12} />,
    navLink: '/apps/user/list'
  },
  {
    id: 'cpd-tablesReactstrap',
    title: 'CPD',
    icon: <Clipboard size={20} />,
    navLink: '/tables/reactstrap'
  },
  {
    id: 'ca-tablesReactstrap',
    title: 'Contratos Activos',
    icon: <FileText size={20} />,
    navLink: '/'
  },
  {
    id: 'altas-tablesReactstrap',
    title: 'Altas de Contrato',
    icon: <FilePlus size={20} />,
    navLink: '/'
  },
  {
    id: 'bajas-tablesReactstrap',
    title: 'Bajas de Contrato',
    icon: <FileMinus size={20} />,
    navLink: '/'
  },
  {
    id: 'vaca-tablesReactstrap',
    title: 'Vacaciones',
    icon: <Sun size={20} />,
    navLink: '/'
  }
  // {
  //   id: 'todo',
  //   title: 'Todo',
  //   icon: <CheckSquare size={20} />,
  //   navLink: '/apps/todo'
  // },
  // {
  //   id: 'calendar',
  //   title: 'Calendar',
  //   icon: <Calendar size={20} />,
  //   navLink: '/apps/calendar'
  // },
  // {
  //   id: 'kanban',
  //   title: 'Kanban',
  //   icon: <CheckSquare size={20} />,
  //   navLink: '/apps/kanban'
  // },
  // {
  //   id: 'invoiceApp',
  //   title: 'Invoice',
  //   icon: <FileText size={20} />,
  //   children: [
  //     {
  //       id: 'invoiceList',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/list'
  //     },
  //     {
  //       id: 'invoicePreview',
  //       title: 'Preview',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/preview'
  //     },
  //     {
  //       id: 'invoiceEdit',
  //       title: 'Edit',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/edit'
  //     },
  //     {
  //       id: 'invoiceAdd',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/add'
  //     }
  //   ]
  // },
  // {
  //   id: 'eCommerce',
  //   title: 'eCommerce',
  //   icon: <ShoppingCart size={20} />,
  //   children: [
  //     {
  //       id: 'shop',
  //       title: 'Shop',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/shop'
  //     },
  //     {
  //       id: 'detail',
  //       title: 'Details',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/product-detail'
  //     },
  //     {
  //       id: 'wishList',
  //       title: 'Wish List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/wishlist'
  //     },
  //     {
  //       id: 'checkout',
  //       title: 'Checkout',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/checkout'
  //     }
  //   ]
  // },
  // {
  //   id: 'users',
  //   title: 'User',
  //   icon: <User size={20} />,
  //   children: [
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/user/list'
  //     },
  //     {
  //       id: 'view',
  //       title: 'View',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/user/view'
  //     }
  //   ]
  // }
]
