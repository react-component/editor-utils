import { EditorState, ContentState } from 'draft-js';

declare module 'draft-js' {

  interface EditorState {
    set(editorState: any, put: any): EditorState;
  }
  interface CompositeDecorator {
    new(decorators : Array<any>): CompositeDecorator;
  }
  interface EntityInstance {
    getType(): string;
  }
  interface Entity {
    get(key: string): EntityInstance;
  }
  interface BlockMap {
    map(args : any) : any;
  }
  interface EditorProps {
    keyBindingFn(args?: any): any;
  }

  interface KeyBindingUtil {
    call(args:any):any;
    hasCommandModifier(args: any): any;
  }

  interface RichUtils {
    toggleInlineStyle(editorState: EditorState, styleName: string): ContentState;
  }

  var KeyBindingUtil: KeyBindingUtil;
  function getDefaultKeyBinding (args: any): boolean;
}

declare module 'rc-select' {
  interface Option {

  }
}
