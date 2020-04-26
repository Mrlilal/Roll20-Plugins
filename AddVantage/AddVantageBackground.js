// Version 2.0.6 Development

function addVantage(type, roll, option, name) {
    const rollType;
    if (type === 'save') {
        const rollType = `roll_${roll}_save`;
        const rollName = `${name} Saving Throw`;
    } else if (type === 'skill') {
        const rollType = `roll_${roll}`;
        const rollName = `${name} Skill Check`;
    }
    const setting = option;

    attemptInjection(rollType, rollName, setting);
}

function Options(name, type, option) {
    this.roll = name.toLowerCase(); // What is used to detect & add icons ("acrobatics").
    this.name = name; // Human readable name ("Acrobatics").
    this.type = type; // Whether it's a save or a skill (because the elements are different on Roll20's side).
    this.option = option; // Options: "advantage", "disadvantage", "none".
}

// Saves
let strength = new Options('Strength', 'save');
let dexterity = new Options('Dexterity', 'save');
let constitution = new Options('Construction', 'save');
let intelligence = new Options('Intelligence', 'save');
let wisdom = new Options('Wisdom', 'save');
let charisma = new Options('Charisma', 'save');

// Skills
let acrobatics = new Options('Acrobatics', 'skill');
let animalhandling = new Options('Animal Handling', 'skill');
animalhandling.roll = 'roll_animal_handling';
let arcana = new Options('Arcana', 'skill');
let athletics = new Options('Athletics', 'skill');
let deception = new Options('Deception', 'skill');
let history = new Options('History', 'skill');
let insight = new Options('Insight', 'skill');
let intimidation = new Options('Intimidation', 'skill');
let investigation = new Options('Investigation', 'skill');
let medicine = new Options('Medicine', 'skill');
let nature = new Options('Nature', 'skill');
let perception = new Options('Perception', 'skill');
let performance = new Options('Performance', 'skill');
let persuasion = new Options('Persuasion', 'skill');
let religion = new Options('Religion', 'skill');
let sleightofhand = new Options('Sleight of Hand', 'skill');
sleightofhand.roll = 'roll_sleight_of_hand';
let stealth = new Options('Stealth', 'skill');
let survival = new Options('Survival', 'skill');
const attemptInjection = (rollType, rollName, setting) => {
    // If the character sheet is not open or found, search again.
    if (!document.getElementById(`AddVantage_${rollType}`)) {
        // If elements are not found, wait and try to find them again.
        if (!document.getElementsByName(rollType)[0]) {
            setTimeout(attemptInjection, injectionInterval, rollType, rollName, setting);

            console.log(`%cAddVantage: Elements not found. Waiting ${injectionInterval / 1000} seconds to attempt injecting again. Please open your character sheet.`, 'color: yellow;');

            return;
        }

        const add_img_tag = document.createElement('IMG'); // Create an image tag.
        const add_img_src = document.createAttribute('SRC'); // Create an attribute for the source of the "advantage" image.
        const add_img_style = document.createAttribute('STYLE'); // Create an attribute for the styling of the image.
        const add_img_id = document.createAttribute('ID'); // Create an attribute for the ID of the image.
        add_img_id.value = `AddVantage_${rollType}`; // Add a value to the now-created ID.

        // Start checking for the settings
        if (setting == 'advantage') {
            add_img_src.value = imageAdvantage; // Add the value of the image source.
            add_img_style.value = imageAdvantageStyling; // Add the value of the styling of the image.
            add_img_tag.setAttributeNode(add_img_src); // Add the image source ('SRC') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_style); // Add the image styling ('STYLE') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_id); // Add the image ID ('ID') to the image tag ('IMG').

            document.getElementsByName(rollType)[0].appendChild(add_img_tag); // Create the whole image tag for the button.

            console.log(`%cAddVantage: The advantage icon for the ${rollName} was successfully added.`, 'color: #32CD32;'); // Log that the icon was added.
        } else if (setting == 'disadvantage') {
            add_img_src.value = imageDisadvantage; // The image that is added (to the 'SRC' attribute).
            add_img_style.value = imageDisadvantageStyling; // The styling that is added (to the 'STYLE' attribute).
            add_img_tag.setAttributeNode(add_img_src); // Add the image source ('SRC') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_style); // Add the image styling ('STYLE') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_id); // Add the image ID ('ID') to the image tag ('IMG').

            document.getElementsByName(rollType)[0].appendChild(add_img_tag); // Create the whole image tag for the button.

            console.log(`%cAddVantage: The disadvantage icon for the ${rollName} was successfully added.`, 'color: #32CD32;'); // Log in the console that the disadvantage icon for Intelligence was added.
        } else if (setting == 'none') {
            console.log(`%cAddVantage: Setting for ${rollName} is "none." Continuing to the next setting.`, 'color: #32CD32;'); // Log in the console that the setting is off for adding an image.
        } else {
            console.log('%c---------------------------------------------', 'color: red;');
            console.log(`%cAddVantage: Setting for ${rollName} is not set properly. Please ensure that all settings are configured properly.`, 'color: red;'); // Log that some settings are not set up properly.
            console.log('%c---------------------------------------------', 'color: red;');
        }
    } else {
        console.log(`%cAddVantage: The icons are already injected. Skipping attempted injection.`, 'color: #32CD32;'); // Log that the icons already exist.
    }
};

// Start all functions.
function startAddVantage() {
    console.log('%cAddVantage: Code initialized, attempting injection.', 'color: #32CD32;'); // Log that the code actually loaded.

    let settings = [];
    settings.push(
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        acrobatics,
        animalhandling,
        arcana,
        athletics,
        deception,
        history,
        insight,
        intimidation,
        medicine,
        nature,
        perception,
        performance,
        persuasion,
        religion,
        sleightofhand,
        stealth,
        survival
    );
    debugger;
    settings.forEach((object) => {
        addVantage(object.type, object.roll, object.option, object.name);
    });
}
