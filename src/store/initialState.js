module.exports = {
  state: {
    auth: {
      authToken: null
    },
    user: {},
    questions: [
      {
        id: 1,
        type: "text",
        name: "name",
        label: "What is the name of your software?",
      },
      {
        id: 2,
        type: "text",
        name: "location",
        label: "Where would you like to have it deployed?",
      },
      {
        id: 3,
        type: "text",
        name: "licence",
        label: "Is the software licence already procured?",
      },
      {
        id: 4,
        type: "radio",
        label: "What OS does this software run on?",
        name: "what-os",
        options: [
          {
            id: 5,
            label: "MacOSX",
            value: "false"
          },
          {
            id: 6,
            label: "Windows",
            value: "false"
          }

        ]
      },

    ],
    notifications: {},
    validations: {}
  }
}
