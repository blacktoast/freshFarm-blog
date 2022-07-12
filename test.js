const async = (gen) => {
  const g = gen();

  const resolves = (arg) => {
    const result = g.next(arg);

    console.log('2');
    console.log(result, arg);
    return result.done
      ? result.value
      : result.value.then((res) => resolves(res));
  };

  return resolves;
};

async(function* fetchTodo() {
  console.log('aa');
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  console.log('0');
  const res = yield fetch(url);
  console.log('1');
  const todo = yield res.json();
  console.log(todo);
})();
