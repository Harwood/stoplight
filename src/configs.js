// TODO: Clarification on meaning of Position. As with `PartyTime` three of the colors are position `3` and no `2`. In this case the middle light never 
// turns on and bottom changes color. Correct?

const configs = {
  standard: {
    lights: { "red": {"position": 1, "color": "red"}, "yellow": {"position": 2, "color": "yellow"}, "green": {"position": 3, "color": "green"} },
    colors: [ {"colors": ["green"], "duration": 3000}, {"colors": ["yellow"], "duration": 1000}, {"colors": ["red"], "duration": 2000} ],
  },
  Emergency: {
    lights: { "red": {"position": 1, "color": "red"}, "yellow": {"position": 2, "color": "yellow"}, "green": {"position": 3, "color": "green"} },
    colors: [ {"colors": ["red"], "duration": 1000}, {"colors": "off", "duration": 1000} ],
  },
  ProtectedTurn: {
    lights: { "red": {"position": 1, "color": "red"}, "yellow": {"position": 2, "color": "yellow"}, "green": {"position": 3, "color": "green"}, "specialGreen": {"position": 4, "color": "#20F7B2"} },
    colors: [ {"colors": ["red"], "duration": 1000}, {"colors": ["yellow"], "duration": 1000}, {"colors": ["specialGreen"], "duration": 5000} ],
  },
  PartyTime: {
    lights: { "red": {"position": 1, "color": "red"}, "purple": {"position": 3, "color": "purple"}, "green": {"position": 3, "color": "green"}, "orange": {"position": 3, "color": "orange"} },
    colors: [ {"colors": ["red", "orange"], "duration": 500}, {"colors": ["purple", "green"], "duration": 500}, {"colors": ["purple", "orange", "green"], "duration": 500}, {"colors": ["purple", "orange", "green", "red"], "duration": 500} ],
  },
}
export default configs
