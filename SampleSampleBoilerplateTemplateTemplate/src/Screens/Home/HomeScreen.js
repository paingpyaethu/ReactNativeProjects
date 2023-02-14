import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { changeTheme } from '@/Store/Theme'
import { useDispatch } from 'react-redux'
import Buttons from '@/Theme/components/Buttons'

const HomeScreen = () => {
  const { Layout, Fonts, Gutters, Colors, Common } = useTheme()
  const dispatch = useDispatch()

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }
  return (
    <View
      style={[
        Layout.fill,
        Layout.center,
        { backgroundColor: Colors.background },
      ]}
    >
      <Text style={Fonts.textRegular}>HomeScreen</Text>

      <TouchableOpacity
        style={[Common.button.outlineRounded, Gutters.regularBMargin]}
        onPress={() => onChangeTheme({ darkMode: true })}
      >
        <Text style={Fonts.textRegular}>Dark</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Common.button.outline, Gutters.regularBMargin]}
        onPress={() => onChangeTheme({ darkMode: null })}
      >
        <Text style={Fonts.textRegular}>Light</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
