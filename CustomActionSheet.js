'use strict';

var React = require('react-native');
var {
  NativeModules,
  processColor,
} = React;

var PressEffect = {
  Fades: NativeModules.CustomActionSheet.FadesOnPress,
  ReversesColors: NativeModules.CustomActionSheet.ReversesColorsOnPress,
  Shrinks: NativeModules.CustomActionSheet.ShrinksOnPress,
  Highlight: NativeModules.CustomActionSheet.HighlightOnPress,
};

class CustomActionSheet {
  constructor() {

  }

  showActionSheetWithOptions(options, callback) {
    let opts = {
      ...{node: 1},
      ...options,
    };

    opts.buttonTextColor = opts.buttonTextColor ? processColor(opts.buttonTextColor) : undefined;
    opts.buttonBackgroundColor = opts.buttonBackgroundColor ? processColor(opts.buttonBackgroundColor) : undefined;

    for (let i in opts.buttons) {
      let btn = opts.buttons[i];
      btn.textColor = btn.textColor ? processColor(btn.textColor) : undefined;
      btn.backgroundColor = btn.backgroundColor ? processColor(btn.backgroundColor) : undefined;
      btn.highlightTextColor = btn.highlightTextColor ? processColor(btn.highlightTextColor) : undefined;
      btn.highlightBackgroundColor = btn.highlightBackgroundColor ? processColor(btn.highlightBackgroundColor) : undefined;
    }

    let cb = callback ? callback : () => {};

    NativeModules.CustomActionSheet.showActionSheetWithOptions(opts, cb);
  }
}

var actionSheet = new CustomActionSheet;
actionSheet.PressEffect = PressEffect;

module.exports = actionSheet;
