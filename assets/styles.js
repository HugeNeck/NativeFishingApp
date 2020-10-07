import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screenContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 12
      },
      centerContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 1
      },
      space: {
        height: 10, 
        width: 10
      },
      image: {
        width: 160, 
        height: 100,
      },
      title: {
        flex: .3,
        alignSelf: 'center',
        fontWeight: "bold" ,
        fontSize: 20,
        color: 'red',
      },
      input: {
        color: 'red'
      },
      picker: {
        flex: 1,
        color: 'red',
      },
      pickerContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems:'center'
      },
      weather: {
       color: 'white',
       fontWeight: 'bold',
       fontSize: 17
      },
      weatherContainer: {
        flex: .7,
        justifyContent: 'flex-end',
        flexShrink: 1
       },

      pictureContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 3
       }
  })