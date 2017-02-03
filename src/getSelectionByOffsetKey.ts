import { ContentState, SelectionState } from 'draft-js';
import DraftOffsetKeyPath from 'draft-js/lib/DraftOffsetKeyPath';
import getRangesForDraftEntity from 'draft-js/lib/getRangesForDraftEntity';
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';

export default function getSelectionByOffsetKey(contentState: ContentState, offsetKey: DraftOffsetKeyPath): SelectionState {
  const decoded = DraftOffsetKey.decode(offsetKey);
  const blockMap = contentState.getBlockMap();
  const block = blockMap.get(decoded.blockKey);
  const ranges = getRangesForDraftEntity(block, entityKey);
}
