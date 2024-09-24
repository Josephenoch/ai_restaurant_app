import type { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';


import {ThemedView} from '@/components';


export default function ParallaxScrollView({
  children,
}: PropsWithChildren) {

  return (
    <ThemedView style={styles.container}>
        <ThemedView style={styles.content}>{children}</ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#F9F9F9",
  },
  header: {
    height: 250,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
    backgroundColor: "#F9F9F9",
  },
});
