import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const goalItem = ({itemData:{item}, onDelete}) => {
    return (
        <TouchableOpacity onLongPress={onDelete}>
        <View style={styles.listItem}>
            <Text>{item.value}</Text>
        </View>
        </TouchableOpacity>
    );
}

export default goalItem;

const styles = StyleSheet.create({
    listItem:{
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#ccc',
        borderColor:'#f0f0',
        borderWidth: 1
      }
});

