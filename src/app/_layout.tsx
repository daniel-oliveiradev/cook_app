import { Slot } from "expo-router"

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium
} from "@expo-google-fonts/poppins"

export default function Layout(){
  const [fontsloaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium
  })
  
  if(!fontsloaded){
    return
  }

  return fontsloaded ? <Slot/> : null
}