import { EditorState } from 'draft-js';

const inlineStyleCache = {
  editorState: null,
  value: null,
};

export default function getCurrentInlineStyle(editorState: EditorState) {
  if (editorState === inlineStyleCache.editorState) {
    return inlineStyleCache.value;
  }
  inlineStyleCache.editorState = editorState;
  inlineStyleCache.value = editorState.getCurrentInlineStyle();
  return inlineStyleCache.value;
}
