import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

const TodoList = ({todos, dispatch}) => (
  <View>
    {todos.map(todo => (
      <Text key={todo}>{todo}</Text>
    ))}
    <Button title={'Adicionar todo'} onPress={() => dispatch({type: 'ADD_TODO', text: 'Novo todo'})} />
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
