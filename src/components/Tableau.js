/* global tableau */

const Tableau = () => {
    const tableau = window.tableau;

    return {
        init: () => tableau.extensions.initializeAsync(),
        getSettings: () => {
            console.log(tableau.extensions.settings);
        },
        setSetting: (key, value) => tableau.extensions.settings.set(key, value),
        saveSettings: () => tableau.extensions.settings.saveAsync()
    };
};

export default Tableau();
