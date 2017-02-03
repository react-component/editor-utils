import { Entity } from 'draft-js';

export default function findEntities(entityType: string) {
  return function findEntitiesFunc(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        return (
          entityKey !== null &&
          contentState.getEntity(entityKey).getType() === entityType
        );
      },
      callback
    );
  }
}
