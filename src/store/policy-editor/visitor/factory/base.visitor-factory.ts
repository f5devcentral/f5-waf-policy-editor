import {BaseVisitor} from "../base.visitor";
import {PolicyEditorDispatch} from "../../policy-editor.types";

export abstract class BaseVisitorFactory {
    constructor(protected dispatch: PolicyEditorDispatch, protected json: any) {
    }
    abstract getVisitors() : {titles: string[], visitors: BaseVisitor[]}
}