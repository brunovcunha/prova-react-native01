import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

const TaskItem = ({ task, onEditTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((prev) => !prev);

  return (
    <Pressable style={styles.container}>
      <View style={styles.taskInfo}>
        <Text style={styles.taskName}>{task.name}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <Text style={styles.priority}>Prioridade: {['Baixa', 'Média', 'Alta'][task.priority - 1]}</Text>
      </View>
      <View style={styles.actions}>
        <Button title="Editar" onPress={toggleEdit} />
        <Button title="Excluir" onPress={onDeleteTask} color="red" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
  },
  taskInfo: {
    marginBottom: 10,
  },
  taskName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 14,
    color: '#555',
  },
  priority: {
    fontSize: 12,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TaskItem;
