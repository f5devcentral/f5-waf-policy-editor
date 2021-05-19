import {BaseVisitor} from "./base.visitor";
import {GridFieldValue} from "../../../component/policy-editor/controls/grid.field-value.control";

export class BlockingSettingsVisitor extends BaseVisitor {
    getRows(): GridFieldValue[] {
        return [];
    }
}