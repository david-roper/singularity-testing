/* eslint-disable perfectionist/sort-objects */

const { defineInstrument } = await import('/runtime/v1/opendatacapture@1.0.0/core.js');
const { z } = await import('/runtime/v1/zod@3.23.6/index.js');


export default defineInstrument({
  kind: 'FORM',
  language: ['en', 'fr'],
  internal: {
    edition: 1,
    name: 'Mouse Form'
  },
  tags: { en: ['mice', 'neuroscience'], fr: ['souris', 'neuroscience'] },
  content: {
    mouseStrain: {
      kind: 'string',
      variant: 'select',
      label: {
        en: 'Strain',
        fr: 'Type de souris'
      },
      options: {
        en: {
          0: "M83 hemizygous",
          1: "C57",
          2: "Wild Type"
        },
        fr: {
          0: "M83 hemizygous",
          1: "C57",
          2: "Wild Type"
        }
      }
    },
    furColour: {
      kind: 'string',
      variant: 'select',
      label: {
        en: "Fur colour",
        fr: "Couleur de la fourrure"
      },
      options: {
        en: {
          0: "Black",
          1: "Brown",
          2: "White",
          3: "Grey",
          4: "Agouti"
        },
        fr: {
          0: "Noire",
          1: "Brun",
          2: "Blanc",
          3: "Gris",
          4: "Agouti"
        }
      }
    },
    mouseWeight: {
      kind: 'number',
      variant: 'input',
      label: {
        en: 'Weight of mouse (in grams)',
        fr: 'Poids du souris (en grammes)'
      }
    },
    mouseAge: {
      kind: 'number',
      variant: 'input',
      label: {
        en: 'Age of mouse (in weeks)',
        fr: "Âge de la souris (en semaines)"
      }
    },
    mouseSex: {
      kind: 'string',
      variant: 'radio',
      label: {
        en: 'Sex',
        fr: "sexe de la souris"
      },
      options: {
        en: {
          "Male": "Male",
          "Female": "Female"
        },
        fr: {
          "Male": "Mâle",
          "Female": "femelle"
        }
      }
    },
    projectName: {
      kind: 'string',
      variant: 'input',
      label: {
        en: 'Project Name',
        fr: "Nom du project"
      }
    },
    timePointDate: {
      kind: 'date',
      label: {
        en: 'date of session',
        fr: 'date de la session'
      }
    }
  },
  details: {
    description: { en: 'A form to track meta data of mouse experiments', fr: 'une forme pour suivre les données de la souris' },
    estimatedDuration: 2,
    instructions: {
      en: ['Please complete this form after a completed session'],
      fr: ["Complet se forme après avoir terminé une session s'il vous plaît"]
    },
    license: 'UNLICENSED',
    title: { en: 'Mouse Form', fr: 'Forme du Souris' }
  },

  validationSchema: z.object({
    mouseStrain: z.string(),
    furColour: z.string(),
    mouseWeight: z.number().min(1).max(40),
    mouseAge: z.number().min(0).max(160),
    projectName: z.string(),
    mouseSex: z.string(),
    timePointDate: z.date()
  }),
  measures: {
    mouseStrain: {
      kind: "const",
      label: {
        en: "Mouse Type",
        fr: "Type de souris"
      },
      ref: "mouseStrain"
    },
    furColour: { 
      kind: "const",
      label: { 
        en: "Fur Colour",
        fr: "Couleur de la fourrure"
      },
      ref: "furColour"
    },
    mouseWeight: {
      kind: "const",
      label: {
        en: "Mouse weight",
        fr: "Poids de souris"
      },
      ref: "mouseWeight"
    },
    mouseSex: {
      kind: "const",
      label: {
        en: "Mouse gender",
        fr: "Sexe de la souris"
      },
      ref: "mouseSex"
    },
    projectName: {
      kind: "const",
      label: {
        en: "Project Name",
        fr: "Nom du Projet"
      },
      ref: "projectName"
    },
    timePointDate: {
      kind: 'const',
      label: {
        en: 'Time point date',
        fr: 'Date de la session'
      },
      ref: "timePointDate"
    }
  }
});
