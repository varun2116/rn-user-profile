import { isNil, round } from 'lodash';
import { StyleSheet, ViewStyle } from 'react-native';
import { IconBackgroundTypes } from '../../../utils/constants';
import {
    FlexAlignItemsType,
    FlexJustifyContentType,
} from '../../../utils/styleTypes';

interface StyleSheet {
    container: ViewStyle;
}
interface Styles {
    width: number;
    height: number;
    alignItems: FlexAlignItemsType;
    justifyContent: FlexJustifyContentType;
    backgroundColor: string;
    borderRadius: number;
    boxShadow: string;
}

export default class IconStyles {
    static getStyles(
        materialDesign: boolean,
        backgroundType: string,
        backgroundSize = 40,
        backgroundColor = '#fff',
    ) {
        let styles: Styles = {
            width: backgroundSize,
            height: backgroundSize,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor,
            borderRadius: 0,
            boxShadow: 'none',
        };
        if (!isNil(backgroundType)) {
            switch (backgroundType) {
                case IconBackgroundTypes.CIRCLE:
                    styles.borderRadius = round(backgroundSize / 2);
                    break;
                case IconBackgroundTypes.BOX:
                    styles.borderRadius = 5;

                default:
                    break;
            }
        }
        if (!isNil(materialDesign) && materialDesign) {
            styles.boxShadow =
                '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)';
        }
        return StyleSheet.create<StyleSheet>({
            container: {
                ...styles,
            },
        });
    }
}
