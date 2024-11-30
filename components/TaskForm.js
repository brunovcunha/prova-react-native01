import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const TaskForm = ({ onAddTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(1); // 1 = Baixa, 2 = Média, 3 = Alta

  const handleAddTask = () => {
    if (name.trim() && description.trim()) {
      onAddTask({ name, description, priority });
      setName('');
      setDescription('');
      setPriority(1);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome da Tarefa"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição da Tarefa"
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.priorityContainer}>
        <Text>Prioridade:</Text>
        {['Baixa', 'Média', 'Alta'].map((label, index) => (
          <Button
            key={index}
            title={label}
            onPress={() => setPriority(index + 1)}
            color={priority === index + 1 ? 'blue' : 'gray'}
          />
        ))}
      </View>
      <Button title="Adicionar Tarefa" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default TaskForm;
