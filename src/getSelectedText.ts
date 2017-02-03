import getContentStateFragment from 'draft-js/lib/getContentStateFragment';

export default function getSelectedText(contentState, selectionState) {
  const fragment = getContentStateFragment(contentState, selectionState);
  return fragment.map((block) => block.getText()).join('');
}
