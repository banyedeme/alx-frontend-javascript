export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Using let here as const cannot be reassigned
    let task = true;
    let task2 = false;
    return [task, task2];
  }

  return [task, task2];
}

