// ** Icons Import
import { Circle,  Folder, Shield, MessageSquare, Mail, Sunrise, HelpCircle, Key } from 'react-feather'

export default [
  {
    header: 'Soporte & Ajustes'
  },
  {
    id: 'faq',
    title: 'FAQ',
    icon: <HelpCircle size={12} />,
    permissions: ['admin', 'editor'],
    navLink: '/pages/faq'
  },
  {
    id: 'knowledgeBase',
    title: 'Documentación',
    icon: <Sunrise size={12} />,
    permissions: ['admin', 'editor'],
    navLink: '/pages/knowledge-base',
    parentOf: ['/pages/knowledge-base/category/questions', '/pages/knowledge-base/category']
  },
  {
    id: 'access-control',
    title: 'Access Control',
    icon: <Shield size={12} />,
    action: 'read',
    resource: 'ACL',
    navLink: '/access-control'
  },
  {
    id: 'roles-permissions',
    title: 'Roles & Permissions',
    icon: <Key size={20} />,
    children: [
      {
        id: 'roles',
        title: 'Roles',
        icon: <Circle size={12} />,
        navLink: '/apps/roles'
      },
      {
        id: 'permissions',
        title: 'Permissions',
        icon: <Circle size={12} />,
        navLink: '/apps/permissions'
      }
    ]
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },
  {
    id: 'email',
    title: 'Ticket',
    icon: <Mail size={20} />,
    navLink: '/apps/email'
  },
  // {
  //   id: 'menuLevels',
  //   title: 'Menu Levels',
  //   icon: <Menu size={20} />,
  //   children: [
  //     {
  //       id: 'secondLevel',
  //       title: 'Second Level 2.1',
  //       icon: <Circle size={12} />,
  //       navLink: ''
  //     },
  //     {
  //       id: 'secondLevel1',
  //       title: 'Second Level 2.2',
  //       icon: <Circle size={12} />,
  //       children: [
  //         {
  //           id: 'ThirdLevel',
  //           title: 'Third Level 3.1',
  //           navLink: ''
  //         },
  //         {
  //           id: 'ThirdLevel1',
  //           title: 'Third Level 3.2',
  //           navLink: ''
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'disabledMenu',
  //   title: 'Disabled Menu',
  //   icon: <EyeOff size={20} />,
  //   navLink: '#',
  //   disabled: true
  // },
  {
    id: 'documentation',
    title: 'Documentación',
    icon: <Folder size={20} />,
    externalLink: true,
    newTab: true,
    navLink: 'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation',
    disabled: true
  }
  // {
  //   id: 'raiseSupport',
  //   title: 'Raise Support',
  //   icon: <LifeBuoy size={20} />,
  //   externalLink: true,
  //   newTab: true,
  //   navLink: 'https://pixinvent.ticksy.com/'
  // }
]
