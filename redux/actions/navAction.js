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
