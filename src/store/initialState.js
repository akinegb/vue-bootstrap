module.exports = {
  state: {
    auth: {
      authToken: null
    },
    user: {
    },
    cases: [
      {
        id: "897281",
        name: "Adobe Creative Suite"
      }
    ],
    form: {
      sections: {
        basics: [
          {
            type: "text",
            name: "name",
            label: "What is the name of your software?",
            value: ""
          },
          {
            type: "text",
            name: "licence",
            label: "Is the software licence already procured?",
            value: "Probably"
          },
          {
            type: "radio",
            label: "What OS does this software run on?",
            name: "what-os",
            options: [
              {
                label: "MacOSX",
                value: 0
              },
              {
                label: "Windows",
                value: 1
              }

            ]
          },
          {
            type: "select",
            label: "What OS does this software run on?",
            name: "what-os",
            options: [
              {
                label: "Windows",
                value: 0
              },
              {
                label: "MacOSX",
                value: 0
              },
              {
                label: "Unix",
                value: 1
              },
              {
                label: "Redhat",
                value: 0
              },
              {
                label: "Ubuntu",
                value: 0
              }

            ]
          },
          {
            id: 5,
            type: "checkbox",
            label: "What are te regions you intend to deploy to?",
            name: "what-os",
            options: [
              {
                label: "Europe",
                value: 0
              },
              {
                label: "North America",
                value: 0
              },
              {
                label: "South America",
                value: 1
              },
              {
                label: "West Africa",
                value: 1
              },
              {
                label: "Asia",
                value: 1
              }
            ]
          },
          {
            type: "textarea",
            name: "name",
            label: "Describe in short what this software is used for?",
            value: "blah blah blah..."
          }
        ],
        initial: [],
        custom: []
      },
      currentProgress: {
        section: "",
        step: 1
      }
    },
    notifications: {},
    validations: {}
  }
}
