export default function Action(props) {
  /*
    Fields that don't affect mechanics
  */
  this.name = props.name;
  this.description = props.description;

  /*
    Special marks on an action
  */
  this.keyWords = props.keyWords ? props.keyWords : []; // Array, example key words: Melee, Ranged, Legs, RightHand, etc.
  this.type = { Attack: false, Defence: false, Utility: false }; // String or array of strings (possible: Attack, Defence, Utility)
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
  this.mods = props.mods; // Object, fields/values, used in methods

  /*
    Fields responsible for an on activate method
  */
  this.onActivate = props.onActivate ? props.onActivate : () => {};
}
