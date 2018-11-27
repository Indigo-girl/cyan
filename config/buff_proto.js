export default {
  "4000000": {
    "id": "4000000",
    "type": "",
    "effects": [],
    "trigger": {},
    "maxTriggerCount": 0,
    "enableUndo": false,
    "duration": 0,
    "overlapCount": 0,
    "overlapType": 0
  },
  "4000001": {
    "id": "4000001",
    "type": "duration",
    "effects": [
      {
        "proId": 6,
        "type": "propScale",
        "scale": 1.2
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "maxTriggerCount": 1,
    "enableUndo": true,
    "duration": 8,
    "overlapCount": 0,
    "overlapType": 0
  },
  "4001000": {
    "id": "4001000",
    "type": "duration",
    "effects": [
      {
        "proId": 5,
        "type": "propScale",
        "scale": 0.8
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "maxTriggerCount": 1,
    "enableUndo": true,
    "duration": 8,
    "overlapCount": 0,
    "overlapType": 0
  },
  "4002000": {
    "id": "4002000",
    "type": "duration",
    "effects": [
      {
        "proId": 6,
        "type": "propScale",
        "scale": 0.85
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "maxTriggerCount": 1,
    "enableUndo": true,
    "duration": 5,
    "overlapCount": 1,
    "overlapType": 1
  },
  "4002001": {
    "id": "4002001",
    "type": "base",
    "effects": [
      {
        "proId": 0,
        "type": "extraHp",
        "prosInfo": [
          {
            "targetType": 1,
            "proId": 1,
            "scale": 0.02,
            "step": 0
          }
        ]
      }
    ],
    "trigger": {
      "type": "event",
      "value": "castNormalSkill"
    },
    "maxTriggerCount": 10000,
    "enableUndo": false,
    "duration": 0,
    "overlapCount": 0,
    "overlapType": 0
  },
  "4004000": {
    "id": "4004000",
    "type": "base",
    "effects": [
      {
        "proId": 6,
        "type": "propDirty",
        "prosInfo": [
          {
            "targetType": 1,
            "proId": 10001,
            "scale": 10,
            "step": 3
          }
        ]
      },
      {
        "proId": 11,
        "type": "propDirty",
        "prosInfo": [
          {
            "targetType": 1,
            "proId": 10001,
            "scale": 10,
            "step": 3
          }
        ]
      }
    ],
    "trigger": {
      "type": "event",
      "value": "onHurt"
    },
    "maxTriggerCount": 1,
    "enableUndo": false,
    "duration": 0,
    "overlapCount": 0,
    "overlapType": 0
  },
  "null": {
    "id": null,
    "type": null,
    "effects": null,
    "trigger": null,
    "maxTriggerCount": null,
    "enableUndo": null,
    "duration": null,
    "overlapCount": null,
    "overlapType": null
  }
}