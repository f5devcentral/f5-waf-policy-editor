import {GridFieldValue} from "../../../component/policy-editor/controls/grid.field-value.control";
import {PolicyEditorDispatch} from "../policy-editor.types";

export abstract class BaseVisitor {
    constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    }
    abstract getRows(): GridFieldValue[] ;
}