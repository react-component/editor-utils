import { RichUtils } from 'draft-js';

export default function getToggleStyleFunc(callbacks) {
  return function toggleStyle(styleName: string) {
    const {getEditorState, setEditorState} = callbacks;
    const editorState = getEditorState();
    const selection = editorState.getSelection();
    setEditorState(RichUtils.toggleInlineStyle(
      getEditorState(),
      styleName
    ));
  }
}
