import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  data_nav: [
    {
      title: 'More used',
      nav: [
        {
          name: 'Order',
          rute: '',
          icon: 'fas fa-chevron-right',
          option: '',
          id: '',
          status: true,
          sub_menu: [
            {
              name: 'New order',
              rute: '/newOrder',
              icon: '',
              option: '',
              id: '',
              status: true,
            },
            {
              name: 'List order',
              rute: '/listOrder',
              icon: '',
              option: '',
              id: '',
              status: true,
            },
          ]
        },
        {
          name: 'New Pizza',
          rute: '/newPizza',
          icon: 'fas fa-plus',
          option: '',
          id: '',
          status: true,
          sub_menu: [
            {
              name: 'item 1',
              rute: '/template-1',
              icon: '',
              option: '',
              id: '',
              status: true,
            },
            {
              name: 'item 2',
              rute: '/template-2',
              icon: '',
              option: '',
              id: '',
              status: true,
            },
            {
              name: 'item 3',
              rute: '/template-3',
              icon: '',
              option: '',
              id: '',
              status: true,
            }
          ]
        }
      ]
    },
    {
      title: 'Utils',
      nav: [
        {
          name: 'Ingredient',
          rute: '',
          icon: 'fas fa-chevron-right',
          option: '',
          id: '',
          status: true,
          sub_menu: [
            {
              name: 'Add ingredient',
              rute: '/template-1',
              icon: '',
              option: '',
              id: '',
              status: true,
            },
            {
              name: 'List ingredient',
              rute: '/template-2',
              icon: '',
              option: '',
              id: '',
              status: true,
            },
          ]
        },
      ]
    },
  ]
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
})

export const { increment, decrement } = navSlice.actions

export default navSlice.reducer