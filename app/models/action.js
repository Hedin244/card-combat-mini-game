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
  this.type = props.type; // String (possible: Attack, Defence, Utility)

  /*
    Special marks
  */
  this.mods = props.mods; // Object, fields/values, used in methods

  /*
    Fields responsible for an on activate method
  */
  this.onActivate = props.onActivate ? props.onActivate : () => {};
}
