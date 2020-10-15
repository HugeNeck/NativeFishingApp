import { StyleSheet, Dimensions } from 'react-native';


const height = Dimensions.get('window').height

export default StyleSheet.create({
    screenContainer: {
        height: height,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 12
      },
      centerContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
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
        flex: .5,
        alignSelf: 'center',
        fontWeight: "bold" ,
        fontSize: 20,
        color: 'red',
        flexShrink: 1
      },
      input: {
        color: 'red'
      },
      picker: {
        flex: 1,
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center'
      },
      pickerContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems:'center',
      },
      weather: {
       color: 'white',
       fontWeight: 'bold',
       fontSize: 17
      },
      weatherContainer: {
        flex: .7,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30
       },
      pictureContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
       },
       buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
       },
       LiveWellContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexGrow : 5,
       }
  })