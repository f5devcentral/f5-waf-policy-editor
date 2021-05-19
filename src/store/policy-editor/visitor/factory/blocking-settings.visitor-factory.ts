import {BaseVisitorFactory} from "./base.visitor-factory";
import {BaseVisitor} from "../base.visitor";

export class BlockingSettingsVisitorFactory extends BaseVisitorFactory {
    getVisitors(): { titles: string[]; visitors: BaseVisitor[] } {
        return {
            titles: [] as string[],
            visitors: [] as BaseVisitor[]
        }
    }
}