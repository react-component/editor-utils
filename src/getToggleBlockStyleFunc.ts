import { EditorState, Modifier } from 'draft-js';
import getSelectedBlock from './getSelectedBlock';

export default function getToggleBlockStyleFunc(callbacks) {
  return function toggleBlockStyle(styleName: string) {
    const { getEditorState, setEditorState } = callbacks;
    const editorState = getEditorState();
    const currentBlock = getSelectedBlock(editorState);
    const blockTypedContent = Modifier.setBlockType(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      styleName
    );

    setEditorState(
      EditorState.push(editorState, blockTypedContent, 'apply-block-type')
    );

  }
}
