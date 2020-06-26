module.exports = {
    "env": {
        "development": {
            "presets": ["next/babel"]
        },
        "production": {
            "presets": ["next/babel"]
        },
        "test": {
            "presets": [
                ["next/babel", {
                "preset-env": {
                  "targets": {
                    "node": "current"
                  }
                }
              }]
              ]
        }
    },
    "plugins": [
        ["styled-components", { "ssr": true, "displayName": true, "preprocess": false } ],
        [ "inline-react-svg" ]
    ]
}