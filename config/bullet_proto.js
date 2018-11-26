export default {
  "3000000": {
    "id": "3000000",
    "spinePath": "",
    "hitEffect": "",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3001000": {
    "id": "3001000",
    "spinePath": "",
    "hitEffect": "bullet/CYJ/hit_blsfbd",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [
      {
        "type": "hurt",
        "value": 0,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3001001": {
    "id": "3001001",
    "spinePath": "",
    "hitEffect": "bullet/CYJ/hit_blsfbd",
    "explodeEffectPath": "",
    "groundEffectPath": "bullet/CYJ/hit_blsf",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [
      {
        "type": "hurt",
        "value": 100,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1.5
          }
        ]
      }
    ],
    "buffs": [
      4001000
    ],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "distSorter",
        "bValue": false
      },
      {
        "type": "circle",
        "radius": 200
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": true,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3001002": {
    "id": "3001002",
    "spinePath": "",
    "hitEffect": "",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [
      {
        "type": "propDirty",
        "proId": 6,
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
        "type": "propDirty",
        "proId": 11,
        "prosInfo": [
          {
            "targetType": 1,
            "proId": 10001,
            "scale": 3,
            "step": 3
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 5
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": true,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3002000": {
    "id": "3002000",
    "spinePath": "",
    "hitEffect": "bullet/CYJ/hit_blsfbd",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [
      {
        "type": "hurt",
        "value": 0,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3002001": {
    "id": "3002001",
    "spinePath": "",
    "hitEffect": "",
    "explodeEffectPath": "bullet/LB/hit_mstj02",
    "groundEffectPath": "bullet/LB/hit_mstj01",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [
      {
        "type": "hurt",
        "value": 100,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1.5
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3002002": {
    "id": "3002002",
    "spinePath": "",
    "hitEffect": "",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [],
    "buffs": [
      4002001
    ],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 5
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3003000": {
    "id": "3003000",
    "spinePath": "",
    "hitEffect": "bullet/CYJ/hit_blsfbd",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [
      {
        "type": "hurt",
        "value": 0,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3003001": {
    "id": "3003001",
    "spinePath": "bullet/JK/bullet_hg",
    "hitEffect": "bullet/JK/hit_hgbd",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 200,
      "y": -10
    },
    "effects": [
      {
        "type": "hurt",
        "value": 100,
        "scaleInfo": [
          {
            "targetType": 1,
            "proId": 10001,
            "scale": 10
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3003002": {
    "id": "3003002",
    "spinePath": "",
    "hitEffect": "",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [
      {
        "type": "propDirty",
        "proId": 6,
        "prosInfo": [
          {
            "targetType": 1,
            "proId": 8,
            "scale": 5,
            "step": 1
          }
        ]
      },
      {
        "type": "propDirty",
        "proId": 11,
        "prosInfo": [
          {
            "targetType": 1,
            "proId": 8,
            "scale": 5,
            "step": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 5
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3004000": {
    "id": "3004000",
    "spinePath": "bullet/SSX/fire_ptzd",
    "hitEffect": "bullet/SSX/hit_jjnpbd",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": -40,
      "y": 35
    },
    "effects": [
      {
        "type": "hurt",
        "value": 0,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "event",
      "value": "traceReach"
    },
    "trace": {
      "type": "follow",
      "initHead": {
        "x": 1,
        "y": 2
      },
      "speed": 40
    },
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3004001": {
    "id": "3004001",
    "spinePath": "bullet/SSX/fire_zd",
    "hitEffect": "bullet/SSX/hit_jjnpbd",
    "explodeEffectPath": "bullet/SSX/hit_jjnp01",
    "groundEffectPath": "bullet/SSX/hit_jjnp02",
    "offset": {
      "x": -70,
      "y": 40
    },
    "effects": [
      {
        "type": "hurt",
        "value": 100,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1.5
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "distSorter",
        "bValue": true
      },
      {
        "type": "truncate",
        "value": 1
      }
    ],
    "trigger": {
      "type": "event",
      "value": "traceReach"
    },
    "trace": {
      "type": "follow",
      "initHead": {
        "x": 1,
        "y": 2
      },
      "speed": 40,
      "useRolePos": true
    },
    "explodeSelectors": [
      {
        "type": "circle",
        "radius": 200
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "alive",
        "bValue": true
      }
    ],
    "explodeEffects": [
      {
        "type": "hurt",
        "value": 500
      }
    ],
    "mustHit": true,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3004002": {
    "id": "3004002",
    "spinePath": "",
    "hitEffect": "",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [
      {
        "type": "propDirty",
        "proId": 5,
        "prosInfo": [
          {
            "targetType": 1,
            "proId": 9,
            "scale": 1,
            "step": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 5
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": true,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3005000": {
    "id": "3005000",
    "spinePath": "bullet/ZGL/fire_fq",
    "hitEffect": "bullet/ZGL/hit_yqd",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 80
    },
    "effects": [
      {
        "type": "hurt",
        "value": 0,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "event",
      "value": "traceReach"
    },
    "trace": {
      "type": "follow",
      "initHead": {
        "x": 1,
        "y": 2
      },
      "speed": 40
    },
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3005001": {
    "id": "3005001",
    "spinePath": "bullet/ZGL/bullet_yqd",
    "hitEffect": "bullet/ZGL/hit_yqd",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 320
    },
    "effects": [
      {
        "type": "hurt",
        "value": 100,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1.5
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "event",
      "value": "traceReach"
    },
    "trace": {
      "type": "follow",
      "initHead": {
        "x": 1,
        "y": 2
      },
      "speed": 20
    },
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": true,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3009000": {
    "id": "3009000",
    "spinePath": "bullet/DRJ/fire_llzx",
    "hitEffect": "bullet/DRJ/hit_llzx",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 70
    },
    "effects": [
      {
        "type": "hurt",
        "value": 0,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "event",
      "value": "traceReach"
    },
    "trace": {
      "type": "follow",
      "initHead": {
        "x": 1,
        "y": 2
      },
      "speed": 30
    },
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3009001": {
    "id": "3009001",
    "spinePath": "bullet/DRJ/bullet_llzx",
    "hitEffect": "bullet/DRJ/hit_llzx",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [
      {
        "type": "hurt",
        "value": 100,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1.5
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "distSorter",
        "bValue": true
      },
      {
        "type": "truncate",
        "value": 1
      }
    ],
    "trigger": {
      "type": "horizon",
      "length": 800,
      "speed": 10,
      "isBulletMove": false
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": true,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3010000": {
    "id": "3010000",
    "spinePath": "bullet/DC/fire_lhy",
    "hitEffect": "bullet/DC/hit_lhy",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": -30,
      "y": 70
    },
    "effects": [
      {
        "type": "hurt",
        "value": 0,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "event",
      "value": "traceReach"
    },
    "trace": {
      "type": "follow",
      "initHead": {
        "x": 1,
        "y": 2
      },
      "speed": 30
    },
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3010001": {
    "id": "3010001",
    "spinePath": "bullet/DC/bullet_lhy",
    "hitEffect": "bullet/DC/hit_lhy",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 50,
      "y": 20
    },
    "effects": [
      {
        "type": "hurt",
        "value": 100,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1.5
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "distSorter",
        "bValue": true
      },
      {
        "type": "truncate",
        "value": 1
      }
    ],
    "trigger": {
      "type": "horizon",
      "length": 650,
      "speed": 10,
      "isBulletMove": false
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": true,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3011000": {
    "id": "3011000",
    "spinePath": "",
    "hitEffect": "bullet/ZF/hit_kspx",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [
      {
        "type": "hurt",
        "value": 0,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3011001": {
    "id": "3011001",
    "spinePath": "bullet/ZF/bullet_kspx",
    "hitEffect": "bullet/ZF/hit_kspx",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": -100,
      "y": 100
    },
    "effects": [
      {
        "type": "hurt",
        "value": 100,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1.5
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "distSorter",
        "bValue": false
      },
      {
        "type": "rect",
        "width": 200,
        "height": 300
      }
    ],
    "trigger": {
      "type": "horizon",
      "length": 200,
      "speed": 5,
      "isBulletMove": false
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": true,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3012000": {
    "id": "3012000",
    "spinePath": "",
    "hitEffect": "bullet/GY/hit_qlyybd",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [
      {
        "type": "hurt",
        "value": 0,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3012001": {
    "id": "3012001",
    "spinePath": "bullet/GY/bullet_qlyy",
    "hitEffect": "bullet/GY/hit_qlyybd",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": -130,
      "y": -10
    },
    "effects": [
      {
        "type": "hurt",
        "value": 100,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1.5
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "distSorter",
        "bValue": false
      },
      {
        "type": "rect",
        "width": 1000,
        "height": 300
      }
    ],
    "trigger": {
      "type": "horizon",
      "length": 1200,
      "speed": 40,
      "isBulletMove": false
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": true,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3013000": {
    "id": "3013000",
    "spinePath": "",
    "hitEffect": "bullet/ZY/hit_pyzl",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 0
    },
    "effects": [
      {
        "type": "hurt",
        "value": 0,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3013001": {
    "id": "3013001",
    "spinePath": "bullet/ZY/bullet_pyzl",
    "hitEffect": "bullet/ZY/hit_pyzl",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 30,
      "y": 20
    },
    "effects": [
      {
        "type": "hurt",
        "value": 100,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1.5
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "sector",
        "degree": 45,
        "radius": 800
      }
    ],
    "trigger": {
      "type": "horizon",
      "length": 900,
      "speed": 15,
      "isBulletMove": false
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": true,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3015000": {
    "id": "3015000",
    "spinePath": "bullet/WZJ/fire_dlbj",
    "hitEffect": "bullet/WZJ/hit_dlbjbd",
    "explodeEffectPath": "",
    "groundEffectPath": "",
    "offset": {
      "x": 0,
      "y": 35
    },
    "effects": [
      {
        "type": "hurt",
        "value": 0,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      },
      {
        "type": "truncate",
        "value": 1
      },
      {
        "type": "distSorter",
        "bValue": false
      }
    ],
    "trigger": {
      "type": "instant"
    },
    "trace": {},
    "explodeSelectors": [],
    "explodeEffects": [],
    "mustHit": false,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [],
    "offsetType": 0
  },
  "3015001": {
    "id": "3015001",
    "spinePath": "bullet/WZJ/hit_dlbj01",
    "hitEffect": "bullet/WZJ/hit_dlbjbd",
    "explodeEffectPath": "",
    "groundEffectPath": "bullet/WZJ/hit_dlbj02",
    "offset": {
      "x": 100,
      "y": 0
    },
    "effects": [
      {
        "type": "hurt",
        "value": 100,
        "prosInfo": [
          {
            "targetType": 0,
            "proId": 5,
            "scale": 1.5
          }
        ]
      }
    ],
    "buffs": [],
    "selectors": [
      {
        "type": "alive",
        "bValue": true
      },
      {
        "type": "camp",
        "value": 4
      }
    ],
    "trigger": {
      "type": "event",
      "value": "boom"
    },
    "trace": {},
    "explodeSelectors": [
      {
        "type": "circle",
        "radius": 250
      }
    ],
    "explodeEffects": [
      {
        "type": "hurt",
        "value": 500
      }
    ],
    "mustHit": true,
    "explodeIncludeTargets": [
      false
    ],
    "explodeEvents": [
      "boom"
    ],
    "offsetType": 1
  }
}