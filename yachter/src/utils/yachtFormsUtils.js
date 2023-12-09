import * as formUtils from './formsUtils';

export const validateForm = (form) => {
    let isValid = true;
    const formElements = form.elements;

    let errorMessage = form.dataset?.requiredmessage ? form.dataset?.requiredmessage : 'Field validation failed';

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];

        if (element.type === 'select-one' && element.required && element.value === "Select type *") {
            isValid = false;
            formUtils.setErrorMessage(element.name, errorMessage);
        }

        if (element.required && !element.value) {
            isValid = false;
            formUtils.setErrorMessage(element.name, errorMessage);
        }
    }

    return isValid;
};

export const getEmptyYachtObject = () => {
    return ({
        _ownerId: "",
        name: "",
        year: "",
        people: "",
        cabins: "",
        length: "",
        type: "",
        equipment: {
            airCondition: {
                label: "Air Condition",
                isChecked: false
            },
            autopilot: {
                label: "Autopilot",
                isChecked: false
            },
            divingEquipment: {
                label: "Diving Equipment",
                isChecked: false
            },
            gameConsole: {
                label: "Game Console",
                isChecked: false
            },
            heating: {
                label: "Heating",
                isChecked: false
            },
            radar: {
                label: "Radar",
                isChecked: false
            },
            iceMaker: {
                label: "Ice Maker",
                isChecked: false
            },
            refrigerator: {
                label: "Refrigerator",
                isChecked: false
            },
        },
        images: [],
        description: "",
        _createdOn: "",
    });
};

export const getEmptyYachtObjectWithAuthor = () => {
    return ({
        author: {
            companyName: "",
            companyDescription: "",
        },
        _ownerId: "",
        name: "",
        year: "",
        people: "",
        cabins: "",
        length: "",
        type: "",
        equipment: {
            airCondition: {
                label: "Air Condition",
                isChecked: false
            },
            autopilot: {
                label: "Autopilot",
                isChecked: false
            },
            divingEquipment: {
                label: "Diving Equipment",
                isChecked: false
            },
            gameConsole: {
                label: "Game Console",
                isChecked: false
            },
            heating: {
                label: "Heating",
                isChecked: false
            },
            radar: {
                label: "Radar",
                isChecked: false
            },
            iceMaker: {
                label: "Ice Maker",
                isChecked: false
            },
            refrigerator: {
                label: "Refrigerator",
                isChecked: false
            },
        },
        images: [],
        description: "",
        _createdOn: "",
    });
};

export const equipmentItemsObjects = {
    airCondition: {
        label: "Air Condition",
        isChecked: false
    },
    autopilot: {
        label: "Autopilot",
        isChecked: false
    },
    divingEquipment: {
        label: "Diving Equipment",
        isChecked: false
    },
    gameConsole: {
        label: "Game Console",
        isChecked: false
    },
    heating: {
        label: "Heating",
        isChecked: false
    },
    radar: {
        label: "Radar",
        isChecked: false
    },
    iceMaker: {
        label: "Ice Maker",
        isChecked: false
    },
    refrigerator: {
        label: "Refrigerator",
        isChecked: false
    },
};

export const yachtTypes = {
    sailingYacht: {
        label: "Sailing yacht",
    },
    catamaran: {
        label: "Catamaran",
    },
    motorBoat: {
        label: "Motor boat",
    },
    motoryacht: {
        label: "Motoryacht",
    },
    gulet: {
        label: "Gulet",
    },
    woodenBoat: {
        label: "Wooden boat",
    },
};