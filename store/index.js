export const state = () => ({
    showMenu: true,
    active: "Guides"
});

export const mutations = {
    TOGGLE_MENU: (state) => {
        state.showMenu = !state.showMenu;
    },
    CHANGE_ACTIVE: (state, active) => {
        state.active = active;
    }
};
