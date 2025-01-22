import { ActivityIndicator } from "react-native";
import { Box } from "@components/Box/Box";
import { useTheme } from "@shopify/restyle";
import { ThemeProps } from "@theme/theme";

export function Loading(){

    const {colors} = useTheme<ThemeProps>();

    return(
        <Box flex={1} bg="GRAY_6" justifyContent="center" alignItems="center">
            <ActivityIndicator color={colors.GREEN_MID} size={25}/> 
        </Box>
    )
}