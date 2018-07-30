export default function Card(props) {
  /*
    Fields that don't affect mechanics
  */
  this.name = props.name;
  this.description = props.description;

  /*
    Special marks on a card
  */
  this.keyWords = props.keyWords ? props.keyWords : []; // Array, example key words: melee, ranged, talent, legs, rightHand, etc.
  this.type = { skill: false, equipment: false, power: false }; // String or array of strings (possible: skill, equipment, power)
  if(props.type.constructor === Array) {
    props.type.map(type => {
      this.type[type] = true;
    })
  } else {
    this.type[props.type] = true;
  }

  /*
    Special marks
  */
  this.costs = props.costs ? props.costs : {}; // Object, example: stamina, and anything from hunter.resources
  this.mods = props.mods; // Object, fields/values, used in methods

  /*
    Fields responsible for putting actions into action Queue
  */
  this.actionPutter = props.actionPutter; // Boolean
  this.actions = props.actions; // Object with actions

  /*
    Fields responsible for on draw method
  */
  this.onDrawActive = props.onDrawActive; // Boolean
  this.onDraw = props.onDraw ? props.onDraw : () => {}; // Function

  /*
    Fields responsible for on discard method
  */
  this.onDiscardActive = props.onDiscardActive; // Boolean
  this.onDiscard = props.onDiscard ? props.onDiscard : () => {}; // Function

  /*
    Fields responsible for on play method
  */
  this.onPlay = props.onPlay ? props.onPlay : () => {}; // Function
}
