export const state = () => ({
    showMenu: true,
});

export const mutations = {
    TOGGLE_MENU: (state) => {
        state.showMenu = !state.showMenu;
    }
};
