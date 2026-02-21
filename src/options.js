import yaml from 'js-yaml';
import { computed } from 'vue';
import {
    PERSON
} from './assets/data.yml';


// Called by templates to decrease redundancy
function getVueOptions () {
    const person = yaml.load(PERSON);

    const contactLinks = computed(() => {
        const links = {};

        if(person.contact.github) {
            links.github = `https://github.com/${person.contact.github}`;
        }

        if(person.contact.codefights) {
            links.codefights = `https://codefights.com/profile/${person.contact.codefights}`;
        }

        if(person.contact.medium) {
            links.medium = `https://medium.com/@${person.contact.medium}`;
        }

        if(person.contact.email) {
            links.email = `mailto:${person.contact.email}`;
        }

        if(person.contact.linkedin) {
            links.linkedin = `https://linkedin.com/in/${person.contact.linkedin}`;
        }

        if(person.contact.phone) {
            links.phone = `tel:${person.contact.phone}`;
        }

        return links;
    });

    return { person, contactLinks };
}

export {
    getVueOptions
};
