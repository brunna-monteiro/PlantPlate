import { StyleSheet, Pressable, View, Text, Platform } from "react-native"

const CategoryGridTile = ({title, color, onPress}) => {

  return (
    <View style={styles.gridContainer}>
        <Pressable 
        style={ ({pressed}) => 
        [styles.button, pressed ? styles.buttonPressed : null]} 
        android_ripple={{color: '#f5eded'}}
        onPress={onPress}>
            <View style={[styles.gridItem, {backgroundColor: color}]}>
                <Text style={styles.gridText}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    height: 150,
    borderRadius: 8,
    elevation: 10,
    overflow: Platform.OS === 'android' ? 'hidden': 'visible',

    backgroundColor: "#302b2b",
    shadowColor: '#a6a6a6',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 8
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.8,
  },

  gridItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  
  gridText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#ffff",

  }

})