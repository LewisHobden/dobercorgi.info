export const state = () => ({
    showMenu: true,
    active: "links"
});

export const mutations = {
    TOGGLE_MENU: (state) => {
        state.showMenu = !state.showMenu;
    },
    CHANGE_ACTIVE: (state, active) => {
        state.active = active;
    }
};
