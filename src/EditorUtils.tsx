import * as React from 'react';
import { EditorState, ContentBlock } from 'draft-js';

const inlineStyleCache = {
  editorState: null,
  value: null,
};

const EditorUtils = {
  getCurrentInlineStyle(editorState: EditorState) {
    if (editorState === inlineStyleCache.editorState) {
      return inlineStyleCache.value;
    }
    inlineStyleCache.editorState = editorState;
    inlineStyleCache.value = editorState.getCurrentInlineStyle();
    return inlineStyleCache.value;
  },

  getCurrentEntity(editorState: EditorState) {
    let entity;
    const selection = editorState.getSelection();
    let start = selection.getStartOffset();
    let end = selection.getEndOffset();
    if (start === end && start === 0) {
      end = -1;
    } else if (start === end) {
      start = start - 1;
    }
    const block = EditorUtils.getSelectedBlock(editorState);
    for (let i = start; i < end; i++) {
      const currentEntity = block.getEntityAt(i);
      if (!currentEntity) {
        entity = undefined;
        break;
      }
      if (i === start) {
        entity = currentEntity;
      } else {
        if (entity !== currentEntity) {
          entity = undefined;
          break;
        }
      }
    }
    return entity;
  },
  getSelectedBlock(editorState: EditorState): ContentBlock {
    const currentContent = editorState.getCurrentContent()
    const selection = editorState.getSelection()
    return currentContent.getBlockForKey(selection.getStartKey())
  }
}

export default EditorUtils;
