import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data_nav: [
    {
      title: "More used",
      id: 1,
      nav: [
        {
          name: "Order",
          rute: "",
          icon: "fas fa-chevron-right",
          option: "",
          id: 1,
          status: true,
          selected: false,
          sub_menu: [
            {
              name: "New order",
              rute: "/newOrder",
              icon: "",
              option: "",
              id: "",
              status: true,
            },
            {
              name: "List order",
              rute: "/listOrder",
              icon: "",
              option: "",
              id: "",
              status: true,
            },
          ],
        },
        {
          name: "New Pizza",
          rute: "/newPizza",
          icon: "fas fa-plus",
          option: "",
          id: 2,
          status: true,
          selected: false,
          sub_menu: [
            {
              name: "item 1",
              rute: "/template-1",
              icon: "",
              option: "",
              id: "",
              status: true,
            },
            {
              name: "item 2",
              rute: "/template-2",
              icon: "",
              option: "",
              id: "",
              status: true,
            },
            {
              name: "item 3",
              rute: "/template-3",
              icon: "",
              option: "",
              id: "",
              status: true,
            },
          ],
        },
      ],
    },
    {
      title: "Utils",
      id: 2,
      nav: [
        {
          name: "Ingredient",
          rute: "",
          icon: "fas fa-chevron-right",
          option: "",
          id: 1,
          status: true,
          selected: false,
          sub_menu: [
            {
              name: "Add ingredient",
              rute: "/template-1",
              icon: "",
              option: "",
              id: "",
              status: true,
            },
            {
              name: "List ingredient",
              rute: "/template-2",
              icon: "",
              option: "",
              id: "",
              status: true,
            },
          ],
        },
      ],
    },
  ],
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    selectMenu: (state, action) => {
      const nav_select = ( initialState.data_nav[(action.payload.menu_id) - 1]).nav[(action.payload.id) - 1];
      const new_data_nav = { ...initialState.data_nav[(action.payload.menu_id) - 1], nav: [{...nav_select, selected: true}] }
      const data_nav_complete = { ...initialState.data_nav, [(action.payload.menu_id) - 1]: new_data_nav }

      console.log("data_nav_complete", Object.values(data_nav_complete));
      console.log("Origin", initialState.data_nav);
      // @todo pedding procces for select nav  state.data_nav = Object.values(data_nav_complete);
    },
  },
});

export const { selectMenu } = navSlice.actions;

export default navSlice.reducer;
