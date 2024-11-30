import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // Ordenação por prioridade

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now().toString() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const sortTasks = () => {
    setSortOrder((prevOrder) => (prevOrder === 'desc' ? 'asc' : 'desc'));
    setTasks((prevTasks) =>
      [...prevTasks].sort((a, b) =>
        sortOrder === 'desc' ? a.priority - b.priority : b.priority - a.priority
      )
    );
  };

  return (
    <View style={styles.container}>
      <TaskForm onAddTask={addTask} />
      <Button title={`Ordenar: ${sortOrder === 'desc' ? 'Ascendente' : 'Descendente'}`} onPress={sortTasks} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onEditTask={updateTask}
            onDeleteTask={() => deleteTask(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});
