import { GlobalTextStyles } from "@/assets/styles/GlobalStyles"
import Icon, { IconType } from "@/components/ui/Icon";
import { ColorProp } from "@/constants/Colors";
import { useThemeColors } from "@/hooks/useThemeColor";
import Ionicons from "@expo/vector-icons/Ionicons"
import { Link } from "expo-router";
import { forwardRef } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"

export type SettingsBoxProps = TouchableOpacityProps & {
    settings: string,
    icon: {
        name: keyof typeof Ionicons.glyphMap,
        color: string
        size?: number,
    } | null
}

const SETTINGS_ICON_SIZE = 26;

export const SettingsBox = forwardRef(function SettingsBox({settings, icon = null, ...others}: SettingsBoxProps, ref: any) {
    const theme_color: ColorProp = useThemeColors();
    
    return (
        <TouchableOpacity
            ref={ref}
            {...others}
            >
            <View
                style={[styles.box, {
                    borderBottomColor: theme_color.text
                }]}
                >
                {
                icon ? <Icon
                    type={IconType.Ionicon}
                    size={SETTINGS_ICON_SIZE}
                    {...icon}
                    color={theme_color.text}
                    style={{
                            width: icon.size ?? SETTINGS_ICON_SIZE,
                            height: icon.size ?? SETTINGS_ICON_SIZE,
                            top: 12,
                            marginLeft: 10,
                            marginRight: 5
                        }}
                /> : <></>
            }

                <Text style={[styles.text, GlobalTextStyles.subtitle, {color: theme_color.text}]}>{settings}</Text>
            </View>

        </TouchableOpacity>

    )
})

const styles = StyleSheet.create(
    {
        box: {
            height: 59,
            marginTop: 12,
            borderBottomColor: '#000',
            borderBottomWidth: 1,
            justifyContent: 'center'
        },
        text: {
            left: 60,
            bottom: 14,
            letterSpacing: -0.41,
        }
    }
)
