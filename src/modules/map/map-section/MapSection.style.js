import { StyleSheet } from 'react-native';
import Layout, { em } from "~/constants/Layout";

export const mapStyles = StyleSheet.create({
  container: {
    position: 'absolute', left: 0, top: 0,
		width: Layout.window.width, height: Layout.window.height,
    zIndex: 5,
    borderWidth: 2, borderColor: '#f00'
  },
  markerOfMine: {
    width: 150, height: 150
  },
  marker: {
    width: 40, height: 40
  }
})