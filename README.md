# react-native-custom-actsheet

flexible custom ActionSheet for react-native.

This modules is wrapper for [IBActionSheet](https://github.com/ianb821/IBActionSheet) , which does all real work.

## Example

```
ActionSheet.showActionSheetWithOptions({
  node: React.findNodeHandle(this.refs['view']), 
  title: 'this is title',
  destructiveButtonTitle: 'Destructive',
  cancelButtonTitle: 'Cancel',
  buttonTextColor: 'yellow',
  buttonBackgroundColor: 'green',
  pressEffect: ActionSheet.PressEffect.Highlight,
  font: {
    fontFamily: 'Bradley Hand',
    fontSize: 14,
    fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
    fontStyle: 'normal' | 'italic' | 'oblique',
  }
  buttons: [
    {title: 'button1', textColor: 'black'},
    {title: 'button2', backgroundColor: 'red'},
    {title: 'button3', highlightTextColor: 'red', highlightBackgroundColor: 'orange'},
  ]
});
```