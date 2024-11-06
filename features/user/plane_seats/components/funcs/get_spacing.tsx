import { Spacing } from "../struct/PlaneMap";

export default function get_spacing(
    index: number,
    custom_spacing: Spacing[],
    default_spacing: number
): number {
    for (let i = 0; i < custom_spacing.length; i++) {
        if (custom_spacing[i].index === index) {
            return custom_spacing[i].spacing;
        }
    }
    return default_spacing;
}