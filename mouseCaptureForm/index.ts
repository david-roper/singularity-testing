/* eslint-disable perfectionist/sort-objects */

const { defineInstrument } = await import('/runtime/v1/opendatacapture@1.0.0/core.js');
const { z } = await import('/runtime/v1/zod@3.23.6/index.js');


export default defineInstrument({
  kind: 'FORM',
  language: ['en', 'fr'],
  name: 'Mouse form',
  tags: { en: ['mice', 'neuroscience'], fr: ['souris', 'neuroscience'] },
  version: 1.0,
  content: {
    mouseType: {
      kind: 'string',
      variant: 'select',
      label: {
        en: 'Type of mouse',
        fr: 'Type de souris'
      },
      options: {
        en: {
          0: "M83 hemizygous",
          1: "D-AIP"
        },
        fr: {
          0: "M83 hemizygous",
          1: "D-AIP"
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
    projectName: {
      kind: 'string',
      variant: 'input',
      label: {
        en: 'Project Name',
        fr: "Nom du project"
      }
    }
  },
  details: {
    description: { en: 'A form to track meta data of mouse experiments', fr: 'une form pour suivre les données de la souris' },
    estimatedDuration: 2,
    instructions: {
      en: ['Please complete this form after a completed session'],
      fr: ["Complet se forme après avoir terminé une session s'il vous plaît"]
    },
    license: 'UNLICENSED',
    title: { en: 'Mouse Form', fr: 'Forme du Souris' }
  },

  validationSchema: z.object({
    mouseType: z.string(),
    mouseWeight: z.number(),
    mouseAge: z.number(),
    projectName: z.string()
  }),
  measures: {
    mouseType: {
      kind: "const",
      label: {
        en: "Mouse Type",
        fr: "Type de souris"
      },
      ref: "mouseType"
    },
    mouseWeight: {
      kind: "const",
      label: {
        en: "Mouse weight",
        fr: "Poids de souris"
      },
      ref: "mouseWeight"
    },
    projectName: {
      kind: "const",
      label: {
        en: "Project Name",
        fr: "Nom du Projet"
      },
      ref: "projectName"
    }
  }
});
