import { EditorState, ContentBlock } from 'draft-js';

export default function getSelectedBlock(editorState: EditorState): ContentBlock {
  const currentContent = editorState.getCurrentContent()
  const selection = editorState.getSelection()
  return currentContent.getBlockForKey(selection.getStartKey())
}
