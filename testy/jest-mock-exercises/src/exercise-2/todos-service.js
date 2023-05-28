import { postTask } from './server';
/**
 *
 * @param {string} task
 */
export const addTodo = (task) => {
  if (task) {
    // test 2.
    postTask(task);

    // test 1.
    return {
      success: true,
    };
  } else {
    // test 3.
    return {
      error: 'Given task is not valid',
    };
  }
};
